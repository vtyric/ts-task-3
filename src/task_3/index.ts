/** Задача 3 - Моё хранилище
 *    Напишите класс хранилища(Vault)
 *    Из хранилища можно снимать валюту с помощью withdraw(Currency)
 *    В хранилище можно вкладывать валюту через deposit(Currency)
 *    Из хранлилища, можно переводить валюту через transfer(Currency, Vault)
 */
import {Currency} from "../task_1";

export class Vault implements ISecureVaultRequisites {
    public id: number;
    public store: Set<Currency> = new Set<Currency>();

    public withdraw(currency: Currency): void {
        this.store.forEach(c => {
            if (c.name === currency.name) {
                if (c.value < currency.value) {
                    throw new Error("на счету не достаточно средств")
                }
                c.value -= currency.value;
            }
        });
    }

    public deposit(currency: Currency): void {
        let storeHasElement = false;
        this.store.forEach(c => {
            if (c.name === currency.name) {
                c.value += currency.value;
                storeHasElement = true;
            }
        });
        if (!storeHasElement) {
            this.store.add(currency);
        }
    }

    public transfer(currency: Currency, vault: Vault): void {
        this.withdraw(currency);
        vault.deposit(currency);
    }
}

export interface ISecureVaultRequisites {
    id: number
}
