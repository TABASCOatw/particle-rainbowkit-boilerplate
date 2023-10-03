import type { InjectedConnectorOptions } from '@wagmi/core/connectors/injected';
import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
declare global {
    interface Window {
        talismanEth: Window['ethereum'];
    }
}
export interface TalismanWalletOptions {
    chains: Chain[];
}
export declare const talismanWallet: ({ chains, ...options }: TalismanWalletOptions & InjectedConnectorOptions) => Wallet;
