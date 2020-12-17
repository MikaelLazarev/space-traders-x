/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Planet } from "../Planet";

export class Planet__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressRepository: string,
    name: string,
    x: BigNumberish,
    y: BigNumberish,
    overrides?: Overrides
  ): Promise<Planet> {
    return super.deploy(
      addressRepository,
      name,
      x,
      y,
      overrides || {}
    ) as Promise<Planet>;
  }
  getDeployTransaction(
    addressRepository: string,
    name: string,
    x: BigNumberish,
    y: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressRepository,
      name,
      x,
      y,
      overrides || {}
    );
  }
  attach(address: string): Planet {
    return super.attach(address) as Planet;
  }
  connect(signer: Signer): Planet__factory {
    return super.connect(signer) as Planet__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Planet {
    return new Contract(address, _abi, signerOrProvider) as Planet;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressRepository",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint16",
        name: "x",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "y",
        type: "uint16",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "resource1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "resource2",
        type: "address",
      },
    ],
    name: "NewResourcePair",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resource1",
        type: "address",
      },
      {
        internalType: "address",
        name: "resource2",
        type: "address",
      },
    ],
    name: "addResourcePair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCoordinates",
    outputs: [
      {
        internalType: "uint16",
        name: "x",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "y",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resource",
        type: "address",
      },
    ],
    name: "getResourceLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resource1",
        type: "address",
      },
      {
        internalType: "address",
        name: "resource2",
        type: "address",
      },
    ],
    name: "getResourcePair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resource1",
        type: "address",
      },
      {
        internalType: "address",
        name: "resource2",
        type: "address",
      },
    ],
    name: "getResourcePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resource1",
        type: "address",
      },
      {
        internalType: "address",
        name: "resource2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount1out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount2out",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002a6938038062002a69833981810160405260808110156200003757600080fd5b8101908080519060200190929190805160405193929190846401000000008211156200006257600080fd5b838201915060208201858111156200007957600080fd5b82518660018202830111640100000000821117156200009757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000cd578082015181840152602081019050620000b0565b50505050905090810190601f168015620000fb5780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291908051906020019092919050505060006200012b6200034c60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35083600260046101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260049054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a3568d076040518163ffffffff1660e01b815260040160206040518083038186803b1580156200027357600080fd5b505afa15801562000288573d6000803e3d6000fd5b505050506040513d60208110156200029f57600080fd5b8101908080519060200190929190505050600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600190805190602001906200030892919062000354565b5081600260006101000a81548161ffff021916908361ffff160217905550806002806101000a81548161ffff021916908361ffff16021790555050505050620003fa565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200039757805160ff1916838001178555620003c8565b82800160010185558215620003c8579182015b82811115620003c7578251825591602001919060010190620003aa565b5b509050620003d79190620003db565b5090565b5b80821115620003f6576000816000905550600101620003dc565b5090565b61265f806200040a6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063715018a611610066578063715018a6146102e8578063750a4937146102f25780638da5cb5b1461031f578063f2fde38b14610353578063fe029156146103975761009e565b806312b487f2146100a357806317d7de7c1461011b5780632df20fef1461019e5780633a6ee271146101f657806344fcc11514610284575b600080fd5b610105600480360360408110156100b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061040f565b6040518082815260200191505060405180910390f35b610123610566565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610163578082015181840152602081019050610148565b50505050905090810190601f1680156101905780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101e0600480360360208110156101b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610608565b6040518082815260200191505060405180910390f35b6102586004803603604081101561020c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106b3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102e66004803603604081101561029a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610815565b005b6102f0610c3e565b005b6102fa610dc4565b604051808361ffff1681526020018261ffff1681526020019250505060405180910390f35b610327610def565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103956004803603602081101561036957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e18565b005b61040d600480360360808110156103ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050611023565b005b60008061041c84846106b3565b90508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610156104db578073ffffffffffffffffffffffffffffffffffffffff1663090c18c26040518163ffffffff1660e01b815260040160206040518083038186803b15801561049857600080fd5b505afa1580156104ac573d6000803e3d6000fd5b505050506040513d60208110156104c257600080fd5b8101908080519060200190929190505050915050610560565b8073ffffffffffffffffffffffffffffffffffffffff1663e97af1866040518163ffffffff1660e01b815260040160206040518083038186803b15801561052157600080fd5b505afa158015610535573d6000803e3d6000fd5b505050506040513d602081101561054b57600080fd5b81019080805190602001909291905050509150505b92915050565b606060018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105fe5780601f106105d3576101008083540402835291602001916105fe565b820191906000526020600020905b8154815290600101906020018083116105e157829003601f168201915b5050505050905090565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561067157600080fd5b505afa158015610685573d6000803e3d6000fd5b505050506040513d602081101561069b57600080fd5b81019080805190602001909291905050509050919050565b60006106bf83836115ca565b80935081945050506000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561080b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f546f6b656e2070616972207761736e277420666f756e6400000000000000000081525060200191505060405180910390fd5b8091505092915050565b61081d61161a565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146108dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6108e782826115ca565b8092508193505050600030838360405161090090611622565b808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019350505050604051809103906000f080158015610976573d6000803e3d6000fd5b50905080600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff1663095ea7b3827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610ac557600080fd5b505af1158015610ad9573d6000803e3d6000fd5b505050506040513d6020811015610aef57600080fd5b8101908080519060200190929190505050508173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610b9257600080fd5b505af1158015610ba6573d6000803e3d6000fd5b505050506040513d6020811015610bbc57600080fd5b8101908080519060200190929190505050507f0d0a4ce1296ea49962718a1d8bf8d30c6fb5f69de1e2998f24ab197f7bb790e18383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050565b610c4661161a565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d06576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600080600260009054906101000a900461ffff1660028054906101000a900461ffff16915091509091565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610e2061161a565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610ee0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f66576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806126046026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ab58430e336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156110ac57600080fd5b505afa1580156110c0573d6000803e3d6000fd5b505050506040513d60208110156110d657600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff161480156111e457506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166350fe5ab3336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156111a757600080fd5b505afa1580156111bb573d6000803e3d6000fd5b505050506040513d60208110156111d157600080fd5b8101908080519060200190929190505050145b611256576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f416c6c6f776564206f6e6c7920666f72207573657273206f6e20706c616e657481525060200191505060405180910390fd5b600080600061126587876106b3565b90508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161015611365578073ffffffffffffffffffffffffffffffffffffffff16639f1d0f593387876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200193505050506040805180830381600087803b15801561131357600080fd5b505af1158015611327573d6000803e3d6000fd5b505050506040513d604081101561133d57600080fd5b810190808051906020019092919080519060200190929190505050809350819450505061142b565b8073ffffffffffffffffffffffffffffffffffffffff16639f1d0f593386886040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200193505050506040805180830381600087803b1580156113dd57600080fd5b505af11580156113f1573d6000803e3d6000fd5b505050506040513d604081101561140757600080fd5b81019080805190602001909291908051906020019092919050505080945081935050505b8673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156114ba57600080fd5b505af11580156114ce573d6000803e3d6000fd5b505050506040513d60208110156114e457600080fd5b8101908080519060200190929190505050508573ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561158557600080fd5b505af1158015611599573d6000803e3d6000fd5b505050506040513d60208110156115af57600080fd5b81019080805190602001909291905050505050505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16101561160c57838391509150611613565b8284915091505b9250929050565b600033905090565b610fd4806116308339019056fe608060405234801561001057600080fd5b50604051610fd4380380610fd48339818101604052606081101561003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505060006100686101d160201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35082600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506101d9565b600033905090565b610dec806101e86000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100cf5780639f1d0f5914610103578063e97af18614610176578063f2fde38b146101945761007d565b8063090c18c2146100825780630910a510146100a0578063715018a6146100c5575b600080fd5b61008a6101d8565b6040518082815260200191505060405180910390f35b6100a861021d565b604051808381526020018281526020019250505060405180910390f35b6100cd6103f4565b005b6100d761057a565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101596004803603606081101561011957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506105a3565b604051808381526020018281526020019250505060405180910390f35b61017e610981565b6040518082815260200191505060405180910390f35b6101d6600480360360208110156101aa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109c6565b005b60008060006101e561021d565b9150915061021681610208670de0b6b3a764000085610bd190919063ffffffff16565b610c5790919063ffffffff16565b9250505090565b600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156102cb57600080fd5b505afa1580156102df573d6000803e3d6000fd5b505050506040513d60208110156102f557600080fd5b81019080805190602001909291905050509150600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156103b357600080fd5b505afa1580156103c7573d6000803e3d6000fd5b505050506040513d60208110156103dd57600080fd5b810190808051906020019092919050505090509091565b6103fc610ca1565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146104bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000806105ae610ca1565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461066e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600084118061067d5750600083115b6106ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f4e6f7468696e6720746f2073776170000000000000000000000000000000000081525060200191505060405180910390fd5b610723670de0b6b3a76400006107156107066101d8565b86610bd190919063ffffffff16565b610c5790919063ffffffff16565b9150610759670de0b6b3a764000061074b61073c610981565b87610bd190919063ffffffff16565b610c5790919063ffffffff16565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1687876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561082e57600080fd5b505af1158015610842573d6000803e3d6000fd5b505050506040513d602081101561085857600080fd5b810190808051906020019092919050505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1687866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561093d57600080fd5b505af1158015610951573d6000803e3d6000fd5b505050506040513d602081101561096757600080fd5b810190808051906020019092919050505050935093915050565b600080600061098e61021d565b915091506109bf826109b1670de0b6b3a764000084610bd190919063ffffffff16565b610c5790919063ffffffff16565b9250505090565b6109ce610ca1565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a8e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610d706026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080831415610be45760009050610c51565b6000828402905082848281610bf557fe5b0414610c4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610d966021913960400191505060405180910390fd5b809150505b92915050565b6000610c9983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610ca9565b905092915050565b600033905090565b60008083118290610d55576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610d1a578082015181840152602081019050610cff565b50505050905090810190601f168015610d475780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610d6157fe5b04905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220a5f546984b63bf816f94aa53a8896f3e08a9f7ed60efa451fb559f5601717d1364736f6c634300060c00334f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220c945d917f590c87f2c6177ee12dc2e06362d28d2b63bf24d6eb429517611fb7b64736f6c634300060c0033";
