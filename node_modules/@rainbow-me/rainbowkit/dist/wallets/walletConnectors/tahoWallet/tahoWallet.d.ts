import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface TahoWalletOptions {
    chains: Chain[];
}
declare global {
    interface Window {
        tally: any;
    }
}
export declare const tahoWallet: ({ chains, ...options }: TahoWalletOptions & InjectedConnectorOptions) => Wallet;
