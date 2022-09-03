

let funcionario:{nomeDosSupervisores:string[],baterPonto:(hora:number)=>string}

funcionario ={
    nomeDosSupervisores:['Edgar','Pamela'],
    baterPonto:(hora)=>hora<=8?'Ponto Normal':'Fora do Horário',
}

type ContaBancaria= {
    saldo:number;
    depositar:(valor:number) =>void;
}

type Correntista = {
    nome:string;
    contaBancaria:ContaBancaria;
    contatos:string[];
}

let correntista:Correntista ={
    nome:'Alex',

    contaBancaria:{saldo:3456,depositar(valor) {
        this.saldo+=valor;
    }},
    contatos:['3456','34567']
}

correntista.contaBancaria.depositar(300);
console.log(correntista);