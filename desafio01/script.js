function comprarJogos(){

const jogos = [
    { nome: "Brutal Mania", preco: 10.00 },
    { nome: "Short Life 2", preco: 5.00 },
    { nome: "Pixar on Titan", preco: 13.00 },
    { nome: "Madness Deathwish", preco: 6.00 }
];

let resumo = "Resumo da sua compra:\n\n";
let resposta = []
let valorCompra = []
let total= 0;
for (let jogo of jogos) {
    let quantidade = Number(prompt(
        `Quantas unidades de ${jogo.nome} você deseja?\nPreço: R$ ${jogo.preco}`
    ));
    if (isNaN(quantidade) || quantidade < 0) {
        alert("Por favor, insira um número válido.");
        return;
    }
    resposta.push(quantidade);
    let valor = jogo.preco * quantidade;
    valorCompra.push(valor);
    total += valor;


}  

if (total === 0 ) {
    resumo += "Nenhum jogo foi comprado.\n";
} else {
    for (let i = 0; i < resposta.length; i++) {
        resumo += `${jogos[i].nome} (quantidade: ${resposta[i]}; valor: R$ ${valorCompra[i].toFixed(2)})\n`;
    }
}

resumo += `\nTotal da compra: R$ ${total.toFixed(2)}`;

alert(resumo);

}