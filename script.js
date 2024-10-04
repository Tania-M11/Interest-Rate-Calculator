// Tasas nominales entre si

function convertRates() {
    // Obtener los valores ingresados por el usuario
    const inputPercentage = parseFloat(document.getElementById("inputPercentage").value);
    const inputPeriod = document.getElementById("inputPeriod").value;
    const outputPeriod = document.getElementById("outputPeriod").value;

    // Definir factores de conversión para diferentes períodos
    const conversionFactors = {
        mensual: 1,
        bimestral: 2,
        trimestral: 3,
        cuatrimestral: 4,
        semestral: 6,
        anual: 12
    };

    // Realizar la conversión de tasas
    const result = (inputPercentage / conversionFactors[inputPeriod]) * conversionFactors[outputPeriod];

    // Mostrar el resultado en la página
    document.getElementById("result").textContent = `Tasa equivalente: ${result.toFixed(2)}% ${outputPeriod}`;
}


//tasa nominal a efectiva

function convertNominalToEffective() {
    // Obtener los valores ingresados por el usuario
    const inputNominalRate = parseFloat(document.getElementById("inputNominalRate").value);
    const inputPeriodDays = parseFloat(document.getElementById("inputPeriodDays").value);
    const inputCapitalizationDays = parseFloat(document.getElementById("inputCapitalizationDays").value);
    const inputRequestedDays = parseFloat(document.getElementById("inputRequestedDays").value);

    // Calcular la tasa efectiva utilizando la fórmula proporcionada
    const nominalRate = inputNominalRate / 100;
    const effectiveRate = ((1 + (nominalRate / (inputPeriodDays / inputCapitalizationDays))) ** (inputRequestedDays / inputCapitalizationDays)) - 1;

    // Mostrar el resultado en la página
    document.getElementById("effectiveResult").textContent = `Tasa Efectiva: ${(effectiveRate * 100).toFixed(2)}%`;
}


//tasas efectivas entre si
function convertEffectiveToEffective() {
    // Obtener los valores ingresados por el usuario
    const inputInterestRate2 = parseFloat(document.getElementById("inputInterestRate2").value) / 100;
    const inputRequestedDays2 = parseFloat(document.getElementById("inputRequestedDays2").value);
    const inputGivenDays = parseFloat(document.getElementById("inputGivenDays").value);

    // Verificar si los valores son numéricos válidos
    if (isNaN(inputInterestRate2) || isNaN(inputRequestedDays2) || isNaN(inputGivenDays)) {
        document.getElementById("effectiveEffectiveResult").textContent = "Por favor, ingrese valores numéricos válidos.";
    } else {
        // Calcular la tasa efectiva utilizando la fórmula proporcionada
        const effectiveRate = ((1 + inputInterestRate2) ** (inputRequestedDays2 / inputGivenDays)) - 1;

        // Mostrar el resultado en la página
        document.getElementById("effectiveEffectiveResult").textContent = `Tasa Efectiva Solicitada: ${(effectiveRate * 100).toFixed(2)}%`;
    }
}



//tasas efectivas a nominales
function convertEffectiveToNominal() {
    // Obtener los valores ingresados por el usuario
    const inputEffectiveRate3 = parseFloat(document.getElementById("inputEffectiveRate3").value) / 100;
    const inputNominalDays3 = parseFloat(document.getElementById("inputNominalDays3").value);
    const inputCapitalizationDays3 = parseFloat(document.getElementById("inputCapitalizationDays3").value);
    const inputEffectiveDays = parseFloat(document.getElementById("inputEffectiveDays").value);

    // Validar que los valores sean numéricos y no NaN
    if (isNaN(inputEffectiveRate3) || isNaN(inputNominalDays3) || isNaN(inputCapitalizationDays3) || isNaN(inputEffectiveDays)) {
        document.getElementById("nominalResult").textContent = "Por favor, ingrese valores válidos.";
    } else {
        // Calcular la tasa nominal utilizando la fórmula proporcionada
        const nominalRate = (inputNominalDays3 / inputCapitalizationDays3) * ((Math.pow(1 + inputEffectiveRate3, inputCapitalizationDays3 / inputEffectiveDays)) - 1);

        // Mostrar el resultado en la página
        document.getElementById("nominalResult").textContent = `Tasa Nominal: ${(nominalRate * 100).toFixed(2)}%`;
    }
}


