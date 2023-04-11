const diaNascimento = document.querySelector("#dia-nas")
const mesNascimento = document.querySelector("#mes-nas")
const anoNascimento = document.querySelector("#ano-nas")
const btn = document.querySelector("#send")


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


    /* começo soma de anos inteiros entre datas = ok */

    var valorAnoMaisUm = valorAno + 1
    var somaAnosInteiros = 0

    let j = valorAnoMaisUm ;
    while (j < anoNumero) {

        somaAnosInteiros = somaAnosInteiros + 1

        j++;
    }

    console.log('soma dos anos inteiros : ', somaAnosInteiros)

    /* fim soma de anos inteiros entre datas */


    /* começo soma meses inteiros primeiro ano e dias primeiro ano = ok */

    var pAno4 = valorAno % 4
    console.log(pAno4)
    
    var pAno400 = valorAno % 400
    console.log(pAno400)

    if (pAno4 == 0 || pAno400 == 0) {

        if (valorMes == 1 || valorMes == 3 || valorMes == 5 || valorMes == 7 || valorMes == 8 || valorMes == 10 || valorMes == 12)  {

            if (valorDia == 31 ) {

                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 1
        
            } else {
        
                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 31 - (valorDia - 1)
        
            }
            
        } else if (valorMes == 2) {

            if (valorDia == 29 ) {

                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 1
        
            } else {
        
                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 29 - (valorDia - 1)

            }
            
        } else if (valorMes == 4 || valorMes == 6 || valorMes == 9 || valorMes == 11) {

            if (valorDia == 30 ) {

                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 1
        
            } else {
        
                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 30 - (valorDia - 1)
        
            }
           
        } 

    } else {

        if (valorMes == 1 || valorMes == 3 || valorMes == 5 || valorMes == 7 || valorMes == 8 || valorMes == 10 || valorMes == 12)  {

            if (valorDia == 31 ) {

                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 1
        
            } else {
        
                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 31 - (valorDia - 1)
        
            }
            
        } else if (valorMes == 2) {

            if (valorDia == 28 ) {

                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 1
        
            } else {
        
                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 28 - (valorDia - 1)

            }
            
        } else if (valorMes == 4 || valorMes == 6 || valorMes == 9 || valorMes == 11) {

            if (valorDia == 30 ) {

                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 1
        
            } else {
        
                var mesesPrimeiroAno = 12 - valorMes
                var diasPrimeiroAno = 30 - (valorDia - 1)
        
            }
           
        }  

    }

    /* fim soma meses inteiros primeiro ano e dias primeiro ano */


    /* começo soma meses inteiros ultimo ano e dias ultimo ano = ok */

    var uAno4 = anoNumero % 4
    console.log(uAno4)
    
    var uAno400 = anoNumero % 400
    console.log(uAno400)

    if (uAno4 == 0 || uAno400 == 0) {

        if (mesNumero == 1 || mesNumero == 3 || mesNumero == 5 || mesNumero == 7 || mesNumero == 8 || mesNumero == 10 || mesNumero == 12) {

            if (valorDia == 31 ) {

                var mesesUltimoAno = mesNumero
                var diasUltimoAno = 0
        
            } else {
        
                var mesesUltimoAno = mesNumero - 1
                var diasUltimoAno = diaNumero
        
            }
            
        } else if (mesNumero == 2) {

            if (valorDia == 29 ) {

                var mesesUltimoAno = mesNumero
                var diasUltimoAno = 0
        
            } else {
        
                var mesesUltimoAno = mesNumero - 1
                var diasUltimoAno = diaNumero
        
            }
            
        } else if (mesNumero == 4 || mesNumero == 6 || mesNumero == 9 || mesNumero == 11) {

            if (valorDia == 30 ) {

                var mesesUltimoAno = mesNumero
                var diasUltimoAno = 0
        
            } else {
        
                var mesesUltimoAno = mesNumero - 1
                var diasUltimoAno = diaNumero
        
            }
           
        } 

    } else {

        if (mesNumero == 1 || mesNumero == 3 || mesNumero == 5 || mesNumero == 7 || mesNumero == 8 || mesNumero == 10 || mesNumero == 12) {

            if (valorDia == 31 ) {

                var mesesUltimoAno = mesNumero
                var diasUltimoAno = 0
        
            } else {
        
                var mesesUltimoAno = mesNumero - 1
                var diasUltimoAno = diaNumero
        
            }
            
        } else if (mesNumero == 2) {

            if (valorDia == 28 ) {

                var mesesUltimoAno = mesNumero
                var diasUltimoAno = 0
        
            } else {
        
                var mesesUltimoAno = mesNumero - 1
                var diasUltimoAno = diaNumero
        
            }
            
        } else if (mesNumero == 4 || mesNumero == 6 || mesNumero == 9 || mesNumero == 11) {

            if (valorDia == 30 ) {

                var mesesUltimoAno = mesNumero
                var diasUltimoAno = 0
        
            } else {
        
                var mesesUltimoAno = mesNumero - 1
                var diasUltimoAno = diaNumero
        
            }
           
        }  

    }

    /* fim soma meses inteiros ultimo ano e dias ultimo ano */


    /* começo soma meses primeiro e ultimo ano = ok */

    var mesesFinal = mesesPrimeiroAno + mesesUltimoAno

    /* fim soma meses primeiro e ultimo ano */


    /* começo soma dias primeiro e ultimo ano = ok */

    var diasFinal = diasPrimeiroAno + diasUltimoAno

    var mediaDiasAno = 365.25
    var mediaDiasMes = (mediaDiasAno / 12).toFixed(2) /* 30.44 */

    if (diasFinal >= mediaDiasMes) {

        var diasFinal = Math.round(diasFinal - mediaDiasMes)
        var mesesFinal = mesesFinal +1

        if (mesesFinal > 12) {
            
            var mesesFinal = mesesFinal - 12
            var somaAnosInteiros = somaAnosInteiros + 1
            
        }
        
    }

    /* fim soma dias primeiro e ultimo ano */


    /* DATA FINAL = ok */

    var dataFinal = `${somaAnosInteiros}/${mesesFinal}/${diasFinal}`
    console.log('A data final é ', dataFinal)

    /* DATA FINAL */
})