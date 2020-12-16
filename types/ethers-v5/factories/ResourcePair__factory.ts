/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ResourcePair } from "../ResourcePair";

export class ResourcePair__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    planet: string,
    resource1: string,
    resource2: string,
    overrides?: Overrides
  ): Promise<ResourcePair> {
    return super.deploy(
      planet,
      resource1,
      resource2,
      overrides || {}
    ) as Promise<ResourcePair>;
  }
  getDeployTransaction(
    planet: string,
    resource1: string,
    resource2: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      planet,
      resource1,
      resource2,
      overrides || {}
    );
  }
  attach(address: string): ResourcePair {
    return super.attach(address) as ResourcePair;
  }
  connect(signer: Signer): ResourcePair__factory {
    return super.connect(signer) as ResourcePair__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ResourcePair {
    return new Contract(address, _abi, signerOrProvider) as ResourcePair;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "planet",
        type: "address",
      },
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
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "getResourcePrice1",
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
    name: "getResourcePrice2",
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
        name: "account",
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
  "0x608060405234801561001057600080fd5b5060405161112f38038061112f8339818101604052606081101561003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505060006100686101d160201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35082600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506101d9565b600033905090565b610f47806101e86000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063090c18c214610067578063715018a6146100855780638da5cb5b1461008f5780639f1d0f59146100c3578063e97af1861461011b578063f2fde38b14610139575b600080fd5b61006f61017d565b6040518082815260200191505060405180910390f35b61008d6101a8565b005b61009761032e565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610119600480360360608110156100d957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050610357565b005b61012361091f565b6040518082815260200191505060405180910390f35b61017b6004803603602081101561014f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061094a565b005b600080600061018a610b55565b915091506101a18183610d2c90919063ffffffff16565b9250505090565b6101b0610d76565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610270576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61035f610d76565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461041f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600082118061042e5750600081115b6104a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f4e6f7468696e6720746f2073776170000000000000000000000000000000000081525060200191505060405180910390fd5b60006104bc6104ad61017d565b83610d7e90919063ffffffff16565b905060006104da6104cb61091f565b85610d7e90919063ffffffff16565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd86600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156105af57600080fd5b505af11580156105c3573d6000803e3d6000fd5b505050506040513d60208110156105d957600080fd5b810190808051906020019092919050505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd86600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156106be57600080fd5b505af11580156106d2573d6000803e3d6000fd5b505050506040513d60208110156106e857600080fd5b810190808051906020019092919050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1687876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156107cd57600080fd5b505af11580156107e1573d6000803e3d6000fd5b505050506040513d60208110156107f757600080fd5b810190808051906020019092919050505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1687866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156108dc57600080fd5b505af11580156108f0573d6000803e3d6000fd5b505050506040513d602081101561090657600080fd5b8101908080519060200190929190505050505050505050565b600080600061092c610b55565b915091506109438282610d2c90919063ffffffff16565b9250505090565b610952610d76565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a12576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610ecb6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610c0357600080fd5b505afa158015610c17573d6000803e3d6000fd5b505050506040513d6020811015610c2d57600080fd5b81019080805190602001909291905050509150600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610ceb57600080fd5b505afa158015610cff573d6000803e3d6000fd5b505050506040513d6020811015610d1557600080fd5b810190808051906020019092919050505090509091565b6000610d6e83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610e04565b905092915050565b600033905090565b600080831415610d915760009050610dfe565b6000828402905082848281610da257fe5b0414610df9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610ef16021913960400191505060405180910390fd5b809150505b92915050565b60008083118290610eb0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e75578082015181840152602081019050610e5a565b50505050905090810190601f168015610ea25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610ebc57fe5b04905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122077c88d732922640144de7af4068a60f7db5183bba85e3bdd6486724710ad7c8564736f6c634300060c0033";
