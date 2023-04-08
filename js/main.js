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

    /* começo recebimento data do usuario = ok */

    const valorDia = Number(diaNascimento.value);  
    console.log(valorDia) /* apagar no final */

    const valorMes = Number(mesNascimento.value);  
    console.log(valorMes) /* apagar no final */

    const valorAno = Number(anoNascimento.value);  
    console.log(valorAno) /* apagar no final */

    /* fim recebimento data do usuario */

    /* começo quantos dias mes do usuario tem = ok */

    if (valorMes == 1 || valorMes == 3 || valorMes == 5 || valorMes == 7 || valorMes == 8 || valorMes == 10 || valorMes == 12) {

        var mesNominal = 31
        console.log("O mês digitado tem 31 dias."); /* apagar no final */

    } else if (valorMes == 4 || valorMes == 6 || valorMes == 9 || valorMes == 11) {

        var mesNominal = 30
        console.log("O mês digitado tem 30 dias."); /* apagar no final */

    } else if (valorMes == 2) {

        var ano4 = valorAno % 4
        console.log(ano4)
        
        var ano400 = valorAno % 400
        console.log(ano400)

        if (ano4 == 0 || ano400 == 0) {

            var mesNominal = 29
            console.log("O mês digitado tem 29 dias."); /* apagar no final */

        } else {

            var mesNominal = 28
            console.log("O mês digitado tem 28 dias."); /* apagar no final */

        }
    }

    /* fim quantos dias mes do usuario tem */


    /* começo data atual = ok */

    const data = new Date()

    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()

    const dataAtual = `${dia}/${mes}/${ano}`
    console.log(dataAtual) /* apagar no final */

    const diaNumero = Number(dia)
    const mesNumero = Number(mes)
    const anoNumero = ano

    /* fim data atual */

    /* começo contas */

    const diasFaltantes = mesNominal - valorDia

    const mesFaltantes = 12 - valorMes 

    /*começo soma de meses futuros ate fim no ano em dias = ac  redito q ok*/

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

    /*fim soma de meses futuros ate fim no ano em dias */

    const somaDiasFaltantesMesFaltantes = diasFaltantes + mesFaltantesEmDias

    /* começo soma de anos inteiros entre datas = ok */

    var valorAnoMaisUm = valorAno + 1
    var somaDiasAnosInteiros = 0

    let j = valorAnoMaisUm ;
    while (j < ano) {

        var novoAno4 = j % 4
        var novoAno400 = j % 400

        if (novoAno4 == 0 || novoAno400 == 0) {

            somaDiasAnosInteiros = somaDiasAnosInteiros + 366

        } else {

            somaDiasAnosInteiros = somaDiasAnosInteiros + 365

        }

        j++;
    }

    console.log('soma dos dias e anos inteiros : ', somaDiasAnosInteiros)

    /* fim soma de anos inteiros entre datas */

    /*começo soma de meses passados ate mes atual em dias = acredito que ok*/

    var anoAtual4 = ano % 4
    var anoAtual400 = ano % 400

    if (anoAtual4 == 0 || anoAtual400 == 0) {
        if (mesNumero == 1) {
            var mesPassadosEmDias = 0
            /* 0 */
        } else if (mesNumero == 2) {
            var mesPassadosEmDias = 31
            /* 31 */
        } else if (valorMes == 3) {
            var mesPassadosEmDias = 60
            /* 31 + 29 */
        } else if (mesNumero == 4) {
            var mesPassadosEmDias = 91
            /* 31 + 29 + 31 */
        } else if (mesNumero == 5) {
            var mesPassadosEmDias = 121
            /* 31 + 29 + 31 + 30*/
        } else if (mesNumero == 6) {
            var mesPassadosEmDias = 152
            /* 31 + 29 + 31 + 30 + 31*/
        } else if (mesNumero == 7) {
            var mesPassadosEmDias = 182
            /* 31 + 29 + 31 + 30 + 31 + 30*/
        } else if (mesNumero == 8) {
            var mesPassadosEmDias = 213
            /* 31 + 29 + 31 + 30 + 31 + 30 + 31*/
        } else if (mesNumero == 9) {
            var mesPassadosEmDias = 244
            /* 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31*/
        } else if (mesNumero == 10) {
            var mesPassadosEmDias = 274
            /* 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30*/
        } else if (mesNumero == 11) {
            var mesPassadosEmDias = 305
            /* 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31*/
        } else if (mesNumero == 12) {
            var mesPassadosEmDias = 335
            /* 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30*/
        }
    } else {
        if (mesNumero == 1) {
            var mesPassadosEmDias = 0
            /* 0 */
        } else if (mesNumero == 2) {
            var mesPassadosEmDias = 31
            /* 31 */
        } else if (mesNumero == 3) {
            var mesPassadosEmDias = 59
            /* 31 + 28 */
        } else if (mesNumero == 4) {
            var mesPassadosEmDias = 90
            /* 31 + 28 + 31 */
        } else if (mesNumero == 5) {
            var mesPassadosEmDias = 120
            /* 31 + 28 + 31 + 30*/
        } else if (mesNumero == 6) {
            var mesPassadosEmDias = 151
            /* 31 + 28 + 31 + 30 + 31*/
        } else if (mesNumero == 7) {
            var mesPassadosEmDias = 181
            /* 31 + 28 + 31 + 30 + 31 + 30*/
        } else if (mesNumero == 8) {
            var mesPassadosEmDias = 212
            /* 31 + 28 + 31 + 30 + 31 + 30 + 31*/
        } else if (mesNumero == 9) {
            var mesPassadosEmDias = 243
            /* 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31*/
        } else if (mesNumero == 10) {
            var mesPassadosEmDias = 273
            /* 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30*/
        } else if (mesNumero == 11) {
            var mesPassadosEmDias = 304
            /* 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31*/
        } else if (mesNumero == 12) {
            var mesPassadosEmDias = 334
            /* 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30*/
        }

    }

    /*fim soma de meses passados ate mes atual em dias*/

    const somaDiasPassadosMesPassados = diaNumero + mesPassadosEmDias
    console.log(somaDiasPassadosMesPassados) /* apagar no final */

    /* começo contas idade atual em dias = ok */

    var idadeAtualEmDias = somaDiasFaltantesMesFaltantes + somaDiasAnosInteiros + somaDiasPassadosMesPassados

    console.log(idadeAtualEmDias)
    
    /* fim contas idade atual em dias */

    /* começo meses entre datas */

    var valorAnoMaisUm = valorAno + 1
    var somaDiasAnosInteiros = 0
    var meses31 = 0
    var meses30 = 0
    var meses29 = 0
    var meses28 = 0

    let k = valorAnoMaisUm ;
    while (k < ano) {

        var newAno4 = k % 4
        var newAno400 = k % 400
        console.log(k);

        if (newAno4 == 0 || newAno400 == 0) {

            var meses31 = meses31 + 7
            var meses30 = meses30 + 4
            var meses29 = meses29 + 1

        } else {

            var meses31 = meses31 + 7
            var meses30 = meses30 + 4
            var meses28 = meses28 + 1

        }

        
        k++;
    }

    console.log(meses31)
    console.log(meses30)
    console.log(meses29)
    console.log(meses28)

    /* fim meses entre datas */

    /* começo idade */

    var meses = idadeAtualEmDias
    
    /* fim idade */

    /* fim contas */

})