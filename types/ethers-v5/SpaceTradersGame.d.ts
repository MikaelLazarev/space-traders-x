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

interface SpaceTradersGameInterface extends ethers.utils.Interface {
  functions: {
    "isRegistered()": FunctionFragment;
    "move(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "startGame()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeShip()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isRegistered",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "move", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "startGame", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeShip",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "isRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startGame", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeShip",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class SpaceTradersGame extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SpaceTradersGameInterface;

  functions: {
    isRegistered(overrides?: CallOverrides): Promise<[boolean]>;

    "isRegistered()"(overrides?: CallOverrides): Promise<[boolean]>;

    move(
      dstPlanet: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "move(address)"(
      dstPlanet: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    startGame(overrides?: Overrides): Promise<ContractTransaction>;

    "startGame()"(overrides?: Overrides): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    upgradeShip(overrides?: Overrides): Promise<ContractTransaction>;

    "upgradeShip()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  isRegistered(overrides?: CallOverrides): Promise<boolean>;

  "isRegistered()"(overrides?: CallOverrides): Promise<boolean>;

  move(dstPlanet: string, overrides?: Overrides): Promise<ContractTransaction>;

  "move(address)"(
    dstPlanet: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  startGame(overrides?: Overrides): Promise<ContractTransaction>;

  "startGame()"(overrides?: Overrides): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  upgradeShip(overrides?: Overrides): Promise<ContractTransaction>;

  "upgradeShip()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    isRegistered(overrides?: CallOverrides): Promise<boolean>;

    "isRegistered()"(overrides?: CallOverrides): Promise<boolean>;

    move(dstPlanet: string, overrides?: CallOverrides): Promise<void>;

    "move(address)"(
      dstPlanet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    startGame(overrides?: CallOverrides): Promise<void>;

    "startGame()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeShip(overrides?: CallOverrides): Promise<void>;

    "upgradeShip()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    isRegistered(overrides?: CallOverrides): Promise<BigNumber>;

    "isRegistered()"(overrides?: CallOverrides): Promise<BigNumber>;

    move(dstPlanet: string, overrides?: Overrides): Promise<BigNumber>;

    "move(address)"(
      dstPlanet: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    startGame(overrides?: Overrides): Promise<BigNumber>;

    "startGame()"(overrides?: Overrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    upgradeShip(overrides?: Overrides): Promise<BigNumber>;

    "upgradeShip()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    isRegistered(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isRegistered()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    move(
      dstPlanet: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "move(address)"(
      dstPlanet: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    startGame(overrides?: Overrides): Promise<PopulatedTransaction>;

    "startGame()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    upgradeShip(overrides?: Overrides): Promise<PopulatedTransaction>;

    "upgradeShip()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
