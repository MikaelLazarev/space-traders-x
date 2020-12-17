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
    name: "getLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "r1Liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "r2Liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    outputs: [
      {
        internalType: "uint256",
        name: "amount1in",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount2in",
        type: "uint256",
      },
    ],
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
  "0x608060405234801561001057600080fd5b50604051610fd4380380610fd48339818101604052606081101561003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505060006100686101d160201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35082600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506101d9565b600033905090565b610dec806101e86000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100cf5780639f1d0f5914610103578063e97af18614610176578063f2fde38b146101945761007d565b8063090c18c2146100825780630910a510146100a0578063715018a6146100c5575b600080fd5b61008a6101d8565b6040518082815260200191505060405180910390f35b6100a861021d565b604051808381526020018281526020019250505060405180910390f35b6100cd6103f4565b005b6100d761057a565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101596004803603606081101561011957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506105a3565b604051808381526020018281526020019250505060405180910390f35b61017e610981565b6040518082815260200191505060405180910390f35b6101d6600480360360208110156101aa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109c6565b005b60008060006101e561021d565b9150915061021681610208670de0b6b3a764000085610bd190919063ffffffff16565b610c5790919063ffffffff16565b9250505090565b600080600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156102cb57600080fd5b505afa1580156102df573d6000803e3d6000fd5b505050506040513d60208110156102f557600080fd5b81019080805190602001909291905050509150600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156103b357600080fd5b505afa1580156103c7573d6000803e3d6000fd5b505050506040513d60208110156103dd57600080fd5b810190808051906020019092919050505090509091565b6103fc610ca1565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146104bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000806105ae610ca1565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461066e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600084118061067d5750600083115b6106ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600f8152602001807f4e6f7468696e6720746f2073776170000000000000000000000000000000000081525060200191505060405180910390fd5b610723670de0b6b3a76400006107156107066101d8565b86610bd190919063ffffffff16565b610c5790919063ffffffff16565b9150610759670de0b6b3a764000061074b61073c610981565b87610bd190919063ffffffff16565b610c5790919063ffffffff16565b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1687876040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561082e57600080fd5b505af1158015610842573d6000803e3d6000fd5b505050506040513d602081101561085857600080fd5b810190808051906020019092919050505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1687866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561093d57600080fd5b505af1158015610951573d6000803e3d6000fd5b505050506040513d602081101561096757600080fd5b810190808051906020019092919050505050935093915050565b600080600061098e61021d565b915091506109bf826109b1670de0b6b3a764000084610bd190919063ffffffff16565b610c5790919063ffffffff16565b9250505090565b6109ce610ca1565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610a8e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610b14576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610d706026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600080831415610be45760009050610c51565b6000828402905082848281610bf557fe5b0414610c4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610d966021913960400191505060405180910390fd5b809150505b92915050565b6000610c9983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610ca9565b905092915050565b600033905090565b60008083118290610d55576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610d1a578082015181840152602081019050610cff565b50505050905090810190601f168015610d475780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610d6157fe5b04905080915050939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220a5f546984b63bf816f94aa53a8896f3e08a9f7ed60efa451fb559f5601717d1364736f6c634300060c0033";
