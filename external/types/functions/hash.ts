import { Buffer } from 'buffer';
import { BN } from 'bn.js';

interface BitcoinCoreCryptoModule {
  _malloc: (size: number) => number;
  _free: (ptr: number) => void;
  getValue: (ptr: number, type: 'i8' | 'i32') => number;
  HEAPU8: Uint8Array;
  _single_sha256: (inputPtr: number, inputLength: number, outputPtr: number) => void;
  _double_sha256: (inputPtr: number, inputLength: number, outputPtr: number) => void;
  _siphash: (v0Ptr: number, v1Ptr: number, inputPtr: number, inputLength: number, outputPtr: number) => void;
  __ripemd160: (inputPtr: number, inputLength: number, outputPtr: number) => void;
  _md5sum: (inputPtr: number, inputLength: number, outputPtr: number) => void;
  _sha3: (inputPtr: number, inputLength: number, outputPtr: number) => void;
  _hmac_sha512_oneline: (keyPtr: number, keyLength: number, dataPtr: number, dataLength: number, outputPtr: number) => void;
  _pbkdf2_hmac_sha512: (passwordPtr: number, passwordLength: number, saltPtr: number, saltLength: number, iterations: number, outputPtr: number, outputLength: number) => void;
  CSHA256: { new(): { Write(ptr: number, length: number): void; Finalize(ptr: number): void } };
}

interface SModule {
  __bitcoin_core_crypto: BitcoinCoreCryptoModule;
  defArgs: Function;
  getBuffer: (data: any, encoding?: string) => Buffer;
  BN: typeof BN;
  Buffer: typeof Buffer;
  sha256: (m: string, args?: { encoding?: string; hex?: boolean }) => string | Buffer;
  SHA256: {
    new(): {
      update(m: string, args?: { encoding?: string }): void;
      digest(): Buffer;
      hexdigest(): string;
    };
  };
  doubleSha256: (m: string, args?: { encoding?: string; hex?: boolean }) => string | Buffer;
  siphash: (m: string, args?: { encoding?: string; v0: BN; v1: BN }) => BN;
  ripemd160: (m: string, args?: { encoding?: string; hex?: boolean }) => string | Buffer;
  md5: (m: string, args?: { encoding?: string; hex?: boolean }) => string | Buffer;
  sha3: (m: string, args?: { encoding?: string; hex?: boolean }) => string | Buffer;
  hash160: (m: string, args?: { encoding?: string; hex?: boolean }) => string | Buffer;
  hmacSha512: (k: string, d: string, args?: { encoding?: string; hex?: boolean }) => string | Buffer;
  pbdkdf2HmacSha512: (password: string, salt: string, iterations: number, args?: { encoding?: string; hex?: boolean }) => string | Buffer;
}

export declare function moduleExports(S: SModule): void;
