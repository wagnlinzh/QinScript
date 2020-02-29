//报错处理程序
import {kill, writeToFile} from "../Utils/utils";
import {LexerToken} from "../Lexer/Datastruct/Token";

let errorNum = 0;

export function hasError(): boolean {
    return errorNum > 0;
}

export function printErr(errMsg) {
    //通用报错打印
    console.error(errMsg)
}

export function printFatalError(errMsg) {
    printErr("====================发生致命错误====================\n" + errMsg);
    errorNum++;
    kill();
}

export function printLexerError(lexerTokens: LexerToken[], file) {
    //词法分析错误
    let errorMsg = "====================发生词法分析错误====================\n";
    for (let index = 0; index < lexerTokens.length; index++) {
        errorMsg += `第${index + 1}个错误：\n`;
        errorMsg += "   错误内容：" + lexerTokens[index].errorMsg + '\n';
        errorMsg += "   错误发生的文件：" + file + '\n';
        errorMsg += "   错误发生的行号：" + lexerTokens[index].lineNo + '\n';
        errorMsg += "   错误发生的位置：" + lexerTokens[index].start + '\n';
        errorMsg += "   错误的Token值：" + lexerTokens[index].value + '\n';
        errorMsg += "   错误的Token长度：" + lexerTokens[index].length + '\n';
        errorMsg += "====================================================\n";
    }
    printErr(errorMsg);
    errorNum += lexerTokens.length;
}

let formError = "";
let formErrorNum = 0;

export function addBuildFormError(error) {
    formError += error;
    formErrorNum++;
}

export function printBuildFormError() {
    if (formErrorNum > 0) {
        console.log("分析表有" + formErrorNum + "个冲突，请查看日志！");
        let errorMsg = "====================LR(1)分析表构造错误====================\n";
        errorMsg += formError;
        errorMsg += "====================================================\n";
        writeToFile(errorMsg, "FormError.txt")
    } else {
        console.log("分析表无冲突！");
        writeToFile("无异常！", "FormError.txt")
    }
    formErrorNum = 0;
    formError = "";
}
