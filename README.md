# Age-calculator

Saiba qual a idade de algo ou alguém apenas colocando a data de nascimento ou criação, que você tem conhecimento.

## Objetivo

O objetivo deste projeto foi criar uma solução para um desafio do Front-end Mentor <a href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q">Age calculator app</a> onde criaríamos uma calculadora de idade, tendo em mente principalmente aprimorar suas habilidades em JavaScript e validação de formulários.

## Acesse

<a href="https://spiffy-liger-ebc6b9.netlify.app/">Calculadora de idade</a>

## Tabela de conteúdo 

- [Visão geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Capturas de tela](#capturas-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construido com](#construído-com)
  - [Features](#features)
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [O que aprendi](#o-que-aprendi)
  - [Status do projeto](#status-do-projeto)
  - [Recursos úteis](#recursos-úteis)
- [Autor](#autor)
- [Licença](#licença)

## Visão geral

### O desafio

Funcionalidades:

- Visualize uma idade em anos, meses e dias após enviar uma data válida por meio do formulário
- Receba erros de validação se:
  - Qualquer campo está vazio quando o formulário é enviado
  - O número do dia não está entre 1-31
  - O número do mês não está entre 1-12
  - O ano está no futuro
  - A data é inválida, por exemplo, 31/04/1991 (há 30 dias em abril)
- Veja o layout ideal para a interface, dependendo do tamanho da tela do dispositivo
- Veja os estados de focalização e foco para todos os elementos interativos na página
- Bônus : veja os números de idade animados até o número final quando o formulário for enviado

### Capturas de tela

#### layout mobile (375px) <br>

<table>
  <tr>
    <td>
      <!-- coluna 1 -->
      <a href="link_da_imagem1"><img src="https://user-images.githubusercontent.com/115605744/231649356-7a2fe141-1c73-41c9-b6b2-b6333517f30d.png" alt="Descrição da imagem"></a>
    </td>
    <td>
      <!-- coluna 2 -->
      <a href="link_da_imagem2"><img src="https://user-images.githubusercontent.com/115605744/231648645-0a1d0101-1d9c-4a59-a1dd-aed0c505a40c.png" alt="Descrição da imagem"></a>
    </td>
    <td>
      <!-- coluna 3 -->
      <a href="link_da_imagem3"><img src="https://user-images.githubusercontent.com/115605744/231648680-abf2918c-cb34-4ccf-b0d0-9867d2623708.png" alt="Descrição da imagem"></a>
    </td>
  </tr>
</table>

#### layout medium devices (768px) <br>

<table>
  <tr>
    <td>
      <!-- coluna 1 -->
      <a href="link_da_imagem1"><img src="https://user-images.githubusercontent.com/115605744/231650745-b3882f0f-3d13-4223-aeca-1bb83e80fdbc.png" alt="Descrição da imagem"></a>
    </td>
    <td>
      <!-- coluna 2 -->
      <a href="link_da_imagem2"><img src="https://user-images.githubusercontent.com/115605744/231650752-342c056f-2bdd-4628-8280-24a715931c66.png" alt="Descrição da imagem"></a>
    </td>
    <td>
      <!-- coluna 3 -->
      <a href="link_da_imagem3"><img src="https://user-images.githubusercontent.com/115605744/231650763-4c99973a-2628-4ed8-a67a-bb1ea14c9e9e.png" alt="Descrição da imagem"></a>
    </td>
  </tr>
</table>

#### layout desktop (1440px) <br>

![33 0](https://user-images.githubusercontent.com/115605744/231651292-6fa09775-58ad-4e03-8456-441f20507df6.png)
![33 1](https://user-images.githubusercontent.com/115605744/231651301-2eddf76b-3365-4f80-a0c5-d1dd8119173f.png)
![33 2](https://user-images.githubusercontent.com/115605744/231651309-cc6dd55a-3dc9-4ce5-ad90-97f84387a6e4.png)

### Links

- URL da solução: [GitHub](https://github.com/pedroaaugusto/age-calculator)
- URL do site: [Site](https://spiffy-liger-ebc6b9.netlify.app/)

## Meu processo

### Construído com:

![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

## Features

<!-- :hammer_and_wrench: @ <br> -->
:iphone: Mobile-First ; <br>
:fountain_pen: Conventional Commits ;

<!-- 

Colocar topico no proximo README

## Próximos passos (Feito)

- [X] Permitir que usuário escreva somente numeros delimitados no input 

-->


### Tecnologias utilizadas

- Tags semânticas
- Arquitetura de Software
- Unidades relativas
- JavaScript
- Convencional Commits
- Mobile First

### O que aprendi

#### Aprendi a criar um evento e fazer com que o formulário não seja enviado com "preventDefault" ;
```js
btn.addEventListener("click", function(e) {

    e.preventDefault();

});
```

#### Aprendi a utilizar condicionais como "e" e "ou" dentro de estruturas "ifelse" ;
```js
function validandoInputs()
{
    if (validandoInputDia() && validandoInputMes() && validandoInputAno()) {
        return true;
    } else {
        return false;
    }

}
```

#### Aprendi a conseguir a data atual usando "new Date()" e a manipular essa resposta para que apareça somente informações necessárias, e também a transformar uma string em um number e vice-versa ;
```js
const data = new Date()

const dia = String(data.getDate()).padStart(2, '0')
const mes = String(data.getMonth() + 1).padStart(2, '0')
const ano = data.getFullYear()

const dataAtual = `${dia}/${mes}/${ano}`
console.log(dataAtual) /* apagar no final */

const diaNumero = Number(dia)
const mesNumero = Number(mes)
const anoNumero = ano
```

#### Aprendi a arredondar números com ou sem casas decimais usando ".toFixed()" e "Math.round()" ;
```js
var diasFinal = diasPrimeiroAno + diasUltimoAno

var mediaDiasAno = 365.25
var mediaDiasMes = (mediaDiasAno / 12).toFixed(2) /* 30.44 */

if (diasFinal >= mediaDiasMes) {

    var diasFinal = Math.round(diasFinal - mediaDiasMes)
    var mesesFinal = mesesFinal + 1

    if (mesesFinal > 12) {

        var mesesFinal = mesesFinal - 12
        var somaAnosInteiros = somaAnosInteiros + 1

    }

}
```

#### Aprendi a usar estruturas repetitivas no JavaScript como "While" ;
```js
var valorAnoMaisUm = valorAno + 1
  var somaAnosInteiros = 0

  let j = valorAnoMaisUm ;
  while (j < anoNumero) {

      somaAnosInteiros = somaAnosInteiros + 1

      j++;
  }
```

### Status do projeto

Primeira entrega concluída. Preparando atualizações.

### Recursos úteis

- [Curso sobre JavaScript](https://www.cursoemvideo.com/curso/javascript/) - Curso com ótima didática para quem busca dar os primeiros passos em JavaScript.
- [Escopo JavaScript](https://medium.com/weyes/entendendo-o-uso-de-escopo-no-javascript-3669172ca5ba) - Site ótimo para entender como funciona o escopo no JavaScript.
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) - Ótimo conteúdo sobre Conventional Commits, importantíssimo para lógica de commits ajuda a melhorar a qualidade do código-fonte, tornando as alterações mais fáceis de entender e rastrear.

## Autor

- GitHub - [Pedro Alves](https://github.com/pedroaaugusto)
- LinkedIn - [Pedro Alves](https://www.linkedin.com/in/pedroaalves)

## Licença

![GitHub](https://img.shields.io/github/license/pedroaaugusto/age-calculator?style=plastic)
