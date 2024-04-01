import { test } from 'node:test';
import assert from 'assert';
import {
    functionNameToString,
    functionParamsToStringArray,
    functionBodyToString,
    isFunctionAsync,
    isArrowFunction,
    functionLength,
    functionToStringWithParams,
    extractFunctionInfo,
} from '../src/function';


// Test for functionNameToString
test('functionNameToString should extract function name correctly', () => {
    function testFunction() { }
    assert.strictEqual(functionNameToString(testFunction), 'testFunction');
});

// Test for functionParamsToStringArray
test('functionParamsToStringArray should extract function parameters correctly', () => {
    function testFunction(param1: any, param2: any) { }
    assert.deepStrictEqual(functionParamsToStringArray(testFunction), ['param1', 'param2']);
});

// Test for functionBodyToString
test('functionBodyToString should extract function body correctly', () => {
    function testFunction() { return true; }
    const bodyString = functionBodyToString(testFunction);
    assert.ok(bodyString.includes('return true;'));
});

// Test for isFunctionAsync
test('isFunctionAsync should detect async functions correctly', () => {
    async function testFunction() { return true; }
    assert.strictEqual(isFunctionAsync(testFunction), true);
});

// Test for isArrowFunction
test('isArrowFunction should detect arrow functions correctly', () => {
    const testFunction = () => { return true; };
    assert.strictEqual(isArrowFunction(testFunction), true);
});

// Test for functionLength
test('functionLength should return the correct number of parameters', () => {
    function testFunction(param1: any, param2: any, param3: any) { }
    assert.strictEqual(functionLength(testFunction), 3);
});

// Test for functionToStringWithParams
test('functionToStringWithParams should return a string representation of the function with parameters', () => {
    function add(a: number, b: number) { return a + b; }
    const expectedString = 'add(a, b)';
    assert.strictEqual(functionToStringWithParams(add).startsWith(expectedString), true);
});

// Test for extractFunctionInfo
test('extractFunctionInfo should return the correct function information', () => {
    function testFunction(param1: any, param2: any) { return true; }
    const expectedInfo = {
        name: 'testFunction',
        params: ['param1', 'param2'],
        body: 'return true;',
        isAsync: false,
        functionLength: 2,
        usage: 'testFunction(param1, param2)',
    };
    assert.deepStrictEqual(extractFunctionInfo(testFunction), expectedInfo);
});