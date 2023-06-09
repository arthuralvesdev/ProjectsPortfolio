function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error ('Grau não identificado')
    }

    // Fluxo ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
    let degreeSign = 'Cº';

    // Fluxo alternativo C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32;
        degreeSign = 'Fº';
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('84.2F'))
    console.log(transformDegree('29C'))
    console.log(transformDegree('50Z'))
} catch (error) {
    console.log(error.message)
}