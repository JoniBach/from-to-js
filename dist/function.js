"use strict";
// Assuming Function type is defined elsewhere or using TypeScript's built-in types
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractFunctionInfo = exports.functionToStringWithTypedParams = exports.functionToStringWithParams = exports.functionLength = exports.isArrowFunction = exports.isFunctionAsync = exports.functionBodyToString = exports.functionParamsToStringArray = exports.functionNameToString = void 0;
function functionNameToString(func) {
    const funcStr = func.toString();
    const nameMatch = (funcStr.match(/function\s+([\w$]+)/) || func.name ? [null, func.name] : null);
    return nameMatch ? nameMatch[1] : null;
}
exports.functionNameToString = functionNameToString;
function functionParamsToStringArray(func) {
    const funcStr = func.toString();
    const paramsMatch = funcStr.match(/\(([^)]*)\)/);
    if (paramsMatch && paramsMatch[1]) {
        return paramsMatch[1].split(',').map((param) => param.trim());
    }
    return [];
}
exports.functionParamsToStringArray = functionParamsToStringArray;
function functionBodyToString(func) {
    const funcStr = func.toString();
    const bodyMatch = funcStr.match(/\{([\s\S]*)\}/);
    return bodyMatch ? bodyMatch[1].trim() : '';
}
exports.functionBodyToString = functionBodyToString;
function isFunctionAsync(func) {
    const funcStr = func.toString();
    return funcStr.startsWith('async ');
}
exports.isFunctionAsync = isFunctionAsync;
function isArrowFunction(func) {
    const funcStr = func.toString();
    return funcStr.includes('=>') && !funcStr.includes('function');
}
exports.isArrowFunction = isArrowFunction;
function functionLength(func) {
    return func.length;
}
exports.functionLength = functionLength;
function functionToStringWithParams(func) {
    const funcName = functionNameToString(func) || '';
    const paramsArray = functionParamsToStringArray(func);
    const params = paramsArray.join(', ');
    const funcDeclaration = `${funcName}(${params})`;
    return funcDeclaration;
}
exports.functionToStringWithParams = functionToStringWithParams;
function functionToStringWithTypedParams(func) {
    const funcName = functionNameToString(func) || '';
    const paramsArray = functionParamsToStringArray(func);
    const params = paramsArray.join(', ');
    const funcDeclaration = `${funcName}(${params})`;
    return funcDeclaration;
}
exports.functionToStringWithTypedParams = functionToStringWithTypedParams;
function extractFunctionInfo(func) {
    return {
        name: functionNameToString(func),
        params: functionParamsToStringArray(func),
        body: functionBodyToString(func),
        isAsync: isFunctionAsync(func),
        functionLength: functionLength(func),
        usage: functionToStringWithParams(func),
    };
}
exports.extractFunctionInfo = extractFunctionInfo;
