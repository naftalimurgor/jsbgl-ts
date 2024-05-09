declare module "buffer/" {
  interface Buffer {
    seek(n: number): void;
    tell(): number | undefined;
    read(n: number): Buffer;
    readVarInt(): Buffer;
    readInt(n: number, byte_order?: 'little' | 'big'): number;
    hex(): string;
  }
}
