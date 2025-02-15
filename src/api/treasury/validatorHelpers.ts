import { ValidatorAsset } from './types';
import { ApiChain } from '../../utils/chain';

const validatorsByChain: Partial<Record<ApiChain, ValidatorAsset[]>> = {
  fantom: [
    {
      id: 'fantom-validator',
      name: 'Fantom Validator',
      address: 'native',
      oracleId: 'FTM',
      oracleType: 'tokens',
      decimals: 18,
      symbol: 'FTM',
      method: 'contract',
      methodPath: '0xDf87E4dBb0336d3571b2f8000b1f5353Dfb638c1',
      assetType: 'validator',
    },
  ],
  ethereum: [
    {
      id: 'eth-validator-1',
      name: 'Ethereum Validator',
      address: 'native',
      oracleId: 'ETH',
      oracleType: 'tokens',
      decimals: 18,
      symbol: 'ETH',
      method: 'api',
      methodPath: 'https://beaconcha.in/api/v1/validator/402418',
      assetType: 'validator',
    },
    {
      id: 'eth-validator-2',
      name: 'Ethereum Validator 2',
      address: 'native',
      oracleId: 'ETH',
      oracleType: 'tokens',
      decimals: 18,
      symbol: 'ETH',
      method: 'api',
      methodPath: 'https://beaconcha.in/api/v1/validator/986225',
      assetType: 'validator',
    },
    {
      id: 'eth-validator-3',
      name: 'Ethereum Validator 3',
      address: 'native',
      oracleId: 'ETH',
      oracleType: 'tokens',
      decimals: 18,
      symbol: 'ETH',
      method: 'api',
      methodPath: 'https://beaconcha.in/api/v1/validator/986226',
      assetType: 'validator',
    },
  ],
  fuse: [
    {
      id: 'fuse-validator',
      name: 'Fuse Validator',
      address: 'native',
      oracleId: 'FUSE',
      oracleType: 'tokens',
      decimals: 18,
      symbol: 'FUSE',
      method: 'contract',
      methodPath: '0xa852A119a29d44e13A4B939B482D522808437BAe',
      assetType: 'validator',
    },
  ],
};

export const hasChainValidator = (chain: ApiChain): boolean => !!validatorsByChain[chain];

export const getChainValidators = (chain: ApiChain): ValidatorAsset[] => validatorsByChain[chain];
