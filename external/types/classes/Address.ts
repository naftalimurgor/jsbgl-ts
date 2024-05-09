
interface Options {
  compressed?: boolean | null;
  testnet?: boolean;
  addressType?: "P2PKH" | "PUBKEY" | "P2WPKH" | "P2SH_P2WPKH" | null;
  witnessVersion?: number;
}

interface KeyOptions extends Options {
  compressed?: boolean | null;
  testnet?: boolean;
}

interface PublicKeyOptions extends KeyOptions {
  compressed?: boolean | null;
  testnet?: boolean;
}

interface PrivateKeyOptions extends KeyOptions {
  compressed?: boolean | null;
  testnet?: boolean;
}

interface PrivateKeyConstructor {
  new(): PrivateKey
}
class PrivateKey {
  readonly compressed: boolean;
  readonly testnet: boolean;
  readonly hex: string;
  readonly wif: string;

  constructor(k?: string | Buffer, A?: PrivateKeyOptions);
  toString(): string;
}

class PublicKey {
  readonly compressed: boolean;
  readonly testnet: boolean;
  readonly hex: string;

  constructor(k: string | Buffer | PrivateKey, A?: PublicKeyOptions);
  toString(): string;
}

class Address {
  readonly privateKey: PrivateKey;
  readonly publicKey: PublicKey;
  readonly testnet: boolean;
  readonly type: "P2PKH" | "PUBKEY" | "P2WPKH" | "P2SH_P2WPKH";
  readonly scriptHash: boolean;
  readonly redeemScript?: Buffer;
  readonly redeemScriptHex?: string;
  readonly hash: Buffer;
  readonly hashHex: string;
  readonly address: string;

  constructor(k?: string | Buffer | PrivateKey | PublicKey, A?: Options): void
  toString(): string;
}

class ScriptAddress {
  readonly witnessVersion: number;
  readonly testnet: boolean;
  readonly script: Buffer;
  readonly scriptHex: string;
  readonly hash: Buffer;
  readonly scriptOpcodes: number[];
  readonly scriptOpcodesAsm: string[];
  readonly address: string;

  constructor(s: string | Buffer, A?: Options);
  static multisig(n: number, m: number, keyList: (string | Buffer | Address | PrivateKey | PublicKey)[], A?: Options): ScriptAddress;
  toString(): string;
}

type S = {
  Buffer: any;
  defArgs: (A: any, defaults: any) => void;
  getBuffer: (obj: any) => Buffer;
  OPCODE: any;
  createPrivateKey: (options: any) => PrivateKey;
  privateKeyToWif: (privateKey: PrivateKey, options?: KeyOptions) => string;
  isString: (str: any) => boolean;
  isHex: (str: any) => boolean;
  isWifValid: (str: any) => boolean;
  wifToPrivateKey: (wif: string, options?: KeyOptions) => PrivateKey;
  privateToPublicKey: (privateKey: string | Buffer | PrivateKey, options?: PublicKeyOptions) => PublicKey;
  isPublicKeyValid: (key: Buffer) => boolean;
  opPushData: (data: any) => Buffer;
  decodeScript: (script: Buffer, options?: { asm?: boolean }) => number[];
  hash160: (data: Buffer) => Buffer;
  sha256: (data: Buffer) => Buffer;
  hashToAddress: (hash: Buffer, options?: { scriptHash?: boolean; witnessVersion?: number; testnet?: boolean }) => string;
  publicKeyTo_P2SH_P2WPKH_Script: (publicKey: Buffer) => Buffer;
  intToVarInt: (n: number) => Buffer;
  MAINNET_PRIVATE_KEY_UNCOMPRESSED_PREFIX: string;
  TESTNET_PRIVATE_KEY_UNCOMPRESSED_PREFIX: string;
  TESTNET_PRIVATE_KEY_COMPRESSED_PREFIX: string;
};

export default S;
