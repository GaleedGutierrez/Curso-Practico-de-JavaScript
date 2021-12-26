class SchoolSubjets {
    constructor(name, note, clout) {
        this.name = name;
        this.note = note;
        this.clout = clout;
    }
}

function calculateWeightedAverage(Subjets) {
    let denominator = 0;
    let dividend = 0;
    for (const subject of Subjets) {
        denominator += subject.note * subject.clout;
        dividend += subject.clout;
    }
    const calculateWeightedAverage = denominator / dividend;
    
    return calculateWeightedAverage;
}

function calculateMedian(subjects) {
    let halfArray = 0;
    let median = 0;
    const notes = subjects.map((subject) => subject.note);
    const orderlyNotes = notes.sort((previusNote, currentNote) => previusNote- currentNote);
    halfArray = Math.floor(orderlyNotes.length / 2);

    if (isArrayEven(orderlyNotes)) 
        median = (orderlyNotes[halfArray] + orderlyNotes[halfArray - 1]) / 2;  
    else
        median = orderlyNotes[halfArray];

    return median;
}

function isArrayEven(numbers) {
    isEven = false;
    if (numbers.length % 2 === 0) 
        isEven = true;

    return isEven;
}

function calculateMode(subjects) {
    let counter = 0;
    const numbersStorage = {}
    for (const subject of subjects) {
        counter = 0;
        for (const subjectNumber of subjects)
            if (subject.note === subjectNumber.note)
                counter++
        numbersStorage[subject.note] = counter;
    }

    const numbersArray = Object.entries(numbersStorage);
    const orderlyNumbers = numbersArray.sort((previusNumber, currentNumber) => previusNumber[1] - currentNumber[1]);
    const finalNumber = orderlyNumbers.length - 1;

    const mode = orderlyNumbers.filter(
        function (number, _, orderlyNumbers) {
            if (orderlyNumbers[finalNumber][1] === number[1]) 
                return number;
        }
    );

    return mode;
}


let setOfSubjects = [];

setOfSubjects.push(new SchoolSubjets("Physics", 10, 2));
setOfSubjects.push(new SchoolSubjets("English", 8, 5));
setOfSubjects.push(new SchoolSubjets("Math", 5, 5));
setOfSubjects.push(new SchoolSubjets("Programming", 3, 9));
setOfSubjects.push(new SchoolSubjets("Programming", 3, 9));
setOfSubjects.push(new SchoolSubjets("Programming", 10, 8));
setOfSubjects.push(new SchoolSubjets("Programming", 5, 1));
setOfSubjects.push(new SchoolSubjets("Programming", 1, 4));
setOfSubjects.push(new SchoolSubjets("Programming", 4, 7));

const PromedioPonderado = calculateWeightedAverage(setOfSubjects);
const MedianaDeNotas = calculateMedian(setOfSubjects);
const ModaDeNotas = calculateMode(setOfSubjects);

console.group("Resultados finales:");
console.log({PromedioPonderado, MedianaDeNotas, ModaDeNotas})
console.groupEnd();