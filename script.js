let nome = prompt("Qual o seu nome?");


if(nome == "Alice"){
    document.getElementById("apresent").innerHTML = `Olá, ${nome}. O que você faz por aqui? Ah, desculpa a minha indelicadeza é que eu estava esperando por outra Alice... você a viu por ai?`
} else if(nome ==""){
    document.getElementById("apresent").innerHTML = `Bem vindo nobre visitante. Porque você não colocou o seu nome? Você também é procurado pela Rainha? Tudo bem, vou te chamar de TicTac, tudo bem? Eu estou esperando pela Alice, você a viu por aí?`
} else {
document.getElementById("apresent").innerHTML = `Olá, ${nome}. O que você faz por aqui? Ah, desculpa a minha indelicadeza é que eu estava esperando pela Alice... você a viu por ai?`
}

function resposta(){
    document.getElementById("resposta").innerHTML = `Entendi! Bem, vou ter que espera-la! E para sair daqui, você também vai precisar dela, entao que tal  tomarmos um chazinho e você me ajuda a resolver umas contas??</br></br>
                                                    `
}

