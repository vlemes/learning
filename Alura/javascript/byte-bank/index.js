import { Cliente } from "./Cliente/Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";

const cliente = new Cliente("Vinícius", 42581472098, "123456");
const contaCorrente = new ContaCorrente(cliente, 1234);
const contaPoupanca = new ContaPoupanca(cliente, 1324);

contaCorrente.depositar(500);
contaCorrente.transferir(contaPoupanca, 250);
contaPoupanca.sacar(50);
console.log(contaCorrente.saldo, contaPoupanca.saldo);

const gerente = new Gerente("José", 41789632101, 10000);
const diretor = new Diretor("Carlos", 47852103265, 15000);

gerente.cadastraSenha("123");
console.log(gerente.autenticar("123"));
console.log(cliente.autenticar("123456"));

console.log(diretor.salarioBonificado);
console.log(gerente.salarioBonificado);
