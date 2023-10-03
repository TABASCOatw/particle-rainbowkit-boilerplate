import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy';
import { Chain } from '../components/RainbowKitProvider/RainbowKitChainContext';
type WalletConnectVersion = '1' | '2';
type WalletConnectConnectorConfig = ConstructorParameters<typeof WalletConnectConnector>[0];
export type WalletConnectConnectorOptions = WalletConnectConnectorConfig['options'];
type WalletConnectLegacyConnectorConfig = ConstructorParameters<typeof WalletConnectLegacyConnector>[0];
export type WalletConnectLegacyConnectorOptions = WalletConnectLegacyConnectorConfig['options'];
export declare function getWalletConnectConnector(config: {
    version?: WalletConnectVersion;
    projectId?: string;
    chains: Chain[];
    options?: WalletConnectConnectorOptions;
}): WalletConnectConnector;
export declare function getWalletConnectConnector(config: {
    version: '1';
    chains: Chain[];
    options?: WalletConnectLegacyConnectorOptions;
}): WalletConnectLegacyConnector;
export declare function getWalletConnectConnector(config: {
    version: '2';
    projectId: string;
    chains: Chain[];
    options?: WalletConnectConnectorOptions;
}): WalletConnectConnector;
export {};
