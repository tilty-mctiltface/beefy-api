import BigNumber, { BigNumber as BigNumberStatic } from 'bignumber.js';
import { ChainId } from '../../../../packages/address-book/address-book';
import { getTotalPerformanceFeeForVault } from '../../vaults/getVaultFees';
import getBlockTime from '../../../utils/getBlockTime';
import fetchPrice from '../../../utils/fetchPrice';
import { compound } from '../../../utils/compound';
import { BASE_HPY } from '../../../constants';
import cv3Token from '../../../abis/cv3Token';
import { Abi } from 'viem';
import { fetchContract, fetchNoMulticallContract } from '../../rpc/client';

const SECONDS_PER_YEAR = 31536000;

const getCompoundV3ApyData = async (params: CompoundV3ApyParams) => {
  const poolsData = await getPoolsData(params);

  const { supplyApys, supplyCompApys } = await getPoolsApys(params, poolsData);

  const apys = {};
  params.pools.forEach((pool, i) => {
    const apy = getPoolApy(pool, supplyApys[i], supplyCompApys[i]);

    if (params.log) {
      console.log(pool.name, apy, supplyApys[i].valueOf(), supplyCompApys[i].valueOf());
    }

    apys[pool.name] = apy;
  });

  return apys;
};

const getPoolsApys = async (params: CompoundV3ApyParams, data: PoolsData) => {
  //const compDecimals = params.compDecimals ?? '1e18';
  const compOracle = params.compOracle ?? 'tokens';
  const compPrice = await fetchPrice({ oracle: compOracle, id: params.compOracleId });
  const calculatedBlockTime = await getBlockTime(params.chainId);
  const secondsPerBlock = params.secondsPerBlock ?? calculatedBlockTime;
  const BLOCKS_PER_YEAR = SECONDS_PER_YEAR / secondsPerBlock;
  const trackingIndexScale = 1000000000000000;

  const supplyApys = data.supplyRates.map(v => v.times(BLOCKS_PER_YEAR).div('1e18'));

  const annualCompSupplyInUsd = data.compSupplySpeeds.map(v =>
    v.times(BLOCKS_PER_YEAR).div(trackingIndexScale).times(compPrice)
  );

  const totalSuppliesInUsd = data.totalSupplies.map((v, i) =>
    v.div(params.pools[i].decimals).times(data.tokenPrices[i])
  );

  const supplyCompApys = annualCompSupplyInUsd.map((v, i) => v.div(totalSuppliesInUsd[i]));

  return {
    supplyApys,
    supplyCompApys,
  };
};

const getPoolApy = (
  pool: CompoundV3Pool,
  supplyApy: BigNumberStatic,
  supplyCompApy: BigNumberStatic
) => {
  const totalComp = supplyCompApy;
  const shareAfterBeefyPerformanceFee = 1 - getTotalPerformanceFeeForVault(pool.name);
  const compoundedComp = compound(totalComp, BASE_HPY, 1, shareAfterBeefyPerformanceFee);
  const apy = supplyApy.plus(compoundedComp).toNumber();

  return apy;
};

const getPoolsData = async (params: CompoundV3ApyParams): Promise<PoolsData> => {
  const cTokenAbi = params.cTokenAbi ?? cv3Token;

  const supplyRateCalls = [];
  const compSupplySpeedCalls = [];
  const totalSupplyCalls = [];

  let pricePromises = params.pools.map(pool =>
    fetchPrice({ oracle: pool.oracle, id: pool.oracleId })
  );

  for (let i = 0; i < params.pools.length; i++) {
    const pool = params.pools[i];
    const cTokenContract = fetchContract(pool.cToken, cTokenAbi, params.chainId);
    const cToken = fetchNoMulticallContract(pool.cToken, cTokenAbi, params.chainId);
    const utilizationRate = await cToken.read.getUtilization();
    supplyRateCalls.push(cTokenContract.read.getSupplyRate([utilizationRate]));
    compSupplySpeedCalls.push(cTokenContract.read.baseTrackingSupplySpeed());
    totalSupplyCalls.push(cTokenContract.read.totalSupply());
  }

  const res = await Promise.all([
    Promise.all(supplyRateCalls),
    Promise.all(compSupplySpeedCalls),
    Promise.all(totalSupplyCalls),
    Promise.all(pricePromises),
  ]);

  const supplyRates: BigNumber[] = res[0].map(v => new BigNumber(v.toString()));
  const compSupplySpeeds: BigNumber[] = res[1].map(v => new BigNumber(v.toString()));
  const totalSupplies: BigNumber[] = res[2].map(v => new BigNumber(v.toString()));

  const tokenPrices = res[3];

  return {
    tokenPrices,
    supplyRates,
    compSupplySpeeds,
    totalSupplies,
  };
};

export interface PoolsData {
  tokenPrices: BigNumber[];
  supplyRates: BigNumber[];
  compSupplySpeeds: BigNumber[];
  totalSupplies: BigNumber[];
}

export interface CompoundV3Pool {
  name: string;
  cToken: string;
  oracle: string;
  oracleId: string;
  decimals: string;
  platform?: string;
  depositFee?: number;
  beefyFee?: number;
}

export interface CompoundV3ApyParams {
  chainId: ChainId;
  comptrollerAbi?: Abi;
  compOracle?: string;
  compOracleId: string;
  compDecimals?: string;
  cTokenAbi?: Abi;
  pools: CompoundV3Pool[];
  secondsPerBlock?: number;
  liquidityProviderFee?: number;
  log?: boolean;
}

export default getCompoundV3ApyData;
