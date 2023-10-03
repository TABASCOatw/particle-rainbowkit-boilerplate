import { Auth } from '../auth';
import { Base58String, Base64String } from '../types';
declare class SolanaService {
    private auth;
    constructor(auth: Auth);
    private assertSolana;
    signAndSendTransaction(transaction: Base58String): Promise<Base64String>;
    signTransaction(transaction: Base58String): Promise<Uint8Array>;
    signAllTransactions(transactions: Base58String[]): Promise<Uint8Array[]>;
    signMessage(msg: Base58String): Promise<Uint8Array>;
    getAddress(): Promise<Base58String | undefined>;
    getRpcUrl(): string;
}
export default SolanaService;
