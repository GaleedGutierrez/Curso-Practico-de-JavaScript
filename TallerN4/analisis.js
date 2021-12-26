function calculateArithmeticMean(list) {
    const sumList = list.reduce((previusValue, currentValue) => previusValue + currentValue);
    const averageList = sumList / list.length;

    return averageList;
}

function isElementEven(element) {
    return (element % 2 === 0)
}

function medianSalaries(lista) {
    const halfList = Math.floor(lista.length / 2);
    let personMiddle = 0;
    let personMiddle1 = 0;
    let personMiddle2 = 0;
    if (isElementEven(lista.length)) {
        personMiddle1 = lista[halfList];
        personMiddle2 = lista[halfList - 1];
        const peopleMiddle = [personMiddle1, personMiddle2]
        personMiddle = calculateArithmeticMean(peopleMiddle);
    }
    else
        personMiddle = lista[halfList];

    const median = personMiddle;

    return median;
}

const salariesArg = argentina.map((person) => person.salary);
const ordernalySalaries = salariesArg.sort((previusSalary, currentSalary) => previusSalary - currentSalary);

console.group("Mediana:");
console.log(medianSalaries(ordernalySalaries))
console.groupEnd();