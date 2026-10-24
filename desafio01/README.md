# True Crime Games

**Aluna:** Paloma Ferreira  
**Trilha:** Mobile  
**Projeto:** True Crime Games
![Captura de tela da True Crime Games](assets/tela.png)

## Sobre o projeto

A True Crime Games é uma página de loja fictícia que apresenta jogos com temática de ação e sobrevivência. O usuário pode consultar os produtos, seus preços e informar quantas unidades deseja comprar para ver o resumo e o valor total.

### Produtos

| Produto | Preço |
|---|---:|
| Brutal Mania | R$ 10,00 |
| Short Life 2 | R$ 5,00 |
| Pixar on Titan | R$ 13,00 |
| Madness Deathwish | R$ 6,00 |

## Tecnologias utilizadas

Foram utilizadas as tecnologias:
- **HTML**
-  **CSS** 
-  **JavaScript**

## Como executar

1. Baixe o projeto.
2. Abra o arquivo HTML em um navegador.
3. Siga os prompts para informar a quantidade de cada jogo e confira o resumo exibido.

ou  

Acesse: [https://lomaferreira.github.io/trilhas-mobile/desafio01/](https://lomaferreira.github.io/trilhas-mobile/desafio01/)


## Testes realizados

- **Todas as quantidades iguais a zero:** o programa entrou no fluxo que informa que nenhum jogo foi comprado e exibiu total zero.
- **Quantidades diferentes de zero**, por exemplo `1, 0, 1, 0`: testei o cálculo dos produtos selecionados e do total da compra.
- **Entrada vazia ou texto não numérico:** percebi que a conversão podia gerar resultados inesperados. Por isso, acrescentei uma validação para tratar essas entradas.

## Dificuldade e aprendizado

Uma dificuldade foi calcular corretamente o preço de cada produto e montar o resumo da compra. Também precisei investigar o comportamento de entradas vazias e de textos que não representam números. Com isso, pratiquei o uso de variáveis, arrays, laços de repetição, condições e validação de dados em JavaScript.

## Uso de inteligência artificial

Utilizei IA como apoio para criar a primeira versão da estilização em CSS. Depois, fiz alterações na estrutura e adaptei partes do código às necessidades do projeto. Também usei a IA para esclarecer dúvidas sobre o cálculo dos subtotais e o comportamento das entradas. Conferi o resultado executando a página no navegador e testando diferentes quantidades, inclusive zero, campos vazios e valores não numéricos.