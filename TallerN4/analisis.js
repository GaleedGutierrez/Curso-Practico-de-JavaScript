// Functions helpers or utils
const orderSmallestLargest = (firstElement, secondElement) => firstElement - secondElement;

function isElementEven(element) {
    return (element % 2 === 0)
}

function calculateArithmeticMean(list) {
    const accumulate =  (accumulator, currentValue) => accumulator + currentValue;
    const sumList = list.reduce(accumulate, 0);
    const averageList = sumList / list.length;

    return averageList;
}

// Calculate of the median salaries
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

const salariesArg = argentina.map(({salary}) => salary);
const ordernalySalaries = salariesArg.sort(orderSmallestLargest);

//Calculate of the median salaries top 10%
const spliceStart = ordernalySalaries.length * 90 / 100;
// const spliceCount = ordernalySalaries.length - spliceStart;
const Top10Argentina = ordernalySalaries.slice(spliceStart);



const medinaGlobalArgentina = medianSalaries(ordernalySalaries);
const medinaTop10Argentina = medianSalaries(Top10Argentina);

console.group("Resultados:");
console.log({medinaGlobalArgentina, medinaTop10Argentina});
console.groupEnd();