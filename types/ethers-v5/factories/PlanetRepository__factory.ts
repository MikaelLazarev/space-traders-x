/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PlanetRepository } from "../PlanetRepository";

export class PlanetRepository__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<PlanetRepository> {
    return super.deploy(overrides || {}) as Promise<PlanetRepository>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PlanetRepository {
    return super.attach(address) as PlanetRepository;
  }
  connect(signer: Signer): PlanetRepository__factory {
    return super.connect(signer) as PlanetRepository__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PlanetRepository {
    return new Contract(address, _abi, signerOrProvider) as PlanetRepository;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "planet",
        type: "address",
      },
    ],
    name: "NewPlanetAdded",
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
        name: "planet",
        type: "address",
      },
    ],
    name: "addPlanet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "planet1",
        type: "address",
      },
      {
        internalType: "address",
        name: "planet2",
        type: "address",
      },
    ],
    name: "calculateDistance",
    outputs: [
      {
        internalType: "uint256",
        name: "distance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "getPlanetByIndex",
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
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "getPlanetCoord",
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
    inputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "getPlanetName",
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
    inputs: [],
    name: "getPlanetsLength",
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
  "0x608060405234801561001057600080fd5b5060006100216100c460201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3506100cc565b600033905090565b61141a806100db6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806391dd6db51161006657806391dd6db514610192578063990234b41461023c578063de846df414610297578063efc91233146102eb578063f2fde38b1461030957610093565b80632d430a0b14610098578063476c10ff14610110578063715018a6146101545780638da5cb5b1461015e575b600080fd5b6100fa600480360360408110156100ae57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061034d565b6040518082815260200191505060405180910390f35b6101526004803603602081101561012657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610829565b005b61015c610a22565b005b610166610ba8565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101c1600480360360208110156101a857600080fd5b81019080803560ff169060200190929190505050610bd1565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102015780820151818401526020810190506101e6565b50505050905090810190601f16801561022e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61026b6004803603602081101561025257600080fd5b81019080803560ff169060200190929190505050610de2565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102c6600480360360208110156102ad57600080fd5b81019080803560ff169060200190929190505050610e88565b604051808361ffff1681526020018261ffff1681526020019250505060405180910390f35b6102f3610fe7565b6040518082815260200191505060405180910390f35b61034b6004803603602081101561031f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ff4565b005b600082600073ffffffffffffffffffffffffffffffffffffffff16600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610452576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f506c616e657420646f65736e277420657869737473000000000000000000000081525060200191505060405180910390fd5b82600073ffffffffffffffffffffffffffffffffffffffff16600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610555576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f506c616e657420646f65736e277420657869737473000000000000000000000081525060200191505060405180910390fd5b600080600260008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663750a49376040518163ffffffff1660e01b8152600401604080518083038186803b1580156105fc57600080fd5b505afa158015610610573d6000803e3d6000fd5b505050506040513d604081101561062657600080fd5b81019080805190602001909291908051906020019092919050505091509150600080600260008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663750a49376040518163ffffffff1660e01b8152600401604080518083038186803b1580156106ec57600080fd5b505afa158015610700573d6000803e3d6000fd5b505050506040513d604081101561071657600080fd5b810190808051906020019092919080519060200190929190505050915091508161ffff168461ffff161115610779576107728261ffff166107648661ffff168a6111ff90919063ffffffff16565b61128790919063ffffffff16565b96506107a9565b6107a68461ffff166107988461ffff168a6111ff90919063ffffffff16565b61128790919063ffffffff16565b96505b8061ffff168361ffff1611156107ed576107e68161ffff166107d88561ffff168a6111ff90919063ffffffff16565b61128790919063ffffffff16565b965061081d565b61081a8361ffff1661080c8361ffff168a6111ff90919063ffffffff16565b61128790919063ffffffff16565b96505b50505050505092915050565b6108316112d1565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146108f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fb09d6634c395c5e6666413bd69508bf97995a22f73c78c17466e7cd85d461a1a81604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b610a2a6112d1565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610aea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060816001805490508160ff1610610c34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061139a6025913960400191505060405180910390fd5b60026000610c4185610de2565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166317d7de7c6040518163ffffffff1660e01b815260040160006040518083038186803b158015610ce157600080fd5b505afa158015610cf5573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015610d1f57600080fd5b8101908080516040519392919084640100000000821115610d3f57600080fd5b83820191506020820185811115610d5557600080fd5b8251866001820283011164010000000082111715610d7257600080fd5b8083526020830192505050908051906020019080838360005b83811015610da6578082015181840152602081019050610d8b565b50505050905090810190601f168015610dd35780820380516001836020036101000a031916815260200191505b50604052505050915050919050565b6000816001805490508160ff1610610e45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061139a6025913960400191505060405180910390fd5b60018360ff1681548110610e5557fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b600080826001805490508160ff1610610eec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061139a6025913960400191505060405180910390fd5b60026000610ef986610de2565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663750a49376040518163ffffffff1660e01b8152600401604080518083038186803b158015610f9857600080fd5b505afa158015610fac573d6000803e3d6000fd5b505050506040513d6040811015610fc257600080fd5b8101908080519060200190929190805190602001909291905050509250925050915091565b6000600180549050905090565b610ffc6112d1565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146110bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611142576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806113bf6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008082840190508381101561127d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60006112c983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506112d9565b905092915050565b600033905090565b6000838311158290611386576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561134b578082015181840152602081019050611330565b50505050905090810190601f1680156113785780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838503905080915050939250505056fe506c616e65742077697468207468697320696e64657820646f65736e2774206578697374734f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a26469706673582212206be5a845cdad21ee157bf3efd862cd7d9b69d02c93d275ccfcbc1d918f17e57864736f6c634300060c0033";
