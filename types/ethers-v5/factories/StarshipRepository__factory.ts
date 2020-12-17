/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StarshipRepository } from "../StarshipRepository";

export class StarshipRepository__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressRepository: string,
    overrides?: Overrides
  ): Promise<StarshipRepository> {
    return super.deploy(
      addressRepository,
      overrides || {}
    ) as Promise<StarshipRepository>;
  }
  getDeployTransaction(
    addressRepository: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(addressRepository, overrides || {});
  }
  attach(address: string): StarshipRepository {
    return super.attach(address) as StarshipRepository;
  }
  connect(signer: Signer): StarshipRepository__factory {
    return super.connect(signer) as StarshipRepository__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StarshipRepository {
    return new Contract(address, _abi, signerOrProvider) as StarshipRepository;
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
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Move",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "NewStarShip",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "newLevel",
        type: "uint8",
      },
    ],
    name: "Upgrade",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "velocity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fuelPerParsec",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iron",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oil",
        type: "uint256",
      },
    ],
    name: "addStarshipLevel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "distance",
        type: "uint256",
      },
    ],
    name: "calculateFuelConsumption",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "distance",
        type: "uint256",
      },
    ],
    name: "calculateTimeToArrive",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountPlanet",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountStartshipProperties",
    outputs: [
      {
        internalType: "uint8",
        name: "level",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "velocity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fuelPerParsec",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLevelsLength",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isAccountExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "dstPlanet",
        type: "address",
      },
    ],
    name: "moveToPlanet",
    outputs: [
      {
        internalType: "uint256",
        name: "fuelConsumption",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "registerAccount",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "account",
        type: "address",
      },
    ],
    name: "timeToArrive",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "upgradeStarShip",
    outputs: [
      {
        internalType: "uint256",
        name: "gold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "iron",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "oil",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162001d3238038062001d328339818101604052602081101561003557600080fd5b8101908080519060200190929190505050600061005661021e60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f1d75fd56040518163ffffffff1660e01b815260040160206040518083038186803b15801561019d57600080fd5b505afa1580156101b1573d6000803e3d6000fd5b505050506040513d60208110156101c757600080fd5b8101908080519060200190929190505050600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610226565b600033905090565b611afc80620002366000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638da5cb5b1161008c578063ab58430e11610066578063ab58430e1461041e578063be81ff821461048c578063d4d46b7c146104f2578063f2fde38b14610513576100ea565b80638da5cb5b1461034457806397c414df146103785780639a6611a8146103bc576100ea565b806368baad6d116100c857806368baad6d1461020a578063715018a61461026c57806377f5109314610276578063843066f6146102cc576100ea565b80633bbe58cd146100ef57806350fe5ab31461014957806351668f00146101a1575b600080fd5b6101316004803603602081101561010557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610557565b60405180821515815260200191505060405180910390f35b61018b6004803603602081101561015f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105f2565b6040518082815260200191505060405180910390f35b6101e3600480360360208110156101b757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106a3565b604051808460ff168152602001838152602001828152602001935050505060405180910390f35b6102566004803603604081101561022057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061078b565b6040518082815260200191505060405180910390f35b6102746107ef565b005b6102ca600480360360a081101561028c57600080fd5b810190808035906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190505050610975565b005b61032e600480360360408110156102e257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aca565b6040518082815260200191505060405180910390f35b61034c610ecf565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103ba6004803603602081101561038e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ef8565b005b610408600480360360408110156103d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611307565b6040518082815260200191505060405180910390f35b6104606004803603602081101561043457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061136e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104ce600480360360208110156104a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113da565b60405180848152602001838152602001828152602001935050505060405180910390f35b6104fa611666565b604051808260ff16815260200191505060405180910390f35b6105556004803603602081101561052957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611673565b005b60008073ffffffffffffffffffffffffffffffffffffffff16600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301544310610646576000905061069e565b61069b43600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003015461187e90919063ffffffff16565b90505b919050565b6000806000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff169250600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101549150600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015490509193909250565b600080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002015490506107e681846118c890919063ffffffff16565b91505092915050565b6107f7611912565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146108b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b61097d611912565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a3d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b60016040518060a00160405280878152602001868152602001858152602001848152602001838152509080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015550505050505050565b6000610ad4611912565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610b94576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000610b9f846105f2565b14610c12576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f5374617273686970206973206f6e20746865207761790000000000000000000081525060200191505060405180910390fd5b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632d430a0b83866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015610d2257600080fd5b505afa158015610d36573d6000803e3d6000fd5b505050506040513d6020811015610d4c57600080fd5b8101908080519060200190929190505050905083600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610dea8582611307565b4301600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301819055507fe89064d6bceb9e418c90371676dea4e66de623fd60725d4a256032b8a4fdc557858386604051808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a1610ec5858261078b565b9250505092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610f00611912565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610fc0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b610fc981610557565b1561103c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4163636f756e7420697320616c7265616479206578697374730000000000000081525060200191505060405180910390fd5b6000611046611666565b60ff16116110bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f4e6f20737461727473686970206c6576656c732073657420757000000000000081525060200191505060405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663990234b460006040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561113257600080fd5b505afa158015611146573d6000803e3d6000fd5b505050506040513d602081101561115c57600080fd5b810190808051906020019092919050505090506040518060a00160405280600060ff168152602001600160008154811061119257fe5b906000526020600020906005020160000154815260200160016000815481106111b757fe5b90600052602060002090600502016001015481526020014381526020018273ffffffffffffffffffffffffffffffffffffffff16815250600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff021916908360ff16021790555060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f4a52e328246491cccd9eefc8660e593d0ffc23cb8aa2de8818d40b1339e21f5c82604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15050565b600080600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154905061136281846118c890919063ffffffff16565b60010191505092915050565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008060006113e7611912565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146114a7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b6000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900460ff1690506001611505611666565b0360ff168160ff1610611580576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f752068617665206d6178696d756d206c6576656c0000000000000000000081525060200191505060405180910390fd5b60018160ff168154811061159057fe5b906000526020600020906005020160020154935060018160ff16815481106115b457fe5b906000526020600020906005020160030154925060018160ff16815481106115d857fe5b9060005260206000209060050201600401549150600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff16021790555050509193909250565b6000600180549050905090565b61167b611912565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461173b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156117c1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611aa16026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60006118c083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061191a565b905092915050565b600061190a83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506119da565b905092915050565b600033905090565b60008383111582906119c7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561198c578082015181840152602081019050611971565b50505050905090810190601f1680156119b95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008083118290611a86576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611a4b578082015181840152602081019050611a30565b50505050905090810190601f168015611a785780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611a9257fe5b04905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220f06cbb9376fe5f3267d2c0fe2f9be88e5a2a472dbce6cda6cab3f1ef90487a7564736f6c634300060c0033";
