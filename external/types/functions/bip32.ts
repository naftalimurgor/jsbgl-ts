import { Buffer } from 'buffer';

interface BitcoinCoreCryptoModule {
  _malloc: Function;
  _free: Function;
  getValue: Function;
}

interface SModule {
  __bitcoin_core_crypto: {
    module: BitcoinCoreCryptoModule;
  };
  Buffer: typeof Buffer;
  BN: any; // Assuming BN is a custom BigNumber library
  defArgs: Function;
  getBuffer: Function;
  hmacSha512: Function;
  doubleSha256: Function;
  encodeBase58: Function;
  decodeBase58: Function;
  hash160: Function;
  privateKeyToPublicKey: Function;
  publicKeyAdd: Function;
  intToBytes: Function;
  HARDENED_KEY: number;
  MAINNET_XPRIVATE_KEY_PREFIX: Buffer;
  TESTNET_XPRIVATE_KEY_PREFIX: Buffer;
  MAINNET_XPUBLIC_KEY_PREFIX: Buffer;
  TESTNET_XPUBLIC_KEY_PREFIX: Buffer;
  MAINNET_M49_XPRIVATE_KEY_PREFIX: Buffer;
  TESTNET_M49_XPRIVATE_KEY_PREFIX: Buffer;
  MAINNET_M49_XPUBLIC_KEY_PREFIX: Buffer;
  TESTNET_M49_XPUBLIC_KEY_PREFIX: Buffer;
  MAINNET_M84_XPRIVATE_KEY_PREFIX: Buffer;
  TESTNET_M84_XPRIVATE_KEY_PREFIX: Buffer;
  MAINNET_M84_XPUBLIC_KEY_PREFIX: Buffer;
  TESTNET_M84_XPUBLIC_KEY_PREFIX: Buffer;
  privateKeyToWif: Function;
}

interface CreateMasterXPrivateKeyArgs {
  testnet?: boolean;
  base58?: boolean;
}

interface XPrivateToXPublicKeyArgs {
  base58?: boolean;
}

interface DeriveXKeyArgs {
  base58?: boolean;
  subPath?: boolean;
}

interface XKeyValidationArgs {
  checkSum?: boolean;
  hex?: boolean;
}

type PathType = "BIP44" | "BIP49" | "BIP84";

interface PathXKeyToBIP32XKeyArgs {
  base58?: boolean;
}

interface BIP32XKeyToPathXKeyArgs {
  base58?: boolean;
}

export declare function createMasterXPrivateKey(seed: string, args?: CreateMasterXPrivateKeyArgs): string | null;

export declare function xPrivateToXPublicKey(xKey: string, args?: XPrivateToXPublicKeyArgs): string;

export declare function deriveXKey(xKey: string, path: string, args?: DeriveXKeyArgs): string;

export declare function publicFromXPublicKey(xPub: string, args?: XKeyValidationArgs): string;

export declare function privateFromXPrivateKey(xPriv: string, args?: XKeyValidationArgs): string;

export declare function isXPrivateKeyValid(xPriv: string): boolean;

export declare function isXPublicKeyValid(xPub: string): boolean;

export declare function xKeyNetworkType(xKey: string, args?: XKeyValidationArgs): "mainnet" | "testnet";

export declare function xKeyType(xKey: string, args?: XKeyValidationArgs): "private" | "public";

export declare function xKeyDerivationType(xKey: string, args?: XKeyValidationArgs): "BIP44" | "BIP49" | "BIP84" | "custom";

export declare function pathXKeyToBIP32XKey(xKey: string, args?: PathXKeyToBIP32XKeyArgs): string;

export declare function BIP32XKeyToPathXKey(xKey: string, pathType: PathType, args?: BIP32XKeyToPathXKeyArgs): string;
