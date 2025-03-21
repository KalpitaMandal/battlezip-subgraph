// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class BattleshipGame extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("startedBy", Value.fromBytes(Bytes.empty()));
    this.set("status", Value.fromString(""));
    this.set("totalShots", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BattleshipGame entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BattleshipGame must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BattleshipGame", id.toString(), this);
    }
  }

  static load(id: string): BattleshipGame | null {
    return changetype<BattleshipGame | null>(store.get("BattleshipGame", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get joinedBy(): Bytes | null {
    let value = this.get("joinedBy");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set joinedBy(value: Bytes | null) {
    if (!value) {
      this.unset("joinedBy");
    } else {
      this.set("joinedBy", Value.fromBytes(<Bytes>value));
    }
  }

  get shots(): Array<string> | null {
    let value = this.get("shots");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set shots(value: Array<string> | null) {
    if (!value) {
      this.unset("shots");
    } else {
      this.set("shots", Value.fromStringArray(<Array<string>>value));
    }
  }

  get startedBy(): Bytes {
    let value = this.get("startedBy");
    return value!.toBytes();
  }

  set startedBy(value: Bytes) {
    this.set("startedBy", Value.fromBytes(value));
  }

  get status(): string {
    let value = this.get("status");
    return value!.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get totalShots(): BigInt {
    let value = this.get("totalShots");
    return value!.toBigInt();
  }

  set totalShots(value: BigInt) {
    this.set("totalShots", Value.fromBigInt(value));
  }

  get winner(): Bytes | null {
    let value = this.get("winner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set winner(value: Bytes | null) {
    if (!value) {
      this.unset("winner");
    } else {
      this.set("winner", Value.fromBytes(<Bytes>value));
    }
  }
}

export class Shot extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("x", Value.fromBigInt(BigInt.zero()));
    this.set("y", Value.fromBigInt(BigInt.zero()));
    this.set("game", Value.fromString(""));
    this.set("turn", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Shot entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Shot must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Shot", id.toString(), this);
    }
  }

  static load(id: string): Shot | null {
    return changetype<Shot | null>(store.get("Shot", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get x(): BigInt {
    let value = this.get("x");
    return value!.toBigInt();
  }

  set x(value: BigInt) {
    this.set("x", Value.fromBigInt(value));
  }

  get y(): BigInt {
    let value = this.get("y");
    return value!.toBigInt();
  }

  set y(value: BigInt) {
    this.set("y", Value.fromBigInt(value));
  }

  get game(): string {
    let value = this.get("game");
    return value!.toString();
  }

  set game(value: string) {
    this.set("game", Value.fromString(value));
  }

  get hit(): boolean {
    let value = this.get("hit");
    return value!.toBoolean();
  }

  set hit(value: boolean) {
    this.set("hit", Value.fromBoolean(value));
  }

  get turn(): BigInt {
    let value = this.get("turn");
    return value!.toBigInt();
  }

  set turn(value: BigInt) {
    this.set("turn", Value.fromBigInt(value));
  }
}
