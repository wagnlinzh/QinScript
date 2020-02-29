//非终结符
export enum V {
    Module,
    ModuleDefine,
    ModuleStmts,
    ModuleSelfDefine,
    ModuleImportDefineList,
    ModuleExportList,
    ModuleImportDefine,
    ModuleExport,
    VarDefStmt,
    FunDefStmt,
    FunDef,
    ParamList,
    BlockStmt,
    StaticVarDefStmt,
    InnerFunDefStmt,
    IfStmt,
    Exp,
    Stmt,
    CallExp,
    ArgumentList,
    AssignStmt,
    ArrayMemberExp,
    ArraySub,
    Stmts,
    VarDecStmt,
    WhileStmt,
    ReturnStmt,
    ArrayExp,
    ObjectExp,
    CalExp,
    ArrayItems,
    ArrayItem,
    Literal,
    LogicOperator,
    LogicExp,
    BitOperator,
    BitExp,
    RelationalOperator,
    RelationExp,
    AdditiveOperator,
    AdditiveExp,
    FactorOperator,
    FactorExp,
    UnaryOperator,
    UnaryExp,
    UnaryAfterOperator,
    UnaryBeforeOperator
}

//终结符
export enum T {
    AT,
    MODULE,
    COLON,
    MODULE_SCOPE,

    ID,
    SEMI,
    IMPORT,
    EXPORT,
    STATIC,
    FUN,
    LEFT_PAREN,
    RIGHT_PAREN,
    IF,
    ELSE,
    DOT,
    ASSIGN,
    COMMA,
    LEFT_BRACE,
    RIGHT_BRACE,
    LET,
    WHILE,
    RETURN,
    LEFT_BRACKET,
    RIGHT_BRACKET,
    LOGIC_OR,
    LOGIC_AND,
    BIT_AND,
    BIT_OR,
    LESS,
    LESS_EQUAL,
    EQUAL,
    NOT_EQUAL,
    GREATER,
    GREATER_EQUAL,
    ADD,
    SUB,
    MOD,
    DIV,
    MUL,
    BIT_NOT,
    NOT,
    ADD_ONE,
    SUB_ONE,
    NUMBER,
    STRING,
    TRUE,
    FALSE,
    NULL,

    ERROR,//错误token
    EOF//终结状态
}

export type V_T = T | V;