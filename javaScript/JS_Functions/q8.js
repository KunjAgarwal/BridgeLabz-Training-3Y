Array.prototype.myMap = function (callback) {
    const mappedArray = [];
    
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            mappedArray.push(callback(this[i], i, this));
        }
    }
    
    return mappedArray;
};

const numbers = [1, 2, 3];
const doubled = numbers.myMap((num) => num * 2);

console.log(doubled);