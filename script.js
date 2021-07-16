let nome = prompt("Qual o seu nome?");


if(nome == "Alice"){
    document.getElementById("apresent").innerHTML = `Olá, ${nome}. O que você faz por aqui? Ah, desculpa a minha indelicadeza é que eu estava esperando por outra Alice... você a viu por ai?`
} else{
document.getElementById("apresent").innerHTML = `Olá, ${nome}. O que você faz por aqui? Ah, desculpa a minha indelicadeza é que eu estava esperando pela Alice... você a viu por ai?`
}

function resposta(){
    document.getElementById("resposta").innerHTML = `Entendi! Bem, vou ter que espera-la! Enquanto isso, que tal tomarmos um chazinho e você me ajuda a resolver umas contas??</br></br>
                                                    `
}

