function calculateArithmeticMean(list) {
    // let sumList = 0;

    // for (const element of list1) {
    //     sumList += element;
    // }
    const sumList = list.reduce((previusValue, currentValue) => previusValue + currentValue);

    const averageList = sumList / list.length;

    return averageList;
}

const list1 = [
    100,
    200,
    300,
    500
];

const average = calculateArithmeticMean(list1);

console.group("Promedio");
console.log({average});
console.groupEnd();