import {BankController} from "../src/task_5";


test("both variable contain same instance", () => {
    const bankController1 = BankController.getInstance();
    const bankController2 = BankController.getInstance();

    expect(bankController1 === bankController2).toBe(true);
})
