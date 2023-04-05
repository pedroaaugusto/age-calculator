const dianascimento = document.querySelector("#dia-nas")
const mesnascimento = document.querySelector("#mes-nas")
const anonascimento = document.querySelector("#ano-nas")
const btn = document.querySelector("#send")

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const valordia = dianascimento.value;  
    const valormes = mesnascimento.value;  
    const valorano = anonascimento.value;  
    
    //Constante com a data de nascimento digitada.
    const dataDeNascimento = `${valorano}/${valormes}-${valordia}`;

    //Objeto de data com a data de nascimento.
    const dataDeNascimentoObj = new Date(dataDeNascimento);

    //Diferença de tempo entre a data de nascimento e a data atual em milissegundos.
    const diferencaEmMilissegundos = Date.now() - dataDeNascimentoObj.getTime();

    //Converte a diferença em anos dividindo a diferença total pelo número de milissegundos em um ano.
    const idade = Math.floor(diferencaEmMilissegundos / 31536000000);

    //Imprimir a idade calculada.
    console.log(idade);

})

/* ESTAVA TENTANDO FAZER DE UM JEITO BEM MAIS DETALHADO */

// btn.addEventListener("click", function(e) {

//     e.preventDefault();

//     /* começo recebimento data do usuario */

//     const valordia = dianascimento.value;  
//     console.log(valordia) /* apagar no final */

//     const valormes = mesnascimento.value;  
//     console.log(valormes) /* apagar no final */

//     const valorano = anonascimento.value;  
//     console.log(valorano) /* apagar no final */

//     /* fim recebimento data do usuario */

//     /* começo quantos dias mes do usuario tem */

//     if (valormes == 1 || valormes == 3 || valormes == 5 || valormes == 7 || valormes == 8 || valormes == 10 || valormes == 12) {

//         console.log("O mês digitado tem 31 dias."); /* apagar no final */
//         var mesnominal = 31

//     } else if (valormes == 4 || valormes == 6 || valormes == 9 || valormes == 11) {

//         console.log("O mês digitado tem 30 dias."); /* apagar no final */
//         var mesnominal = 30

//     } else if (valormes == 2) {

//         var ano4 = valorano % 4
//         var ano400 = valorano % 400

//         if (ano4 == 0 || ano400 == 0) {

//             console.log("O mês digitado tem 29 dias."); /* apagar no final */
//             var mesnominal = 29

//         } else {

//             console.log("O mês digitado tem 28 dias."); /* apagar no final */
//             var mesnominal = 28

//         }
//     }

//     /* fim quantos dias mes do usuario tem */


//     /* começo data atual */

//     const data = new Date()

//     const dia = String(data.getDate()).padStart(2, '0')
//     const mes = String(data.getMonth() + 1).padStart(2, '0')
//     const ano = data.getFullYear()

//     const dataatual = `${dia}/${mes}/${ano}`

//     console.log(dataatual) /* apagar no final */

//     /* fim data atual */

//     /* começo contas */

//     const diasfaltantes = mesnominal - valordia
//     const mesfaltantes = 12 - valormes 
    

//     /* fim contas */

// })