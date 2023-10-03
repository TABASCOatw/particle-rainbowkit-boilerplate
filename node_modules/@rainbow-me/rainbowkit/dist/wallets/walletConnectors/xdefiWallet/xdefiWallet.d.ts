import type { InjectedConnectorOptions } from '@wagmi/core/dist/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
declare global {
    interface Window {
        xfi: any;
    }
}
export interface XDEFIWalletOptions {
    chains: Chain[];
}
export declare const xdefiWallet: ({ chains, ...options }: XDEFIWalletOptions & InjectedConnectorOptions) => Wallet;
