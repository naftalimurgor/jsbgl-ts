declare global {
  interface ScriptFunctions {
    hashToScript(h: Buffer, scriptType: number | string, A?: { hex?: boolean }): Buffer | string;
    publicKeyTo_P2SH_P2WPKH_Script(h: Buffer, A?: { hex?: boolean }): Buffer | string;
    publicKeyTo_PUBKEY_Script(k: Buffer, A?: { hex?: boolean }): Buffer | string;
    parseScript(s: Buffer, A?: { segwit?: boolean }): {
      nType: number;
      type: string;
      addressHash?: Buffer;
      reqSigs: number | null;
      data?: Buffer;
      script: Buffer;
    };
    scriptToAddress(s: Buffer, A?: { testnet?: boolean }): string | null;
    decodeScript(s: Buffer, A?: { asm?: boolean }): string;
    deleteFromScript(script: Buffer, subScript: Buffer | undefined, A?: { hex?: boolean }): Buffer | string;
    scriptToHash(s: Buffer, A?: { witness?: boolean; hex?: boolean }): Buffer | string;
    opPushData(s: Buffer): Buffer;
    readOpCode(s: Buffer): [Buffer | null, Buffer | null];
    getMultiSigPublicKeys(s: Buffer): Buffer[];
    signMessage(m: Buffer, privateKey: Buffer | string, A?: { encoding?: 'hex' | 'utf8'; hex?: boolean }): { signature: Buffer | string; recId: number } | null;
    verifySignature(s: Buffer, p: Buffer, m: Buffer): boolean;
    publicKeyRecovery(s: Buffer, m: Buffer, recId: number, A?: { compressed?: boolean; hex?: boolean; der?: boolean }): Buffer | string | null;
    isValidSignatureEncoding(s: Buffer): boolean;
    parseSignature(s: Buffer, A?: { hex?: boolean }): [Buffer, Buffer];
    bitcoinMessage(msg: Buffer | string): Buffer;
    signBitcoinMessage(m: Buffer, privateKey: Buffer | string, A?: { base64?: boolean }): string | Buffer | null;
    bitcoinSignedMessageAddresses(m: Buffer, s: Buffer | string, A?: { testnet?: boolean }): string[];
    verifyBitcoinMessage(m: Buffer, s: Buffer | string, a: string, A?: { testnet?: boolean }): boolean;
  }
}

export { };
