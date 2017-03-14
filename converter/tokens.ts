export class tokens {

    constructor() { }

    public fromOptCode(code: number): token {
        return { TokenCode: code, text: this._tokens[code] };
    }

    public fromLiteral(literal: string): token {
        return { TokenCode: literal.charCodeAt(0), text: String.fromCharCode(parseInt(literal)) };
    }

    public fromChLiteral(ch: number): token {
        return { TokenCode: ch, text: String.fromCharCode(ch) };
    }

    public fromNumber(num: number, base: number): token {
        var text;
        switch (base) {
            case 8:
                text = "&O" + num.toString(7);
                break;
            case 16:
                text = "&H" + num.toString(16);
                break;
            default:
                text = num.toString();
                break;
        }
        return { TokenCode: -1, text: text };
    }

    public fromFloat(num: number): token {
        return { TokenCode: num, text: num.toString() };
    }

    public _tokens: { [key: number]: string; } = {
        [0x00]: 'EOL',
        [0x81]: "END",
        [0x82]: "FOR",
        [0x83]: "NEXT",
        [0x84]: "DATA",
        [0x85]: "INPUT",
        [0x86]: "DIM",
        [0x87]: "READ",
        [0x88]: "LET",
        [0x89]: "GOTO",
        [0x8A]: "RUN",
        [0x8B]: "IF",
        [0x8C]: "RESTORE",
        [0x8D]: "GOSUB",
        [0x8E]: "RETURN",
        [0x8F]: "REM",
        [0x90]: "STOP",
        [0x91]: "PRINT",
        [0x92]: "CLEAR",
        [0x93]: "LIST",
        [0x94]: "NEW",
        [0x95]: "ON",
        [0x96]: "WAIT",
        [0x97]: "DEF",
        [0x98]: "POKE",
        [0x99]: "CONT",
        [0x9C]: "OUT",
        [0x9D]: "LPRINT",
        [0x9E]: "LLIST",
        [0xA0]: "WIDTH",
        [0xA1]: "ELSE",
        [0xA2]: "TRON",
        [0xA3]: "TROFF",
        [0xA4]: "SWAP",
        [0xA5]: "ERASE",
        [0xA6]: "EDIT",
        [0xA7]: "ERROR",
        [0xA8]: "RESUME",
        [0xA9]: "DELETE",
        [0xAA]: "AUTO",
        [0xAB]: "RENUM",
        [0xAC]: "DEFSTR",
        [0xAD]: "DEFINT",
        [0xAE]: "DEFSNG",
        [0xAF]: "DEFDBL",
        [0xB0]: "LINE",
        [0xB1]: "WHILE",
        [0xB2]: "WEND",
        [0xB3]: "CALL",
        [0xB7]: "WRITE",
        [0xB8]: "OPTION",
        [0xB9]: "RANDOMIZE",
        [0xBA]: "OPEN",
        [0xBB]: "CLOSE",
        [0xBC]: "LOAD",
        [0xBD]: "MERGE",
        [0xBE]: "SAVE",
        [0xBF]: "COLOR",
        [0xC0]: "CLS",
        [0xC1]: "MOTOR",
        [0xC2]: "BSAVE",
        [0xC3]: "BLOAD",
        [0xC4]: "SOUND",
        [0xC5]: "BEEP",
        [0xC6]: "PSET",
        [0xC7]: "PRESET",
        [0xC8]: "SCREEN",
        [0xC9]: "KEY",
        [0xCA]: "LOCATE",
        [0xCC]: "TO",
        [0xCD]: "THEN",
        [0xCE]: "TAB(",
        [0xCF]: "STEP",
        [0xD0]: "USR",
        [0xD1]: "FN",
        [0xD2]: "SPC(",
        [0xD3]: "NOT",
        [0xD4]: "ERL",
        [0xD5]: "ERR",
        [0xD6]: "STRING$",
        [0xD7]: "USING",
        [0xD8]: "INSTR",
        [0xD9]: "'",
        [0xDA]: "VARPTR",
        [0xDB]: "CSRLIN",
        [0xDC]: "POINT",
        [0xDD]: "OFF",
        [0xDE]: "INKEY$",
        [0xE6]: ">",
        [0xE7]: "=",
        [0xE8]: "<",
        [0xE9]: "+",
        [0xEA]: "-",
        [0xEB]: "*",
        [0xEC]: "/",
        [0xED]: "^",
        [0xEE]: "AND",
        [0xEF]: "OR",
        [0xF0]: "XOR",
        [0xF1]: "EQV",
        [0xF2]: "IMP",
        [0xF3]: "MOD",
        [0xF4]: "\\",

        [0xFD81]: "CVI",
        [0xFD82]: "CVS",
        [0xFD83]: "CVD",
        [0xFD84]: "MKI$",
        [0xFD85]: "MKS$",
        [0xFD86]: "MKD$",
        [0xFD8B]: "EXTERR",
        [0xFE81]: "FILES",
        [0xFE82]: "FIELD",
        [0xFE83]: "SYSTEM",
        [0xFE84]: "NAME",
        [0xFE85]: "LSET",
        [0xFE86]: "RSET",
        [0xFE87]: "KILL",
        [0xFE88]: "PUT",
        [0xFE89]: "GET",
        [0xFE8A]: "RESET",
        [0xFE8B]: "COMMON",
        [0xFE8C]: "CHAIN",
        [0xFE8D]: "DATE$",
        [0xFE8E]: "TIME$",
        [0xFE8F]: "PAINT",
        [0xFE90]: "COM",
        [0xFE91]: "CIRCLE",
        [0xFE92]: "DRAW",
        [0xFE93]: "PLAY",
        [0xFE94]: "TIMER",
        [0xFE95]: "ERDEV",
        [0xFE96]: "IOCTL",
        [0xFE97]: "CHDIR",
        [0xFE98]: "MKDIR",
        [0xFE99]: "RMDIR",
        [0xFE9A]: "SHELL",
        [0xFE9B]: "ENVIRON",
        [0xFE9C]: "VIEW",
        [0xFE9D]: "WINDOW",
        [0xFE9E]: "PMAP",
        [0xFE9F]: "PALETTE",
        [0xFEA0]: "LCOPY",
        [0xFEA1]: "CALLS",
        [0xFEA4]: "NOISE",
        [0xFEA5]: "PCOPY",
        [0xFEA6]: "TERM",
        [0xFEA7]: "LOCK",
        [0xFEA8]: "UNLOCK",
        [0xFF81]: "LEFT$",
        [0xFF82]: "RIGHT$",
        [0xFF83]: "MID$",
        [0xFF84]: "SGN",
        [0xFF85]: "INT",
        [0xFF86]: "ABS",
        [0xFF87]: "SQR",
        [0xFF88]: "RND",
        [0xFF89]: "SIN",
        [0xFF8A]: "LOG",
        [0xFF8B]: "EXP",
        [0xFF8C]: "COS",
        [0xFF8D]: "TAN",
        [0xFF8E]: "ATN",
        [0xFF8F]: "FRE",
        [0xFF90]: "INP",
        [0xFF91]: "POS",
        [0xFF92]: "LEN",
        [0xFF93]: "STR$",
        [0xFF94]: "VAL",
        [0xFF95]: "ASC",
        [0xFF96]: "CHR$",
        [0xFF97]: "PEEK",
        [0xFF98]: "SPACE$",
        [0xFF99]: "OCT$",
        [0xFF9A]: "HEX$",
        [0xFF9B]: "LPOS",
        [0xFF9C]: "CINT",
        [0xFF9D]: "CSNG",
        [0xFF9E]: "CDBL",
        [0xFF9F]: "FIX",
        [0xFFA0]: "PEN",
        [0xFFA1]: "STICK",
        [0xFFA2]: "STRIG",
        [0xFFA3]: "EOF",
        [0xFFA4]: "LOC",
        [0xFFA5]: "LOF",
    }

    public NumberTypeTokens: string[] = [ '\x0B', '\x0C', '\x0f', '\x1c', '\x1d', '\x1f', '\x11', '\x12', '\x13', '\x14', '\x15', '\x16', '\x17', '\x18', '\x19', '\x1a', '\x1b']
    public LineNumberTokens: string[] = [ '\x0D', '\x0E' ]

    public OctalDigits: string[] = ['0', '1', '2', '3', '4', '5', '6', '7']
    public DecimalDigits: string[] = this.OctalDigits.concat(['8', '9'])
    public HexaDigits: string[] = this.DecimalDigits.concat([
        'a', 'A',
        'b', 'B',
        'c', 'C',
        'd', 'D',
        'e', 'E',
        'f', 'F'
    ]);
    public Operators: string[] = [ '+', '-', '=', '/', '\\', '^', '*', '<', '>' ];
    public WithBracketTokens: string[] =[ "\xd2", "\xce" ];
}

export class token {
    TokenCode: number;
    text: string;
}