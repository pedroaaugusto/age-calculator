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


    /* começo soma meses inteiros primeiro ano  = ok */

    var mesesPrimeiroAno = valorMes - 1

    /* fim soma meses inteiros primeiro ano */


    /* começo soma meses inteiros ultimo ano  = ok */

    var mesesPrimeiroAno = mesNumero -1

    /* fim soma meses inteiros ultimo ano */
    

    /* começo soma meses inteiros primeiro e ultimo ano para ver se da um ano inteiro = ok */

    // if () {

    // } else {

    // }

    /* fim soma meses inteiros primeiro e ultimo ano para ver se da um ano inteiro */

})