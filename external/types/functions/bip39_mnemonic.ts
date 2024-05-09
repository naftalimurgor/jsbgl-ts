import { Buffer } from 'buffer';

interface BitcoinCoreCryptoModule {
  randomBytes: (size: number) => Uint8Array;
}

interface SModule {
  BN: any; // Assuming BN is a custom BigNumber library
  __nodeCrypto: BitcoinCoreCryptoModule;
  getWindow: () => Window;
  defArgs: Function;
  getRandomValues: (buf: Uint8Array) => Uint8Array;
  lngamma: (z: number) => number | null;
  igam: (a: number, x: number) => number;
  igamc: (a: number, x: number) => number;
  erfc: (x: number) => number;
  randomnessTest: (b: Uint8Array) => void;
  generateEntropy: (args?: { strength?: number; hex?: boolean; sec256k1Order?: boolean }) => string;
  entropyToMnemonic: (e: string, args?: { wordList?: string[]; data?: boolean }) => string;
  mnemonicToEntropy: (m: string, args?: { wordList?: string[]; checkSum?: boolean; hex?: boolean }) => string;
  mnemonicToSeed: (m: string, args?: { passphrase?: string; checkSum?: boolean; hex?: boolean }) => string;
  isMnemonicValid: (m: string[], args?: { wordList?: string[] }) => boolean;
  isMnemonicCheckSumValid: (m: string[], args?: { wordList?: string[] }) => boolean;
  getMnemonicCheckSumData: (m: string, args?: { wordList?: string[] }) => number;
  __combinations: (a: any[], n: number) => any[];
  splitMnemonic: (
    threshold: number,
    total: number,
    m: string,
    args?: {
      wordList?: string[];
      checkSumVerify?: boolean;
      sharesVerify?: boolean;
      embeddedIndex?: boolean;
      hex?: boolean;
    }
  ) => string[] | { [key: string]: string };
  combineMnemonic: (
    shares: string[] | { [key: string]: string },
    args?: { wordList?: string[]; checkSum?: boolean; hex?: boolean }
  ) => string;
}

export declare function moduleExports(S: SModule): void;
