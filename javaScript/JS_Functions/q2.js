const applyOperation = (numbers, operation) => {
    const resultArray = [];
    
    for (let i = 0; i < numbers.length; i++) {

        resultArray.push(operation(numbers[i]));
    }
    
    return resultArray;
};

const sampleNumbers = [1, 2, 3, 4];

const doubleNumber = (num) => num * 2;

const squareNumber = (num) => num * num;

console.log("Original:", sampleNumbers);
console.log("Doubled:", applyOperation(sampleNumbers, doubleNumber)); 
console.log("Squared:", applyOperation(sampleNumbers, squareNumber)); 