/// <reference types="node" />
import { Buffer } from 'buffer';
export declare function bufferToHex(buf: Buffer): string;
export declare function intToHex(value: number): string;
export declare function isHexPrefixed(str: string): boolean;
export declare function addHexPrefix(str: string): string;
export declare function stripHexPrefix(str: string): string;
/**
 * Is the string a hex string.
 *
 * @param  value
 * @param  length
 * @returns  output the string is a hex string
 */
export declare function isHexString(value: string, length?: number): boolean;
