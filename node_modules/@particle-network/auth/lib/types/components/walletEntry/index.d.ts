import { Auth } from '../../auth';
import { Config } from '../../types';
export declare enum WalletEntryPosition {
    BR = "bottom-right",
    BL = "bottom-left",
    TR = "top-right",
    TL = "top-left"
}
export interface WalletEntryOptions {
    position?: WalletEntryPosition;
    preload?: boolean;
}
export declare class WalletEntryPlugin {
    static WALLET_BTN_POSITION: string;
    private auth;
    private walletEntryOptions;
    private config;
    constructor(config: Config, auth: Auth, options: WalletEntryOptions);
    private isMobile;
    openWallet(params?: {
        windowSize: string;
    }): false | undefined;
    setWalletIcon(): void;
    private updateIframeContentPosition;
    private setButtonStorageData;
    private getButtonStorageData;
    private updateWalletBtnPosition;
    closeWallet(): void;
    private resize;
    private sleep;
    private preload;
    private walletEntryRander;
    destroy(): void;
}
