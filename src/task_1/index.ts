/** Задача 1 - Сущность любой монетки
 * Опишите класс валюты
 * Он должен определять имя(name) валюты, String
 * Содержать количество(value) валюты, Number
 * Содержать количественный тип(unit), в котором исчисляется валюта, String
 * Класс должен предоставлять информацию о типе валюты: Материальная, криптовалюта или металл-депозит
 * Example new Currency("DOGE", 12.5, "satoshi")
 */

export class Currency {
    private readonly _name: string;
    private readonly _type: CurrencyType;
    private readonly _unit: string;
    private readonly _unitDictionary: Record<string, CurrencyType> = {
        ["rub"]: CurrencyType.Material,
        ["usd"]: CurrencyType.Material,
        ["xrp"]: CurrencyType.Cryptocurrency,
        ["eth"]: CurrencyType.Cryptocurrency,
        ["gold"]: CurrencyType.MetalDeposit
    };
    private _value: number;

    constructor(name: string, value: number, unit: string) {
        if (!name ||
            value < 0 || value === undefined ||
            !unit || Object.keys(this._unitDictionary).every(k => k !== unit)) {
            throw new Error("некорректные аргументы конструктора");
        }
        this._name = name;
        this._value = value;
        this._unit = unit;
        this._type = this._unitDictionary[unit];
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get unit() {
        return this._unit;
    }

    get value() {
        return this._value;
    }

    set value(value: number) {
        if (value < 0 || value === undefined) {
            throw new Error("некорректное значение");
        }
        this._value = value;
    }
}

export enum CurrencyType {
    Material,
    Cryptocurrency,
    MetalDeposit
}

