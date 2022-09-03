"use strict";
var funcionario;
funcionario = {
    nomeDosSupervisores: ['Edgar', 'Pamela'],
    baterPonto: function (hora) { return hora <= 8 ? 'Ponto Normal' : 'Fora do Horário'; },
};
var correntista = {
    nome: 'Alex',
    contaBancaria: { saldo: 3456, depositar: function (valor) {
            this.saldo += valor;
        } },
    contatos: ['3456', '34567']
};
correntista.contaBancaria.depositar(300);
console.log(correntista);
