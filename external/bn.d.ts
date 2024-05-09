declare module "bn.js" {
  class BN {
    constructor(number: number | string | number[], base?: number | 'hex', endian?: 'le' | 'be', strict?: boolean);
    toArrayLike(T: any, endian: 'le' | 'be', length?: number): any;
    lt(num: BN): boolean;
  }
}
