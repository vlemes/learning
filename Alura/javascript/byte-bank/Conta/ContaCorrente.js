import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroConta = 0;
    constructor(cliente, agencia) {
        super(cliente, agencia, 0);
        ContaCorrente.numeroConta += 1;
    }

    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
