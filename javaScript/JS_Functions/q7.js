const makeMultiplier = (multiplier) => {
    return (number) => {
        return number * multiplier;
    };
};

const triple = makeMultiplier(3);
console.log(triple(5));