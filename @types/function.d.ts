export declare function functionNameToString(func: Function): string | null;
export declare function functionParamsToStringArray(func: Function): string[];
export declare function functionBodyToString(func: Function): string;
export declare function isFunctionAsync(func: Function): boolean;
export declare function isArrowFunction(func: Function): boolean;
export declare function functionLength(func: Function): number;
export declare function functionToStringWithParams(func: Function): string;
export declare function functionToStringWithTypedParams(func: Function): string;
export type FunctionInfo = {
    name: string | null;
    params: string[];
    body: string;
    isAsync: boolean;
    functionLength: number;
    usage: string;
};
export declare function extractFunctionInfo(func: Function): FunctionInfo;
