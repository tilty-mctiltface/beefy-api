const SpookyComplexRewarder = [
  {
    inputs: [
      {
        internalType: 'contract IERC20Ext',
        name: '_rewardToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_rewardPerSecond',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_MASTERCHEF_V2',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: '_tokenAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amt',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: '_adr',
        type: 'address',
      },
    ],
    name: 'AdminTokenRecovery',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'LogInit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'pid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'LogOnReward',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'pid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'allocPoint',
        type: 'uint256',
      },
    ],
    name: 'LogPoolAddition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rewardPerSecond',
        type: 'uint256',
      },
    ],
    name: 'LogRewardPerSecond',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'pid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'allocPoint',
        type: 'uint256',
      },
    ],
    name: 'LogSetPool',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'pid',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lastRewardTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'lpSupply',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'accRewardPerShare',
        type: 'uint256',
      },
    ],
    name: 'LogUpdatePool',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ACC_TOKEN_PRECISION',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'allocPoint',
        type: 'uint64',
      },
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_update',
        type: 'bool',
      },
    ],
    name: 'add',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'childrenRewarders',
    outputs: [
      {
        internalType: 'contract IRewarder',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20Ext',
        name: '_rewardToken',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_rewardPerSecond',
        type: 'uint256',
      },
    ],
    name: 'createChild',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getChildrenRewarders',
    outputs: [
      {
        internalType: 'contract IRewarder[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'massUpdatePools',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amt',
        type: 'uint256',
      },
    ],
    name: 'onReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'pendingToken',
    outputs: [
      {
        internalType: 'uint256',
        name: 'pending',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pid',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'pendingTokens',
    outputs: [
      {
        internalType: 'contract IERC20[]',
        name: 'rewardTokens',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'rewardAmounts',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'poolIds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'poolInfo',
    outputs: [
      {
        internalType: 'uint128',
        name: 'accRewardPerShare',
        type: 'uint128',
      },
      {
        internalType: 'uint64',
        name: 'lastRewardTime',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: 'allocPoint',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'poolLength',
    outputs: [
      {
        internalType: 'uint256',
        name: 'pools',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'popChildren',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amt',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_adr',
        type: 'address',
      },
    ],
    name: 'recoverTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardPerSecond',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_pid',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: '_allocPoint',
        type: 'uint64',
      },
      {
        internalType: 'bool',
        name: '_update',
        type: 'bool',
      },
    ],
    name: 'set',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_rewardPerSecond',
        type: 'uint256',
      },
    ],
    name: 'setRewardPerSecond',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalAllocPoint',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'pid',
        type: 'uint256',
      },
    ],
    name: 'updatePool',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'accRewardPerShare',
            type: 'uint128',
          },
          {
            internalType: 'uint64',
            name: 'lastRewardTime',
            type: 'uint64',
          },
          {
            internalType: 'uint64',
            name: 'allocPoint',
            type: 'uint64',
          },
        ],
        internalType: 'struct ComplexRewarder.PoolInfo',
        name: 'pool',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'userInfo',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewardDebt',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export default SpookyComplexRewarder;
