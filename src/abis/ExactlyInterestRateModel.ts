const ExactlyInterestRateModel = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'fixedCurveA_',
        type: 'uint256',
      },
      {
        internalType: 'int256',
        name: 'fixedCurveB_',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'fixedMaxUtilization_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'floatingCurveA_',
        type: 'uint256',
      },
      {
        internalType: 'int256',
        name: 'floatingCurveB_',
        type: 'int256',
      },
      {
        internalType: 'uint256',
        name: 'floatingMaxUtilization_',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AlreadyMatured',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UtilizationExceeded',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'maturity',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'borrowed',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'supplied',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'backupAssets',
        type: 'uint256',
      },
    ],
    name: 'fixedBorrowRate',
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
    name: 'fixedCurveA',
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
    name: 'fixedCurveB',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fixedMaxUtilization',
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
    name: 'floatingCurveA',
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
    name: 'floatingCurveB',
    outputs: [
      {
        internalType: 'int256',
        name: '',
        type: 'int256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'floatingMaxUtilization',
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
        name: 'utilization',
        type: 'uint256',
      },
    ],
    name: 'floatingRate',
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
        name: 'borrowed',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'supplied',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'backupAssets',
        type: 'uint256',
      },
    ],
    name: 'minFixedRate',
    outputs: [
      {
        internalType: 'uint256',
        name: 'rate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'utilization',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export default ExactlyInterestRateModel;
