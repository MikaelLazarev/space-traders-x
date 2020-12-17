/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ResourcePairInterface extends ethers.utils.Interface {
  functions: {
    "getLiquidity()": FunctionFragment;
    "getResourcePrice1()": FunctionFragment;
    "getResourcePrice2()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "swap(address,uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getResourcePrice1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getResourcePrice2",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getResourcePrice1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getResourcePrice2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class ResourcePair extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ResourcePairInterface;

  functions: {
    getLiquidity(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        r1Liquidity: BigNumber;
        r2Liquidity: BigNumber;
      }
    >;

    "getLiquidity()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        r1Liquidity: BigNumber;
        r2Liquidity: BigNumber;
      }
    >;

    getResourcePrice1(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getResourcePrice1()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getResourcePrice2(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getResourcePrice2()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    swap(
      account: string,
      amount1out: BigNumberish,
      amount2out: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "swap(address,uint256,uint256)"(
      account: string,
      amount1out: BigNumberish,
      amount2out: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getLiquidity(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { r1Liquidity: BigNumber; r2Liquidity: BigNumber }
  >;

  "getLiquidity()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { r1Liquidity: BigNumber; r2Liquidity: BigNumber }
  >;

  getResourcePrice1(overrides?: CallOverrides): Promise<BigNumber>;

  "getResourcePrice1()"(overrides?: CallOverrides): Promise<BigNumber>;

  getResourcePrice2(overrides?: CallOverrides): Promise<BigNumber>;

  "getResourcePrice2()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  swap(
    account: string,
    amount1out: BigNumberish,
    amount2out: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "swap(address,uint256,uint256)"(
    account: string,
    amount1out: BigNumberish,
    amount2out: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getLiquidity(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        r1Liquidity: BigNumber;
        r2Liquidity: BigNumber;
      }
    >;

    "getLiquidity()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        r1Liquidity: BigNumber;
        r2Liquidity: BigNumber;
      }
    >;

    getResourcePrice1(overrides?: CallOverrides): Promise<BigNumber>;

    "getResourcePrice1()"(overrides?: CallOverrides): Promise<BigNumber>;

    getResourcePrice2(overrides?: CallOverrides): Promise<BigNumber>;

    "getResourcePrice2()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    swap(
      account: string,
      amount1out: BigNumberish,
      amount2out: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount1in: BigNumber; amount2in: BigNumber }
    >;

    "swap(address,uint256,uint256)"(
      account: string,
      amount1out: BigNumberish,
      amount2out: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount1in: BigNumber; amount2in: BigNumber }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    getLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "getLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    getResourcePrice1(overrides?: CallOverrides): Promise<BigNumber>;

    "getResourcePrice1()"(overrides?: CallOverrides): Promise<BigNumber>;

    getResourcePrice2(overrides?: CallOverrides): Promise<BigNumber>;

    "getResourcePrice2()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    swap(
      account: string,
      amount1out: BigNumberish,
      amount2out: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "swap(address,uint256,uint256)"(
      account: string,
      amount1out: BigNumberish,
      amount2out: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getLiquidity()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getResourcePrice1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getResourcePrice1()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getResourcePrice2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getResourcePrice2()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    swap(
      account: string,
      amount1out: BigNumberish,
      amount2out: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "swap(address,uint256,uint256)"(
      account: string,
      amount1out: BigNumberish,
      amount2out: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}