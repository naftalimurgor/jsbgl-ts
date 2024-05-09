import { Buffer } from 'buffer';

interface BitcoinCoreCryptoModule {
  _malloc: (size: number) => number;
  _free: (ptr: number) => void;
  getValue: (ptr: number, type: 'i8' | 'i32') => number;
  HEAPU8: Uint8Array;
  _EncodeBase58: (inputPtr: number, inputEndPtr: number, outputPtr: number) => void;
  _DecodeBase58: (inputPtr: number, outputPtr: number, outputLengthPtr: number) => boolean;
}

interface SModule {
  __bitcoin_core_crypto: BitcoinCoreCryptoModule;
  defArgs: Function;
  getBuffer: (data: any, encoding?: string) => Buffer;
  encodeBase58: (m: string, args?: { encoding?: string; checkSum?: boolean }) => string;
  decodeBase58: (m: string, args?: { hex?: boolean; checkSum?: boolean }) => string;
  rebaseBits: (data: number[], fromBits: number, toBits: number, pad?: boolean) => number[];
  rebase_5_to_8: (data: number[], pad?: boolean) => number[];
  rebase_8_to_5: (data: number[], pad?: boolean) => number[];
  rebase_32_to_5: (data: string) => number[];
  rebase_5_to_32: (data: number[], bytes?: boolean) => string[];
  bech32Polymod: (values: number[]) => number;
}

export declare function moduleExports(S: SModule): void;
