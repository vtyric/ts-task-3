/**
 * Задание 5 - Власть банков
 * В этой задаче вам нужно реализовать класс контроллер
 * 1. registerVault(): ISecureVaultRequisites - регистрирует хранилище в банке
 * 2. proceedContract(IContract): void - проводит договор между счетами
 * 3. Класс контроллера должен быть реализацией паттерна Singleton
 *
 * Хранилища должны быть сохранены в массив vaultStore: Vault[]
 */
import {ISecureVaultRequisites, Vault} from "../task_3";
import {IContract} from "../task_4";

export class BankController {

    private static instance: BankController;
    private readonly _vaultStore: Vault[];

    private constructor() {
        this._vaultStore = [];
    }

    public static getInstance(): BankController {
        if (!this.instance) {
            this.instance = new BankController();
        }

        return this.instance;
    }

    public registerVault(): ISecureVaultRequisites {
        const vault = new Vault();
        this._vaultStore.push(vault);

        return vault;
    }

    public proceedContract(contract: IContract): void {
        const sender = this._vaultStore.find(v => v.id === contract.id);
        const receiver = this._vaultStore.find(v => v.id === contract.receiver.id);

        setTimeout(() => {
            contract.signAndTransfer();
            try {
                sender.withdraw(contract.value);
            } catch (e) {
                contract.closeTransfer();

                return;
            }
            receiver.deposit(contract.value);
            contract.closeTransfer;
        }, contract.delay);
    }
}

