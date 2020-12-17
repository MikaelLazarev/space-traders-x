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

export interface Planet extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Planet;
  clone(): Planet;
  methods: {
    getName(): NonPayableTransactionObject<string>;

    getCoordinates(): NonPayableTransactionObject<{
      x: string;
      y: string;
      0: string;
      1: string;
    }>;

    getResourceLiquidity(resource: string): NonPayableTransactionObject<string>;

    swap(
      resource1: string,
      resource2: string,
      amount1out: number | string,
      amount2out: number | string
    ): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
