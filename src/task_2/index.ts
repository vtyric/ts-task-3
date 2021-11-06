/** Задача 2 - Много стран, много валют
 * Определите классы следующих валют
 * Dollar
 * Ruble
 * XRP
 * Etherium
 * Gold
 */
import {Currency} from "../task_1";

export class Dollar extends Currency {
    constructor(value: number) {
        super("dollar", value, "usd");
    }
}

export class Ruble extends Currency {
    constructor(value: number) {
        super("ruble", value, "rub");
    }
}

export class XRP extends Currency {
    constructor(value: number) {
        super("ripple", value, "xrp");
    }
}

export class Etherium extends Currency {
    constructor(value: number) {
        super("etherium", value, "eth");
    }
}

export class Gold extends Currency {
    constructor(value: number) {
        super("gold", value, "gold");
    }
}
