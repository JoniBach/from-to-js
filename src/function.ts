// Assuming Function type is defined elsewhere or using TypeScript's built-in types

export function functionNameToString(func: Function): string | null {
    const funcStr: string = func.toString();
    const nameMatch: RegExpMatchArray | null = (funcStr.match(/function\s+([\w$]+)/) || func.name ? [null, func.name] : null) as RegExpMatchArray | null;
    return nameMatch ? nameMatch[1] : null;
}

export function functionParamsToStringArray(func: Function): string[] {
    const funcStr: string = func.toString();
    const paramsMatch: RegExpMatchArray | null = funcStr.match(/\(([^)]*)\)/);
    if (paramsMatch && paramsMatch[1]) {
        return paramsMatch[1].split(',').map((param: string) => param.trim());
    }
    return [];
}

export function functionBodyToString(func: Function): string {
    const funcStr: string = func.toString();
    const bodyMatch: RegExpMatchArray | null = funcStr.match(/\{([\s\S]*)\}/);
    return bodyMatch ? bodyMatch[1].trim() : '';
}

export function isFunctionAsync(func: Function): boolean {
    const funcStr: string = func.toString();
    return funcStr.startsWith('async ');
}

export function isArrowFunction(func: Function): boolean {
    const funcStr: string = func.toString();
    return funcStr.includes('=>') && !funcStr.includes('function');
}

export function functionLength(func: Function): number {
    return func.length;
}

export function functionToStringWithParams(func: Function): string {
    const funcName: string | null = functionNameToString(func) || '';
    const paramsArray: string[] = functionParamsToStringArray(func);
    const params: string = paramsArray.join(', ');
    const funcDeclaration: string = `${funcName}(${params})`;
    return funcDeclaration;
}



export function functionToStringWithTypedParams(func: Function): string {
    const funcName: string | null = functionNameToString(func) || '';
    const paramsArray: string[] = functionParamsToStringArray(func);
    const params: string = paramsArray.join(', ');
    const funcDeclaration: string = `${funcName}(${params})`;
    return funcDeclaration;
}


export type FunctionInfo = {
    name: string | null;
    params: string[];
    body: string;
    isAsync: boolean;
    functionLength: number;
    usage: string;

}

export function extractFunctionInfo(func: Function): FunctionInfo {
    return {
        name: functionNameToString(func),
        params: functionParamsToStringArray(func),
        body: functionBodyToString(func),
        isAsync: isFunctionAsync(func),
        functionLength: functionLength(func),
        usage: functionToStringWithParams(func),
    };
}
