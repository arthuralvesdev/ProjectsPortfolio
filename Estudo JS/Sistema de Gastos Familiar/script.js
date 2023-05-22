let family = {
    incomes: [5634.45, 425.78, 250, 487, 15],
    expenses: [485.85, 800.65, 875, 423.41, 896.56,]
}


function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }
    return total
}




function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed([2])}`)
}


calculateBalance()