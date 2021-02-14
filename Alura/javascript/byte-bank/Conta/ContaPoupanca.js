import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(cliente, agencia) {
        super(cliente, agencia, 0);
    }

    sacar(valor) {
        let taxa = 1.02;
        this._sacar(valor, taxa);
    }
}
