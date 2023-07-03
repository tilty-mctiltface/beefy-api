const { zksyncWeb3: web3 } = require('../../../utils/web3');
const { ZKSYNC_CHAIN_ID: chainId } = require('../../../constants');
import { getEDecimals } from '../../../utils/getEDecimals';
const { getSolidlyGaugeApys } = require('../common/getSolidlyGaugeApys');

const stablePools = require('../../../data/zksync/velocoreStableLpPools.json');
const volatilePools = require('../../../data/zksync/velocoreLpPools.json');
import { addressBook } from '../../../../packages/address-book/address-book';
const {
  zksync: {
    tokens: { VC },
  },
} = addressBook;

const pools = [...stablePools, ...volatilePools];
const getVelocoreApys = async () => {
  const gaugeApys = getSolidlyGaugeApys({
    web3: web3,
    chainId: chainId,
    pools: pools,
    oracleId: 'VC',
    oracle: 'tokens',
    decimals: getEDecimals(VC.decimals),
    reward: VC.address,
    boosted: false,
    // log: true,
  });

  let apys = {};
  let apyBreakdowns = {};

  const results = await Promise.allSettled([gaugeApys]);
  for (const result of results) {
    if (result.status !== 'fulfilled') {
      console.warn('getVelocoreApys error', result.reason);
    } else {
      apys = { ...apys, ...result.value.apys };
      apyBreakdowns = { ...apyBreakdowns, ...result.value.apyBreakdowns };
    }
  }

  return {
    apys,
    apyBreakdowns,
  };
};

module.exports = getVelocoreApys;
