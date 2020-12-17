/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Move = ContractEventLog<{
  account: string;
  from: string;
  to: string;
  0: string;
  1: string;
  2: string;
}>;
export type NewStarShip = ContractEventLog<{
  account: string;
  0: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type Upgrade = ContractEventLog<{
  account: string;
  newLevel: string;
  0: string;
  1: string;
}>;

export interface StarshipRepository extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): StarshipRepository;
  clone(): StarshipRepository;
  methods: {
    /**
     * Returns the address of the current owner.
     */
    owner(): NonPayableTransactionObject<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(): NonPayableTransactionObject<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    addStarshipLevel(
      velocity: number | string,
      fuelPerParsec: number | string,
      gold: number | string,
      iron: number | string,
      oil: number | string
    ): NonPayableTransactionObject<void>;

    getLevelsLength(): NonPayableTransactionObject<string>;

    registerAccount(account: string): NonPayableTransactionObject<void>;

    isAccountExists(account: string): NonPayableTransactionObject<boolean>;

    getAccountPlanet(account: string): NonPayableTransactionObject<string>;

    timeToArrive(account: string): NonPayableTransactionObject<string>;

    calculateFuelConsumption(
      account: string,
      distance: number | string
    ): NonPayableTransactionObject<string>;

    calculateTimeToArrive(
      account: string,
      distance: number | string
    ): NonPayableTransactionObject<string>;

    moveToPlanet(
      account: string,
      dstPlanet: string
    ): NonPayableTransactionObject<string>;

    upgradeStarShip(
      account: string
    ): NonPayableTransactionObject<{
      gold: string;
      iron: string;
      oil: string;
      0: string;
      1: string;
      2: string;
    }>;
  };
  events: {
    Move(cb?: Callback<Move>): EventEmitter;
    Move(options?: EventOptions, cb?: Callback<Move>): EventEmitter;

    NewStarShip(cb?: Callback<NewStarShip>): EventEmitter;
    NewStarShip(
      options?: EventOptions,
      cb?: Callback<NewStarShip>
    ): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    Upgrade(cb?: Callback<Upgrade>): EventEmitter;
    Upgrade(options?: EventOptions, cb?: Callback<Upgrade>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Move", cb: Callback<Move>): void;
  once(event: "Move", options: EventOptions, cb: Callback<Move>): void;

  once(event: "NewStarShip", cb: Callback<NewStarShip>): void;
  once(
    event: "NewStarShip",
    options: EventOptions,
    cb: Callback<NewStarShip>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "Upgrade", cb: Callback<Upgrade>): void;
  once(event: "Upgrade", options: EventOptions, cb: Callback<Upgrade>): void;
}
