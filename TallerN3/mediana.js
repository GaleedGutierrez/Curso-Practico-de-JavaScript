function calculateArithmeticMean(list) {
    const accumulate =  (accumulator, currentValue) => accumulator + currentValue;
    const sumList = list.reduce(accumulate, 0);
    const averageList = sumList / list.length;

    return averageList;
}

function isEven(number) {
    let even = false;
    if (number % 2 === 0)
        even = true;
    return even;
}

function calculateMedian(list) {
    let median = 0;
    const halfList = Math.floor(list.length / 2);

    if (isEven(list1.length)) {
        const element1 = list[halfList];
        const element2 = list[halfList - 1];
        const elements = [element1, element2];
        median = calculateArithmeticMean(elements);
    } 
    else
        median = list1[halfList];

    return median;
}

function organizeIncresingOrder(list) {
    let listOrganize = list.sort((a, b) => a - b);
    return listOrganize;
}

let list1 = [
    10,
    8,
    5,
    15,
    23,
    65,
    98,
    33,
    3,
    2
];

list1 = organizeIncresingOrder(list1);

const median = calculateMedian(list1);


console.log({
    list1, median
});