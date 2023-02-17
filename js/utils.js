function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function formatToLocaleString(number, language="en", country="US", currency='USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}
function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}

const isFactor = (input1, input2) => {
    if (input1 === 0){
        return false
    } if (!isNumericAndNotNaN(input1) || (!isNumericAndNotNaN(input1))){
        return false;
    } else {
        return (input2 % input1 === 0)
    }
}

const findLongestString = (longInput1, longInput2) => {
    if (typeof longInput1 !== "string" && typeof longInput2 !== "string") return '';
    if (typeof longInput1 !== "string" && typeof longInput2 === "string") return longInput2;
    if (typeof longInput1 === "string" && typeof longInput2 !== "string") return longInput1;
    if (longInput1.length > longInput2.length){
        return longInput1;
    } else{
        return longInput2;
    }

}

const isTypeMatch = (typeInput1, typeInput2) => {
    if ((typeof typeInput1 || typeof typeInput2) === null){
        return false
    } else {
        return (typeof typeInput1) == (typeof typeInput2)
    }
}

const calcCube = (cubeInput) => {
    if ((typeof cubeInput) === (null || "string")) {
        return 0
    } else {
        return cubeInput * cubeInput * cubeInput
    }
}

const calcAbs = (absInput) => {
    if (absInput > 0) {
        return absInput * 1
    } else if (absInput < 0) {
        return absInput * -1
    } else {
        return 0
    }
}

const isNot = (falseInput) => {
    if (falseInput !== false) {
        return false;
    } else {
        return true;
    }
}

const isEqual = (identicalInput1, identicalInput2) => {
    return identicalInput1 === identicalInput2
}

const isEqualNumber = (equalInput1, equalInput2) => {
    if (equalInput1 || equalInput2 === isNaN(1)) {
        return equalInput1 === equalInput2
    } else {
        return false
    }
}

const isLessThan = (lessInput1, lessInput2) => {
    return lessInput1 < lessInput2
}

const isGreaterThan = (greaterInput1, greaterInput2) => {
    return greaterInput1 > greaterInput2
}