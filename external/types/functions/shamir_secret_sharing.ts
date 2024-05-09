import { Buffer } from 'buffer';

interface ShamirShares {
  [index: number]: Buffer;
}

interface ShamirOptions {
  threshold: number;
  total: number;
  secret: Buffer;
  indexBits?: number;
}

interface ShamirSecretShares {
  [index: number]: Buffer;
}

interface ShamirInterpolationPoint {
  x: number;
  y: Buffer;
}

interface ShamirSecret {
  shares: ShamirSecretShares;
  restoreSecret(): Buffer;
}

interface ScriptFunctions {
  generateEntropy(options: { hex: boolean }): Buffer;
  __precompute_GF256_expLog(S: any): void;
  __GF256_mul(a: number, b: number): number;
  __GF256_pow(a: number, b: number): number;
  __mod(a: number, b: number): number;
  __GF256_add(a: number, b: number): number;
  __GF256_sub(a: number, b: number): number;
  __GF256_inverse(a: number): number;
  __GF256_div(a: number, b: number): number;
  __shamirFn(x: number, q: number[]): number;
  __shamirInterpolation(points: ShamirInterpolationPoint[]): number;
  __split_secret(options: ShamirOptions): ShamirShares;
  __restore_secret(shares: ShamirShares): ShamirSecret;
}

type shamirScript = (S: ScriptFunctions) => void;

export default shamirScript;
