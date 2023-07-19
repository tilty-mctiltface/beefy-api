const IAuraMinter = [
  {
    inputs: [
      { internalType: 'address', name: '_auraOFT', type: 'address' },
      { internalType: 'uint16', name: '_canonicalChainId', type: 'uint16' },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'bridgeDelegate', type: 'address' }],
    name: 'BridgeDelegateUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
      { indexed: false, internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
      { indexed: false, internalType: 'uint64', name: '_nonce', type: 'uint64' },
      { indexed: false, internalType: 'bytes', name: '_payload', type: 'bytes' },
      { indexed: false, internalType: 'bytes', name: '_reason', type: 'bytes' },
    ],
    name: 'MessageFailed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
      { indexed: false, internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
      { indexed: false, internalType: 'uint64', name: '_nonce', type: 'uint64' },
      { indexed: false, internalType: 'bytes32', name: '_payloadHash', type: 'bytes32' },
    ],
    name: 'RetryMessageSuccess',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'address', name: 'token', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'reward', type: 'uint256' },
    ],
    name: 'RewardAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint16', name: 'srcChainId', type: 'uint16' },
      { indexed: false, internalType: 'bytes32', name: 'selector', type: 'bytes32' },
      { indexed: false, internalType: 'bytes', name: 'adapterParams', type: 'bytes' },
    ],
    name: 'SetAdapterParams',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint16', name: '_dstChainId', type: 'uint16' },
      { indexed: false, internalType: 'uint16', name: '_type', type: 'uint16' },
      { indexed: false, internalType: 'uint256', name: '_minDstGas', type: 'uint256' },
    ],
    name: 'SetMinDstGas',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'precrime', type: 'address' }],
    name: 'SetPrecrime',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint16', name: '_remoteChainId', type: 'uint16' },
      { indexed: false, internalType: 'bytes', name: '_path', type: 'bytes' },
    ],
    name: 'SetTrustedRemote',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint16', name: '_remoteChainId', type: 'uint16' },
      { indexed: false, internalType: 'bytes', name: '_remoteAddress', type: 'bytes' },
    ],
    name: 'SetTrustedRemoteAddress',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_PAYLOAD_SIZE_LIMIT',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'accAuraRewards',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'accBalRewards',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'auraOFT',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'balToken',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'booster',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bridgeDelegate',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'canonicalChainId',
    outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '', type: 'uint16' },
      { internalType: 'bytes', name: '', type: 'bytes' },
      { internalType: 'uint64', name: '', type: 'uint64' },
    ],
    name: 'failedMessages',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
      { internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
    ],
    name: 'forceResumeReceive',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '', type: 'uint16' },
      { internalType: 'bytes32', name: '', type: 'bytes32' },
    ],
    name: 'getAdapterParams',
    outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_version', type: 'uint16' },
      { internalType: 'uint16', name: '_chainId', type: 'uint16' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '_configType', type: 'uint256' },
    ],
    name: 'getConfig',
    outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint16', name: '_remoteChainId', type: 'uint16' }],
    name: 'getTrustedRemoteAddress',
    outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_booster', type: 'address' },
      { internalType: 'address', name: '_balToken', type: 'address' },
      { internalType: 'address', name: '_lzEndpoint', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
      { internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
    ],
    name: 'isTrustedRemote',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lzEndpoint',
    outputs: [{ internalType: 'contract ILayerZeroEndpoint', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
      { internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
      { internalType: 'uint64', name: '_nonce', type: 'uint64' },
      { internalType: 'bytes', name: '_payload', type: 'bytes' },
    ],
    name: 'lzReceive',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '', type: 'uint16' },
      { internalType: 'uint16', name: '', type: 'uint16' },
    ],
    name: 'minDstGasLookup',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_to', type: 'address' },
      { internalType: 'uint256', name: '_amount', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mintRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
      { internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
      { internalType: 'uint64', name: '_nonce', type: 'uint64' },
      { internalType: 'bytes', name: '_payload', type: 'bytes' },
    ],
    name: 'nonblockingLzReceive',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
    name: 'payloadSizeLimitLookup',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'precrime',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_originalSender', type: 'address' },
      { internalType: 'uint256', name: '_fees', type: 'uint256' },
      { internalType: 'uint256', name: '_rewards', type: 'uint256' },
      { internalType: 'address', name: '_zroPaymentAddress', type: 'address' },
    ],
    name: 'queueNewRewards',
    outputs: [],
    stateMutability: 'payable',
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
    inputs: [
      { internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
      { internalType: 'bytes', name: '_srcAddress', type: 'bytes' },
      { internalType: 'uint64', name: '_nonce', type: 'uint64' },
      { internalType: 'bytes', name: '_payload', type: 'bytes' },
    ],
    name: 'retryMessage',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
      { internalType: 'bytes32', name: '_selector', type: 'bytes32' },
      { internalType: 'bytes', name: '_adapterParams', type: 'bytes' },
    ],
    name: 'setAdapterParams',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_bridgeDelegate', type: 'address' }],
    name: 'setBridgeDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_version', type: 'uint16' },
      { internalType: 'uint16', name: '_chainId', type: 'uint16' },
      { internalType: 'uint256', name: '_configType', type: 'uint256' },
      { internalType: 'bytes', name: '_config', type: 'bytes' },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_dstChainId', type: 'uint16' },
      { internalType: 'uint16', name: '_packetType', type: 'uint16' },
      { internalType: 'uint256', name: '_minGas', type: 'uint256' },
    ],
    name: 'setMinDstGas',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_dstChainId', type: 'uint16' },
      { internalType: 'uint256', name: '_size', type: 'uint256' },
    ],
    name: 'setPayloadSizeLimit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_precrime', type: 'address' }],
    name: 'setPrecrime',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint16', name: '_version', type: 'uint16' }],
    name: 'setReceiveVersion',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint16', name: '_version', type: 'uint16' }],
    name: 'setSendVersion',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_srcChainId', type: 'uint16' },
      { internalType: 'bytes', name: '_path', type: 'bytes' },
    ],
    name: 'setTrustedRemote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint16', name: '_remoteChainId', type: 'uint16' },
      { internalType: 'bytes', name: '_remoteAddress', type: 'bytes' },
    ],
    name: 'setTrustedRemoteAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint16', name: '', type: 'uint16' }],
    name: 'trustedRemoteLookup',
    outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export default IAuraMinter;
