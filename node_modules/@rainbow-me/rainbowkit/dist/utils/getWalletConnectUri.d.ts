import type { Connector } from 'wagmi/connectors';
export declare function getWalletConnectUri(connector: Connector, version: '1' | '2'): Promise<string>;
