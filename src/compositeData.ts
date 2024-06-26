import * as yaml from 'js-yaml';
import Papa from 'papaparse';
import * as xml2js from 'xml2js';
import marked from 'marked';
import * as pako from 'pako';


// Converts a JSON string to an object.
export function jsonStringToObject(jsonString: string): any {
    return JSON.parse(jsonString);
}

// Converts an object to a JSON string.
export function objectToJsonString(object: any): string {
    return JSON.stringify(object, null, 2); // Indents the JSON string for readability.
}


// Converts a YAML string to a JSON object.
export function yamlToJson(yamlString: string): any {
    return yaml.load(yamlString);
}

// Converts a JSON object to a YAML string.
export function jsonToYaml(jsonObject: any): string {
    return yaml.dump(jsonObject);
}


// Converts CSV to a JSON object.
export function csvToJson(csvString: string): any {
    return Papa.parse(csvString, { header: true }).data;
}

// Converts a JSON object to CSV.
export function jsonToCsv(jsonObject: any): string {
    return Papa.unparse(jsonObject);
}

// Converts an XML string to a JSON object.
export async function xmlToJson(xmlString: string): Promise<any> {
    const parser = new xml2js.Parser({ explicitArray: false });
    return parser.parseStringPromise(xmlString);
}

// Converts a JSON object to an XML string.
export function jsonToXml(jsonObject: any): string {
    const builder = new xml2js.Builder();
    return builder.buildObject(jsonObject);
}


// Converts Markdown text to HTML using the 'marked' library.
export async function markdownToHtml(markdownText: string): Promise<string> {
    return await marked.parse(markdownText);
}

// Compresses a string using zlib compression.
export function compressString(str: string): Uint8Array {
    return pako.deflate(str);
}

// Decompresses a zlib-compressed Uint8Array back to a string.
export function decompressToString(data: Uint8Array): string {
    return pako.inflate(data, { to: 'string' });
}
