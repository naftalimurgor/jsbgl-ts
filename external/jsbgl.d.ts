import * as constants from './types/constants';
import * as tools from './types/functions/tools';
import * as opcodes from './types/opcodes';
import * as hash from './types/functions/hash';
import * as encoders from './types/functions/encoders';
import * as shamirSecret from './types/functions/shamir_secret_sharing';
import mnemonicWordlist from './types/bip39_wordlist';
import * as mnemonic from './types/functions/bip39_mnemonic';
import * as key from './types/functions/key';
import * as address from './types/functions/address';
import * as bip32 from './types/functions/bip32';
import * as script from './types/functions/script';
import Address from './types/classes/Address';
// import Transation from './types/classes/Transaction';
import * as Wallet from './types/classes/Wallet';

declare module 'jsbgl' {
  type CryptoModule = {
    module: any; // Replace 'any' with the actual type of the crypto module
  };

  type BitcoinCoreCrypto = {
    __initCryptoModule: () => Promise<CryptoModule>;
  };

  type InitTaskStatus = "completed" | null | Promise<void>;

  type Scope = Window | typeof globalThis

  interface Library {
    __initTask: InitTaskStatus;
    asyncInit: (scope: Scope) => Promise<void>;
    __asyncInit: (scope: Scope) => Promise<void>;
    secp256k1PrecompContextSign: any; // Replace 'any' with the actual type if available
    secp256k1PrecompContextVerify: any; // Replace 'any' with the actual type if available
    generateEntropy: (options: { hex: boolean }) => any; // Replace 'any' with the actual return type if available
  }

  interface LibraryModule {
    __initCryptoModule: () => Promise<CryptoModule>;
  }

  export {
    CryptoModule,
    BitcoinCoreCrypto,
    InitTaskStatus,
    Scope,
    Library,
    LibraryModule
  };

  export * as constants from './types/constants';
  export * as tools from './types/functions/tools';
  export * as opcodes from './types/opcodes';
  export * as hash from './types/functions/hash';
  export * as encoders from './types/functions/encoders';
  export * as shamirSecret from './types/functions/shamir_secret_sharing';
  export { default as mnemonicWordlist } from './types/bip39_wordlist';
  export * as mnemonic from './types/functions/bip39_mnemonic';
  export * as key from './types/functions/key';
  export * as address from './types/functions/address';
  export * as bip32 from './types/functions/bip32';
  export * as script from './types/functions/script';
  export { default as Address } from './types/classes/Address';
  // export { default as Transation } from './types/classes/Transaction';
  export * as Wallet from './types/classes/Wallet';

}