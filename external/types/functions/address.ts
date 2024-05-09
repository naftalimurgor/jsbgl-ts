interface Buffer { }

interface DefArgsOptions {
  // Define the options for defArgs function
}

interface GetBufferOptions {
  // Define the options for getBuffer function
}

interface DoubleSha256Options {
  hex: boolean;
}

interface IntToBytesOptions {
  // Define the options for intToBytes function
}

interface DecodeBase58Options {
  hex: boolean;
}

interface PublicKeyOptions {
  // Define the options for public key
}

interface HashToAddressOptions {
  testnet?: boolean;
  scriptHash?: boolean;
  witnessVersion?: number | null;
}

interface AddressToHashOptions {
  hex?: boolean;
}

interface PublicKeyToAddressOptions {
  testnet?: boolean;
  p2sh_p2wpkh?: boolean;
  witnessVersion?: number | null;
}

interface AddressTypeOptions {
  num?: boolean;
}

interface AddressToScriptOptions {
  hex?: boolean;
}

interface IsAddressValidOptions {
  testnet?: boolean;
}

interface CryptoFunctions {
  hashToAddress(ha: string | Buffer, A?: HashToAddressOptions): string;
  addressToHash(a: string, A?: AddressToHashOptions): string | null;
  publicKeyToAddress(pubkey: string | Buffer, A?: PublicKeyToAddressOptions): string;
  addressType(a: string, A?: AddressTypeOptions): string;
  addressNetType(a: string): string | null;
  addressToScript(a: string, A?: AddressToScriptOptions): string;
  getWitnessVersion(address: string): number;
  isAddressValid(address: string, A?: IsAddressValidOptions): boolean;
}

declare const S: {
  Buffer: Buffer;
  defArgs(options: object, defaults: object): void;
  getBuffer(data: string | Buffer, options?: GetBufferOptions): Buffer;
  OPCODE: any; // Define the type for OPCODE
  TESTNET_ADDRESS_BYTE_PREFIX: string;
  MAINNET_ADDRESS_BYTE_PREFIX: string;
  TESTNET_SCRIPT_ADDRESS_BYTE_PREFIX: string;
  MAINNET_SCRIPT_ADDRESS_BYTE_PREFIX: string;
  TESTNET_SEGWIT_ADDRESS_BYTE_PREFIX: string;
  MAINNET_SEGWIT_ADDRESS_BYTE_PREFIX: string;
  encodeBase58(data: Buffer): string;
  doubleSha256(data: Buffer, options: DoubleSha256Options): Buffer;
  rebase_8_to_5(data: number[]): number[];
  intToBytes(num: number, size: number, endian: 'big' | 'little'): number[];
  bech32Polymod(data: number[]): number;
  rebase_5_to_32(data: number[], uppercase: boolean): string;
  decodeBase58(data: string, options: DecodeBase58Options): Buffer;
  hash160(data: Buffer): Buffer;
  ADDRESS_PREFIX_LIST: string[];
  BASE32CHARSET_UPCASE: string;
  BASE32CHARSET: string;
  bytesToString(bytes: Buffer): string;
};

declare function injectCryptoUtils(S: S): CryptoFunctions;

export default injectCryptoUtils;
