declare type DataEncoding = 'base64' | 'hex';
export declare function encryptUrlParam(params?: {}, encoding?: DataEncoding): string;
export declare function encryptData(data: {} | undefined, secretKey: string, encoding?: DataEncoding): string;
export declare function decryptUrlParam(params: string, encoding?: DataEncoding): string;
export declare function decryptData(params: string, secretKey: string, encoding?: DataEncoding): string;
export {};
