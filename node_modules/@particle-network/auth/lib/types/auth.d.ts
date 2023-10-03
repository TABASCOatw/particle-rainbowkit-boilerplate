/// <reference types="node" />
import { BI } from '@particle-network/analytics';
import { Chain, ChainName } from '@particle-network/chains';
import { EventEmitter } from 'events';
import { AuthThemeConfig, Base58String, Config, LoginOptions, PrefixedHexString, SecurityAccount, UserInfo, Wallet } from './types';
export declare class Auth {
    readonly config: Config;
    private bi;
    private PN_AUTH_USER_INFO;
    private PN_AUTH_TYPE;
    private PN_TEMP_SECRET_KEY;
    events: EventEmitter;
    private uiMode;
    private displayCloseButton;
    private displayWallet;
    private modalBorderRadius;
    private authResultMap;
    constructor(config: Config, bi: BI);
    private handleAuthEvent;
    private handleWalletEvent;
    private hideIframeBackground;
    private setAuthResult;
    private getAuthResult;
    login(config?: LoginOptions): Promise<UserInfo>;
    private isSocialLogin;
    logout(hideLoading?: boolean): Promise<void>;
    /**
     * @deprecated please use `openSecurityAccount` instead.
     */
    accountSecurity(): Promise<void>;
    /**
     * open account and security page
     */
    openAccountAndSecurity(): Promise<void>;
    getSecurityAccount(): Promise<SecurityAccount>;
    hasMasterPassword(): boolean;
    hasPaymentPassword(): boolean;
    hasSecurityAccount(): boolean;
    sign(method: string, message: Base58String | PrefixedHexString): Promise<string>;
    signAllTransactions(messages: Base58String[]): Promise<string[]>;
    sendTransaction(message: Base58String | PrefixedHexString): Promise<string>;
    switchChain(chain: Chain, hideLoading?: boolean): Promise<Wallet[]>;
    setChainInfo(chain: Chain): void;
    createWallet(name: ChainName, hideLoading?: boolean): Promise<Wallet[]>;
    private hideLoading;
    /**
     * @deprecated please use `getChainId` instead.
     */
    chainId(): number;
    getChainId(): number;
    /**
     * @deprecated please use `getChain` instead.
     */
    chain(): Chain;
    getChain(): Chain;
    basicCredentials(): string;
    isLogin(): boolean;
    isLoginAsync(): Promise<UserInfo>;
    /**
     * @deprecated please use `getUserInfo` instead.
     */
    userInfo(): UserInfo | null;
    getUserInfo(): UserInfo | null;
    getAuthType(): string | null;
    private setAuthType;
    walletExist(): boolean;
    /**
     * @deprecated please use `getWallet` instead.
     */
    wallet(chainType?: string): Wallet | null;
    getWallet(chainType?: string): Wallet | null;
    getEVMAddress(): Promise<string | undefined>;
    getSolanaAddress(): Promise<string | undefined>;
    setAuthTheme(config: AuthThemeConfig): void;
    getAuthTheme(): AuthThemeConfig;
    on(event: string, listener: (...args: any[]) => void): this;
    once(event: string, listener: (...args: any[]) => void): this;
    off(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: string, listener: (...args: any[]) => void): this;
    private walletChainName;
    private setUserInfo;
    private concatStorageKey;
    private getIframe;
    private openUrl;
    private continuePopup;
    private buildUrl;
    getThemeType(): string;
    private decrypt;
}
