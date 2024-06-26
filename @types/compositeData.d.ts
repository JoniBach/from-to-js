export declare function jsonStringToObject(jsonString: string): any;
export declare function objectToJsonString(object: any): string;
export declare function yamlToJson(yamlString: string): any;
export declare function jsonToYaml(jsonObject: any): string;
export declare function csvToJson(csvString: string): any;
export declare function jsonToCsv(jsonObject: any): string;
export declare function xmlToJson(xmlString: string): Promise<any>;
export declare function jsonToXml(jsonObject: any): string;
export declare function markdownToHtml(markdownText: string): Promise<string>;
export declare function compressString(str: string): Uint8Array;
export declare function decompressToString(data: Uint8Array): string;
