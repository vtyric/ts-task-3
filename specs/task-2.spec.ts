import { Dollar, Etherium, Gold, Ruble, XRP } from '../src/task_2/index';
import { Currency } from "../src/task_1";


test("Dollar instance", () =>{
    expect(
         new Dollar(23.4)
    ).toBeInstanceOf(Dollar);
})

test("Ruble instance", () =>{
    expect(
         new Ruble(233.4)
    ).toBeInstanceOf(Ruble);
})
test("XRP instance", () =>{
    expect(
         new XRP(23.4)
    ).toBeInstanceOf(XRP);
})
test("ETH instance", () =>{
    expect(
         new Etherium(23.4)
    ).toBeInstanceOf(Etherium);
})
test("Gold instance", () =>{
    expect(
         new Gold(23.4)
    ).toBeInstanceOf(Gold);
})

test("Every instance should be Currency", () => {
    const arr: Currency[] = [
        new Dollar(23.4),
        new Gold(23.4),
        new Etherium(23.4),
        new XRP(23.4),
        new Ruble(233.4)
    ];

    expect(
        arr.every((x) => {
            return x instanceof Currency
        })
    ).toBe(true);
})