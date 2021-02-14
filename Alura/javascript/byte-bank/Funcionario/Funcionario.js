export class Funcionario {
    constructor(nome, cpf, salario) {
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;

        this._bonificacao = 1;
    }

    autenticar(senha) {
        return this._senha == senha;
    }

    cadastraSenha(senha) {
        this._senha = senha;
    }

    get salarioBonificado() {
        return this._salario * this._bonificacao;
    }
}
