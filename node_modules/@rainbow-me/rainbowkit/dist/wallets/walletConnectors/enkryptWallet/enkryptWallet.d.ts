import type { InjectedConnectorOptions } from '@wagmi/core';
import type { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import type { Wallet } from '../../Wallet';
declare global {
    interface Window {
        enkrypt: {
            providers: {
                ethereum: any;
            };
        };
    }
}
export interface EnkryptWalletOptions {
    chains: Chain[];
}
export declare const enkryptWallet: ({ chains, ...options }: EnkryptWalletOptions & InjectedConnectorOptions) => Wallet;
