function calculoNivel(vitorias, derrotas) {

    const saldoDeVitorias = vitorias - derrotas
    
    let nivel
    if (saldoDeVitorias < 10) {
        nivel = "Ferro"
    } else if (saldoDeVitorias >= 11 && saldoDeVitorias <= 20) {
        nivel = "Bronze"
    } else if (saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
        nivel = "Prata"
    } else if (saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
        nivel = "Ouro"
    } else if (saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
        nivel = "Diamante"
    } else if (saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    
    
    return { saldoDeVitorias: saldoDeVitorias, nivel: nivel }
}


const vitorias = 259
const derrotas = 185
const resultado = calculoNivel(vitorias, derrotas)

console.log("O Herói tem de saldo de " + resultado.saldoDeVitorias + " está no nível de " + resultado.nivel)
