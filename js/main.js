const diaNascimento = document.querySelector("#dia-nas")
const mesNascimento = document.querySelector("#mes-nas")
const anoNascimento = document.querySelector("#ano-nas")
const btn = document.querySelector("#send")

// btn.addEventListener("click", function(e) {

//     e.preventDefault();

//     const valordia = dianascimento.value;  
//     const valormes = mesnascimento.value;  
//     const valorano = anonascimento.value;  
    
//     //Constante com a data de nascimento digitada.
//     const dataDeNascimento = `${valorano}/${valormes}-${valordia}`;

//     //Objeto de data com a data de nascimento.
//     const dataDeNascimentoObj = new Date(dataDeNascimento);

//     //Diferença de tempo entre a data de nascimento e a data atual em milissegundos.
//     const diferencaEmMilissegundos = Date.now() - dataDeNascimentoObj.getTime();

//     //Converte a diferença em anos dividindo a diferença total pelo número de milissegundos em um ano.
//     const idade = Math.floor(diferencaEmMilissegundos / 31536000000);

//     //Imprimir a idade calculada.
//     console.log(idade);

// })

/* ESTAVA TENTANDO FAZER DE UM JEITO BEM MAIS DETALHADO */

btn.addEventListener("click", function(e) {

    e.preventDefault();

    /* começo recebimento data do usuario */

    const valorDia = diaNascimento.value;  
    console.log(valorDia) /* apagar no final */

    const valorMes = mesNascimento.value;  
    console.log(valorMes) /* apagar no final */

    const valorAno = anoNascimento.value;  
    console.log(valorAno) /* apagar no final */

    /* fim recebimento data do usuario */

    /* começo quantos dias mes do usuario tem */

    if (valorMes == 1 || valorMes == 3 || valorMes == 5 || valorMes == 7 || valorMes == 8 || valorMes == 10 || valorMes == 12) {

        console.log("O mês digitado tem 31 dias."); /* apagar no final */
        var mesNominal = 31

    } else if (valorMes == 4 || valorMes == 6 || valorMes == 9 || valorMes == 11) {

        console.log("O mês digitado tem 30 dias."); /* apagar no final */
        var mesNominal = 30

    } else if (valorMes == 2) {

        var ano4 = valorAno % 4
        var ano400 = valorAno % 400

        if (ano4 == 0 || ano400 == 0) {

            console.log("O mês digitado tem 29 dias."); /* apagar no final */
            var mesNominal = 29

        } else {

            console.log("O mês digitado tem 28 dias."); /* apagar no final */
            var mesNominal = 28

        }
    }

    /* fim quantos dias mes do usuario tem */


    /* começo data atual */

    const data = new Date()

    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()

    const dataAtual = `${dia}/${mes}/${ano}`

    console.log(dataAtual) /* apagar no final */

    /* fim data atual */

    /* começo contas */

    const diasFaltantes = mesNominal - valorDia
    console.log(diasFaltantes) /* apagar no final */

    const mesFaltantes = 12 - valorMes 
    console.log(mesFaltantes) /* apagar no final */

    /*começo soma de meses futuros ate fim no ano em dias*/

    // const mesFaltantesEmDias = 0

    if (ano4 == 0 || ano400 == 0) {
        if (valorMes == 1) {
            var mesFaltantesEmDias = 335
            /* 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 2) {
            var mesFaltantesEmDias = 306
            /* 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 3) {
            var mesFaltantesEmDias = 275
            /* 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 4) {
            var mesFaltantesEmDias = 245
            /* 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 5) {
            var mesFaltantesEmDias = 214
            /* 30 + 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 6) {
            var mesFaltantesEmDias = 184
            /* 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 7) {
            var mesFaltantesEmDias = 153
            /* 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 8) {
            var mesFaltantesEmDias = 122
            /* 30 + 31 + 30 + 31 */
        } else if (valorMes == 9) {
            var mesFaltantesEmDias = 92
            /* 31 + 30 + 31 */
        } else if (valorMes == 10) {
            var mesFaltantesEmDias = 61
            /* 30 + 31 */
        } else if (valorMes == 11) {
            var mesFaltantesEmDias = 31
            /* 31 */
        } else if (valorMes == 12) {
            var mesFaltantesEmDias = 0
            /* 0 */
        }
    } else {
        if (valorMes == 1) {
            var mesFaltantesEmDias = 334
            /* 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 2) {
            var mesFaltantesEmDias = 306
            /* 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 3) {
            var mesFaltantesEmDias = 275
            /* 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 4) {
            var mesFaltantesEmDias = 245
            /* 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 5) {
            var mesFaltantesEmDias = 214
            /* 30 + 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 6) {
            var mesFaltantesEmDias = 184
            /* 31 + 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 7) {
            var mesFaltantesEmDias = 153
            /* 31 + 30 + 31 + 30 + 31 */
        } else if (valorMes == 8) {
            var mesFaltantesEmDias = 122
            /* 30 + 31 + 30 + 31 */
        } else if (valorMes == 9) {
            var mesFaltantesEmDias = 92
            /* 31 + 30 + 31 */
        } else if (valorMes == 10) {
            var mesFaltantesEmDias = 61
            /* 30 + 31 */
        } else if (valorMes == 11) {
            var mesFaltantesEmDias = 31
            /* 31 */
        } else if (valorMes == 12) {
            var mesFaltantesEmDias = 0
            /* 0 */
        }

    }

    /*fim soma de meses futuros ate fim no ano em dias*/

    const somaDiasFaltantesMesFaltantes = diasFaltantes + mesFaltantesEmDias
    console.log(somaDiasFaltantesMesFaltantes) /* apagar no final */

    /* começo soma de anos inteiros entre datas */

    var valorAnoMaisUm = valorAno + 1
    var somaDiasAnosInteiros = 0

    let i = valorAnoMaisUm ;
    while (i < ano) {

        var novoAno4 = i % 4
        var novoAno400 = i % 400

        if (novoAno4 == 0 || novoAno400 == 0) {

            somaDiasAnosInteiros = somaDiasAnosInteiros + 366

        } else {

            somaDiasAnosInteiros = somaDiasAnosInteiros + 365

        }

        console.log(i);
        i++;
    }

    console.log(somaDiasAnosInteiros)

    /* fim soma de anos inteiros entre datas */

    /* fim contas */

})