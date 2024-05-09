# jsbgl-ts

The `jsbgl` library provides a set of functions and constants for working with Bitcoin and blockchain-related operations in JavaScript. While the library itself doesn't include TypeScript types out of the box, it can be augmented with TypeScript types to enhance development experience and ensure type safety.

This guide explains how to augment the `jsbgl` library with TypeScript types, allowing you to leverage TypeScript's static type checking and editor support.

# Adding Types to jsbgl Library through Augmentation

## Prerequisites

Before proceeding, make sure you have the following installed:

- Node.js
- TypeScript

## Augmenting Types

To augment the `jsbgl` library with TypeScript types, follow these steps:

1. **Create a TypeScript Declaration File**: Start by creating a TypeScript declaration file (`.d.ts`) where you'll define the types to augment the `jsbgl` library. You can name this file anything you want, such as `jsbgl.d.ts`.

2. **Define Augmented Types**: In the declaration file, define the types you want to add to the `jsbgl` library. You can declare interfaces, type aliases, enums, and any other TypeScript type constructs.

3. **Augment the Library**: Once you've defined the types, augment the `jsbgl` library by merging your types with the existing types using TypeScript declaration merging.

4. **Export Types**: Export your types from the declaration file so they can be used by consumers of the `jsbgl` library.

## Example

Here's an example of how you can augment the `jsbgl` library with TypeScript types:

```typescript
// jsbgl.d.ts

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

// Export types
export { };
```

## Usage

After defining and exporting the augmented types, you can use them in your TypeScript projects like so:

```typescript
import { Wallet, Address } from 'jsbgl';

// Access augmented types
const wallet: Wallet = new Wallet(args);


// Now you have type safety and editor support for jsbgl library
```

## Conclusion

By augmenting the `jsbgl` library with TypeScript types, you can take advantage of TypeScript's features such as type checking, auto-completion, and documentation hints, improving the development experience when working with blockchain-related operations.
