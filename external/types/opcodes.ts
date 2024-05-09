/// https://github.com/BitgesellOfficial/jsbgl/blob/beta/src/opcodes.js
interface OpcodeMap {
  [key: string]: number;
}

interface OpcodeReverseMap {
  [key: number]: string;
}

interface S {
  OPCODE: OpcodeMap;
  RAW_OPCODE: OpcodeReverseMap;
}

type ExportFunction = (S: S) => void;

export default ExportFunction
