/*funcao que calcula o numero de xicaras*/
function xicarasresp(){
let xicaras = document.getElementById("xicaras");
let respxicaras = ""    

if(xicaras.value == 10){
        respxicaras = "Esse é exatamente o número de xícaras que preciso comprar";
    } else if(xicaras.value < 10) {
        respxicaras = "Xiii, fizemos essa conta errada e agora alguem vai ficar sem meu maravilhoso chá!";
    } else {
        respxicaras = "Ai, ai ,ai... fizemos a conta errada e agora sobraram xícaras, acho que foi por isso que faltou diheiro para as velas!!"
    }

    alert(respxicaras);
}
/*funcao que calcula o troco*/
function trocoresp(){
    let troco = document.getElementById("troco");
    let respTroco = ""

    if(troco.value == 16) {
        respTroco = "Esse foi exatamente o troco que o Coelho branco trouxe!"
    } else if(troco.value < 16){
        respTroco = "Xiii, acho que nao fizemos essa conta direito, porque o Coelho trouxe mais do que isso!"
    } else {
        respTroco = `Xiii, ou nós erramos na conta ou o Coelho comprou balas com uma parte do troco, ele trouxe bem menos que  ${troco.value} Reais`
    }
    alert(respTroco);
}

/*Funcao que calcula a idade do gato*/
function idade() {
    let idade = document.querySelector("input#idade");
    let respIdade=""

    if(idade.value == 15){
        respIdade = "Essa era dificil e você acertou! Parabéns!!";
    } else if(idade.value < 15){
        respIdade = `Dessa vez estava difícil, acho que por isso que erramos...ele tem um poucomais que ${idade.value} anos!`
    } else{
        respIdade = `Bem que ele reclama de dores, mas ele não é tão velho assim... vamos refazer essa conta?`
    }
    alert(respIdade);
}

/*funcao que calcula os brigadeiros*/

function brigadeiros(){
    let brigadeiros = document.querySelector("input#brigadeiros");
    let respBrigadeiros = "";

    if(brigadeiros.value == 30){
        respBrigadeiros = " Acertamos essa! Uhuuuu"
    } else if(brigadeiros.value <30){
        respBrigadeiros = "Xiiiii, erramos nessa conta, alguém vai ficar sem brigadeiro!!"
    } else {
        respBrigadeiros = ("Fizemos mais brigadeiro do que devíamos!! Foi por isso que faltou leite condensado para a cobertura do bolo! Precisamos prestar mais atenção")
    }
    alert(respBrigadeiros);
}

/*funcao que calcula tempo para fazer o bolo*/

function bolo(){

    let bolo = document.querySelector("input#bolo");
    let respBolo = "";

    if(bolo.value == 14){
        respBolo = "Fizemos a conta certinho, o bolo ficou pronto quando os convidados chegaram!";
    } else if(bolo.value < 14){
        respBolo = "Fizemos o bolo muito cedo, quando os convidados chegaram já estava frio!"
    } else {
        respBolo = "Ai, Ai, Ai.... os convidados chegaram e nao temos bolo... onde foi que erramos?"
    }
    alert(respBolo);
}