// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class BattleshipGame extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BattleshipGame entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BattleshipGame entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BattleshipGame", id.toString(), this);
  }

  static load(id: string): BattleshipGame | null {
    return store.get("BattleshipGame", id) as BattleshipGame | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get shots(): Array<string | null> {
    let value = this.get("shots");
    return value.toStringArray();
  }

  set shots(value: Array<string | null>) {
    this.set("shots", Value.fromStringArray(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get totalShots(): BigInt {
    let value = this.get("totalShots");
    return value.toBigInt();
  }

  set totalShots(value: BigInt) {
    this.set("totalShots", Value.fromBigInt(value));
  }

  get winner(): Bytes | null {
    let value = this.get("winner");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set winner(value: Bytes | null) {
    if (value === null) {
      this.unset("winner");
    } else {
      this.set("winner", Value.fromBytes(value as Bytes));
    }
  }
}

export class Shot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Shot entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Shot entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Shot", id.toString(), this);
  }

  static load(id: string): Shot | null {
    return store.get("Shot", id) as Shot | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get game(): string {
    let value = this.get("game");
    return value.toString();
  }

  set game(value: string) {
    this.set("game", Value.fromString(value));
  }

  get hit(): boolean {
    let value = this.get("hit");
    return value.toBoolean();
  }

  set hit(value: boolean) {
    this.set("hit", Value.fromBoolean(value));
  }

  get turn(): BigInt {
    let value = this.get("turn");
    return value.toBigInt();
  }

  set turn(value: BigInt) {
    this.set("turn", Value.fromBigInt(value));
  }
}
