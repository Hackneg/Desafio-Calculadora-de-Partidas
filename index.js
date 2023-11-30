// #2 Desafio Calculadora de Partidas Rankeadas
function jogadas(victorias, derrotas) {
    let result = victorias - derrotas
    return result
  }
  
  function saldo() {
    let resultSaldo = jogadas(100, 20)
    let nivel = ""
    if (resultSaldo >= 0 && resultSaldo <= 10) {
      nivel = "Ferro";
    } else if (resultSaldo >= 11 && resultSaldo <= 20) {
      nivel = "Bronze";
    } else if (resultSaldo >= 21 && resultSaldo <= 50) {
      nivel = "Prata";
    } else if (resultSaldo >= 51 && resultSaldo <= 80) {
      nivel = "Ouro";
    } else if (resultSaldo >= 81 && resultSaldo <= 90) {
      nivel = "Diamante";
    } else if (resultSaldo >= 91 && resultSaldo <= 100) {
      nivel = "Lendário";
    } else if (resultSaldo >= 100) {
      nivel = "Imortal";
    }
    return `O Herói tem de saldo de ${resultSaldo} e está no nível de ${nivel}`
  }
  
  console.log(saldo())