import { Vault } from "../src/task_3";
import { ContractState, SmartContract } from "../src/task_4";


test("Smart", () =>{
    const v1 = new Vault()
    const smart = new SmartContract()
    expect(
         smart.state
    ).toBe(ContractState.pending);

    smart.signAndTransfer();

    expect(smart.state).toBe(ContractState.transfer)
})
