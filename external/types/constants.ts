// https://github.com/BitgesellOfficial/jsbgl/blob/beta/src/constants.js

interface Secp256k1Constants {
  readonly BASE32CHARSET: string;
  readonly BASE32CHARSET_UPCASE: string;
  readonly INT_BASE32_MAP: { [key: string]: number };
  readonly BASE32_INT_MAP: { [key: number]: number };
  readonly MAINNET_ADDRESS_PREFIX: string;
  readonly TESTNET_ADDRESS_PREFIX: string;
  readonly TESTNET_ADDRESS_PREFIX_2: string;
  readonly MAINNET_SCRIPT_ADDRESS_PREFIX: string;
  readonly TESTNET_SCRIPT_ADDRESS_PREFIX: string;
  readonly MAINNET_SEGWIT_ADDRESS_PREFIX: string;
  readonly TESTNET_SEGWIT_ADDRESS_PREFIX: string;
  readonly MAINNET_ADDRESS_BYTE_PREFIX: number[];
  readonly TESTNET_ADDRESS_BYTE_PREFIX: number[];
  readonly MAINNET_SCRIPT_ADDRESS_BYTE_PREFIX: number[];
  readonly TESTNET_SCRIPT_ADDRESS_BYTE_PREFIX: number[];
  readonly MAINNET_SEGWIT_ADDRESS_BYTE_PREFIX: number[];
  readonly TESTNET_SEGWIT_ADDRESS_BYTE_PREFIX: number[];
  readonly TESTNET_PRIVATE_KEY_BYTE_PREFIX: number[];
  readonly MAINNET_PRIVATE_KEY_BYTE_PREFIX: number[];
  readonly MAINNET_PRIVATE_KEY_UNCOMPRESSED_PREFIX: string;
  readonly MAINNET_PRIVATE_KEY_COMPRESSED_PREFIX: string;
  readonly MAINNET_PRIVATE_KEY_COMPRESSED_PREFIX_2: string;
  readonly TESTNET_PRIVATE_KEY_UNCOMPRESSED_PREFIX: string;
  readonly TESTNET_PRIVATE_KEY_COMPRESSED_PREFIX: string;
  readonly ADDRESS_PREFIX_LIST: string[];
  readonly PRIVATE_KEY_PREFIX_LIST: string[];
  readonly SCRIPT_TYPES: { [key: string]: number };
  readonly SCRIPT_N_TYPES: { [key: number]: string };
  readonly GAMMA_NUM_LN: number;
  readonly GAMMA_TABLE_LN: number[];
  readonly MACHEP: number;
  readonly MAXLOG: number;
  readonly ECDSA_SEC256K1_ORDER: any; // BN type
  readonly SECP256K1_CONTEXT_VERIFY: number;
  readonly SECP256K1_CONTEXT_SIGN: number;
  readonly SECP256K1_CONTEXT_NONE: number;
  readonly SECP256K1_EC_COMPRESSED: number;
  readonly SECP256K1_EC_UNCOMPRESSED: number;
  readonly MAX_AMOUNT: number;
  readonly SIGHASH_ALL: number;
  readonly SIGHASH_NONE: number;
  readonly SIGHASH_SINGLE: number;
  readonly SIGHASH_ANYONECANPAY: number;
  readonly HARDENED_KEY: number;
  readonly FIRST_HARDENED_CHILD: number;
  readonly PATH_LEVEL_BIP0044: number[];
  readonly TESTNET_PATH_LEVEL_BIP0044: number[];
  readonly MAINNET_XPRIVATE_KEY_PREFIX: any; // Buffer type
  readonly MAINNET_XPUBLIC_KEY_PREFIX: any; // Buffer type
  readonly TESTNET_XPRIVATE_KEY_PREFIX: any; // Buffer type
  readonly TESTNET_XPUBLIC_KEY_PREFIX: any; // Buffer type
  readonly MAINNET_M44_XPRIVATE_KEY_PREFIX: any; // Buffer type
  readonly MAINNET_M44_XPUBLIC_KEY_PREFIX: any; // Buffer type
  readonly TESTNET_M44_XPRIVATE_KEY_PREFIX: any; // Buffer type
  readonly TESTNET_M44_XPUBLIC_KEY_PREFIX: any; // Buffer type
  readonly MAINNET_M49_XPRIVATE_KEY_PREFIX: any; // Buffer type
  readonly MAINNET_M49_XPUBLIC_KEY_PREFIX: any; // Buffer type
  readonly TESTNET_M49_XPRIVATE_KEY_PREFIX: any; // Buffer type
  readonly TESTNET_M49_XPUBLIC_KEY_PREFIX: any; // Buffer type
  readonly MAINNET_M84_XPRIVATE_KEY_PREFIX: any; // Buffer type
  readonly MAINNET_M84_XPUBLIC_KEY_PREFIX: any; // Buffer type
  readonly TESTNET_M84_XPRIVATE_KEY_PREFIX: any; // Buffer type
  readonly TESTNET_M84_XPUBLIC_KEY_PREFIX: any; // Buffer type
}

type secp256k1Constants = Secp256k1Constants;

export default secp256k1Constants;

