import { Buffer } from 'buffer';

interface BitcoinCoreCryptoModule {
  _malloc: (size: number) => number;
  _free: (ptr: number) => void;
  getValue: (ptr: number, type: 'i8' | 'i32') => number;
  HEAPU8: Uint8Array;
  _secp256k1_ec_pubkey_create: (context: any, publicKeyPointer: number, privateKeyPointer: number) => boolean;
  _secp256k1_ec_pubkey_serialize: (context: any, outputPointer: number, outputLengthPointer: number, publicKeyPointer: number, flag: number) => boolean;
  _secp256k1_ec_pubkey_parse: (context: any, publicKeyPointer: number, inputPointer: number, inputLength: number) => boolean;
  _secp256k1_ec_pubkey_tweak_add: (context: any, publicKeyPointer: number, tweakPointer: number) => boolean;
}

interface SModule {
  Buffer: typeof Buffer;
  defArgs: Function;
  isBuffer: (obj: any) => boolean;
  getBuffer: (data: any, encoding?: string) => Buffer;
  __bitcoin_core_crypto: BitcoinCoreCryptoModule;
  SECP256K1_EC_COMPRESSED: number;
  SECP256K1_EC_UNCOMPRESSED: number;
  TESTNET_PRIVATE_KEY_BYTE_PREFIX: Uint8Array;
  MAINNET_PRIVATE_KEY_BYTE_PREFIX: Uint8Array;
  PRIVATE_KEY_PREFIX_LIST: string[];
  MAINNET_PRIVATE_KEY_UNCOMPRESSED_PREFIX: string;
  TESTNET_PRIVATE_KEY_UNCOMPRESSED_PREFIX: string;
  generateEntropy: (args?: { hex: boolean }) => string | Buffer;
  encodeBase58: (m: string | Buffer, args?: { encoding?: string; checkSum?: boolean }) => string;
  decodeBase58: (m: string, args?: { hex?: boolean; checkSum?: boolean }) => string | Buffer;
  doubleSha256: (m: string | Buffer, args?: { encoding?: string; hex?: boolean }) => string | Buffer;
  wifToPrivateKey: (h: string, args?: { hex?: boolean }) => string | Buffer;
  isWifValid: (wif: string) => boolean;
  privateKeyToWif: (h: string | Buffer, args?: { compressed?: boolean; testnet?: boolean }) => string;
  privateToPublicKey: (privateKey: string | Buffer, args?: { compressed?: boolean; hex?: boolean }) => string | Buffer;
  isPublicKeyValid: (key: string | Buffer) => boolean;
  publicKeyAdd: (key: string | Buffer, tweak: string | Buffer, args?: { compressed?: boolean; hex?: boolean }) => string | Buffer;
}

export declare function moduleExports(S: SModule): void;
