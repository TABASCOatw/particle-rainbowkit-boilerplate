import { Chain } from '../../../components/RainbowKitProvider/RainbowKitChainContext';
import { Wallet } from '../../Wallet';
export interface OnekeyWalletOptions {
    chains: Chain[];
}
declare global {
    interface Window {
        $onekey: any;
    }
}
export declare const oneKeyWallet: ({ chains }: OnekeyWalletOptions) => Wallet;
