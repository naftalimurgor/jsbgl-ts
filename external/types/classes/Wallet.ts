// types.ts

type Buffer = any;
type OPCODE = any;

type Options = {
  hex: boolean;
};

type WordList = string[];

type WalletConstructorArgs = {
  from?: string | null;
  passphrase?: string;
  path?: string | null;
  testnet?: boolean;
  strength?: number;
  threshold?: number;
  shares?: number;
  wordList?: WordList;
  addressType?: string | null;
  hardenedAddresses?: boolean;
  account?: number;
  chain?: number;
};

type WalletAddress = {
  address: string;
  publicKey: string;
  privateKey?: string;
};

declare class Wallet {
  constructor(args?: WalletConstructorArgs);
  account: number;
  chain: number;
  hardenedAddresses: boolean;
  pathType: string | null;
  path: string | null;
  __account_path: string | null;
  from: string | null;
  mnemonic: string | null;
  seed: string | null;
  passphrase: string | null;
  testnet: boolean;
  version: string;
  depth: number;
  fingerprint: string;
  child: number;
  chainCode: string;
  masterXPrivateKey: string | undefined;
  accountXPrivateKey: string | undefined;
  accountXPublicKey: string | undefined;
  externalChainXPrivateKey: string | undefined;
  externalChainXPublicKey: string | undefined;
  internalChainXPrivateKey: string | undefined;
  internalChainXPublicKey: string | undefined;
  chainXPrivateKey: string | undefined;
  chainXPublicKey: string | undefined;
  sharesThreshold: number | undefined;
  sharesTotal: number | undefined;
  mnemonicShares: string[] | undefined;
  addressType: string;
  setChain(i: number): void;
  getAddress(i: number, external?: boolean): WalletAddress;
}

type LibraryFunction = (S: {
  Buffer: Buffer;
  defArgs: (args: any, defaults: any) => void;
  getBuffer: (value: any) => Buffer;
  OP_CODE: OPCODE;
  BIP39_WORDLIST: WordList;
  generateEntropy: (options: Options) => any;
  entropyToMnemonic: (entropy: any, options: Options) => string;
  mnemonicToSeed: (mnemonic: string, options: Options & { passphrase?: string }) => string;
  createMasterXPrivateKey: (seed: string, options: { testnet?: boolean }) => string;
  BIP32_XKeyToPathXKey: (xkey: string, pathType: string) => string;
  isString: (value: any) => boolean;
  isXPrivateKeyValid: (xpriv: string) => boolean;
  isXPublicKeyValid: (xpub: string) => boolean;
  xKeyDerivationType: (xkey: string) => string;
  xPrivateToXPublicKey: (xpriv: string) => string;
  xKeyNetworkType: (xkey: string) => string;
  decodeBase58: (base58: string, options?: { checkSum?: boolean; hex?: boolean }) => Buffer;
  privateFromXPrivateKey: (xpriv: string) => string;
  privateToPublicKey: (priv: string) => string;
  publicFromXPublicKey: (xpub: string) => string;
  publicKeyToAddress: (pubKey: string, options?: { p2sh_p2wpkh?: boolean; witnessVersion?: null | number; testnet?: boolean }) => string;
  deriveXKey: (xkey: string, path: string, options?: { subPath?: boolean }) => string;
  splitMnemonic: (threshold: number, shares: number, mnemonic: string, options: { wordList: WordList; embeddedIndex?: boolean }) => string[];
}) => void;

export {
  Buffer,
  OPCODE,
  WordList,
  Options,
  WalletConstructorArgs,
  WalletAddress,
  Wallet,
  LibraryFunction
};
