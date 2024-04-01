// Encodes a string to Base64 (Browser).
export function webStringToBase64(str: string): string {
    return window.btoa(str);
}

// Decodes a Base64 string (Browser).
export function webBase64ToString(b64: string): string {
    return window.atob(b64);
}


// Encodes a string to Base64 (Node.js).
export function nodeStringToBase64(str: string): string {
    return Buffer.from(str).toString('base64');
}

// Decodes a Base64 string (Node.js).
export function nodeBase64ToString(b64: string): string {
    return Buffer.from(b64, 'base64').toString();
}


// URL-encodes a string.
export function urlToEncode(str: string): string {
    return encodeURIComponent(str);
}

// URL-decodes a string.
export function urlToDecode(str: string): string {
    return decodeURIComponent(str);
}

// Converts a string to an ArrayBuffer using a modern approach.
export function stringToArrayBuffer(str: string): ArrayBuffer {
    const buffer = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    const bufferView = new Uint16Array(buffer);
    let i = 0;
    for (let char of str) {
        bufferView[i++] = char.charCodeAt(0);
    }
    return buffer;
}

// Converts an ArrayBuffer to a string.
export function arrayBufferToString(buffer: ArrayBuffer): string {
    const uint16Array = new Uint16Array(buffer);
    const charCodeArray = Array.from(uint16Array);
    return String.fromCharCode(...charCodeArray);
}


// Converts a string to a hexadecimal representation.
export function stringToHex(str: string): string {
    return str.split('').map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
}

// Converts a hexadecimal string to its original string representation.
export function hexToString(hex: string): string {
    const hexes = hex.match(/.{1,2}/g) || [];
    return hexes.map(h => String.fromCharCode(parseInt(h, 16))).join('');
}


// Converts a string to a binary string representation.
export function stringToBinary(str: string): string {
    return str.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

// Converts a binary string to its original string representation.
export function binaryToString(binary: string): string {
    return binary.split(' ').map(b => String.fromCharCode(parseInt(b, 2))).join('');
}

