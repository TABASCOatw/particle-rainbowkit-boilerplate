import { Auth } from '../auth';
import { OpenBuyOptions } from '../types';
export interface WalletConfig {
    topMenuType?: 'close' | 'fullscreen';
}
export declare function getWalletUrl(auth: Auth, config?: WalletConfig): string;
export declare function getBuyUrl(auth: Auth, options?: OpenBuyOptions): string;
export declare function getWalletUIMode(auth: Auth): string;
