import { test } from 'node:test';
import assert from 'assert';
import {
    nodeStringToBase64,
    nodeBase64ToString,
    urlToEncode,
    urlToDecode,
    stringToArrayBuffer,
    arrayBufferToString,
    stringToHex,
    hexToString,
    stringToBinary,
    binaryToString,
} from '../src/string';

// Base64 encoding and decoding (Node.js)
test('nodeStringToBase64 and nodeBase64ToString conversion', () => {
    const originalString = 'Hello, world!';
    const base64String = nodeStringToBase64(originalString);
    assert.strictEqual(base64String, Buffer.from(originalString).toString('base64'));
    assert.strictEqual(nodeBase64ToString(base64String), originalString);
});

// URL encoding and decoding
test('urlToEncode and urlToDecode conversion', () => {
    const originalString = 'Hello, world!';
    const encodedString = urlToEncode(originalString);
    assert.strictEqual(encodedString, encodeURIComponent(originalString));
    assert.strictEqual(urlToDecode(encodedString), originalString);
});

// ArrayBuffer conversion
test('stringToArrayBuffer and arrayBufferToString conversion', () => {
    const originalString = 'Hello, world!';
    const arrayBuffer = stringToArrayBuffer(originalString);
    const backToString = arrayBufferToString(arrayBuffer);
    assert.strictEqual(backToString, originalString);
});

// Hexadecimal conversion
test('stringToHex and hexToString conversion', () => {
    const originalString = 'Hello, world!';
    const hexString = stringToHex(originalString);
    const backToString = hexToString(hexString);
    assert.strictEqual(backToString, originalString);
});

// Binary conversion
test('stringToBinary and binaryToString conversion', () => {
    const originalString = 'Hello, world!';
    const binaryString = stringToBinary(originalString);
    const backToString = binaryToString(binaryString);
    assert.strictEqual(backToString, originalString);
});

