import type { InjectedConnectorOptions } from '@wagmi/core/dist/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface SafeheronWalletOptions {
    chains: Chain[];
}
declare global {
    interface Window {
        safeheron: any;
    }
}
export declare const safeheronWallet: ({ chains, ...options }: SafeheronWalletOptions & InjectedConnectorOptions) => Wallet;
