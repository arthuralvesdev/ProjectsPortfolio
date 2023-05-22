function getNota(nota) {

let notaA = nota >= 90 && nota <= 100
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaF = nota < 60 && nota >= 0

let notaFinal;

if (notaA) {
    notaFinal = "A"
} else if (notaB) {
    notaFinal = "B"
} else if (notaC) {
    notaFinal = "C"
} else if (notaD) {
    notaFinal = "D"
} else if (notaF) {
    notaFinal = "F"
} else {
    notaFinal = "Nota inválida!!"
}

return notaFinal
}

console.log(getNota(156))
console.log(getNota(-1))
console.log(getNota(92))
console.log(getNota(78))
console.log(getNota(45))
console.log(getNota(88))
console.log(getNota(100))
console.log(getNota(41))
console.log(getNota(20))
console.log(getNota(85))

