function counterNumbers(list) {
    let numbersStorage = {};
    for (const number of list) {
        let counter = 0;
        for (const numbers of list)
            if (number === numbers)
                counter++;
            numbersStorage[number] = counter;
    }
    return numbersStorage;
}

function modeGenerator(numbers) {
    const listArray = Object.entries(numbers)
        .sort((previusValue, currentValue) => previusValue[1] - currentValue[1]);
    const mode = listArray[listArray.length - 1];
    return mode;
}

let list1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1, 7, 7];

let numberStorage = {};

numberStorage = counterNumbers(list1);

let mode = modeGenerator(numberStorage);