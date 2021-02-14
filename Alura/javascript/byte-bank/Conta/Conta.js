import { Cliente } from "../Cliente/Cliente.js";

export class Conta {
    constructor(cliente, agencia, saldo) {
        if (this.constructor == Conta) {
            throw new Error(
                "Você não deve instanciar um tipo conta diretamente"
            );
        }
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldo;
    }

    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    get agencia() {
        return this._agencia;
    }

    //Método Abstrato
    sacar(valor) {
        throw new Error("Método sacar é abstrado");
    }

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if (this._saldoSuficiente(valorSacado)) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return this._saldo;
        }
    }

    transferir(conta, valor) {
        if (this._saldoSuficiente(valor)) {
            this._saldo -= valor;
            conta.depositar(valor);
        }
    }

    _saldoSuficiente(valor) {
        if (this._saldo <= valor) {
            return false;
        }

        return true;
    }
}
