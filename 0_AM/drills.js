
const assert = require("assert");

// Feel free to look things up online!

// TODO - write a function which converts a multi-word string into an array of words
const tokenize = str => {
    return str.split(" ")
};


// TODO - write a function which reverses the string
const reverse = str => {
    return str.split("").reverse().join("")
    

};

// TODO - write a function which returns the inputted array without duplicate elements
const uniqueOnes = arr => {
    const set = new Set(arr)
    
    return [...set]
};

// TODO - write a function which returns the factorial of a positive integer
const factorial = num => {
    let factorial = 1;
    while (num > 0) {
        factorial = factorial * num;
        num --;
    }
    return factorial
};

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
    if (arr1.length === arr2.length){
        let arr3 = []
        for (i = 0; i < arr1.length; i++){
            const tmp = [arr1[i], arr2[i]];
            arr3.push(tmp);
        }
        return arr3
    }else{
        return -1
    }
};

// TODO - Write a function which does the opposite of `zip()`
const unzip = arr => {
    let arr1 = [];
    let arr2 = [];
    for (i = 0; i < arr.length; i++){
        arr1.push(arr[i][0]);
        arr2.push(arr[i][1]);
    }
    return arr1.concat(arr2)
};

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {
    let shifted = str;
    const original = str;
    for (i = 0; i < str.length; i++){
        let changedChar = (i + num) % 5
        shifted = shifted.substring(0, changedChar).concat(str[i] + shifted.substring(changedChar + 1))
    }
    return shifted
};

// TODO - write a function which returns the current date in the following format:
// "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
const announceDate = () => {
    const month = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September",
             "October", "November", "December"];
    const today = new Date();
    const day = today.getDate().toString();
    let suffix = "th";
    
    const fstDigit = day[day.length - 1];
    // decides what suffix (e.g. 1st, 3rd, 4th) the date needs
    if (fstDigit === '1'){
        suffix = "st";
    }else if(fstDigit === '2'){
        suffix = "nd";
    }else if(fstDigit === '3'){
        suffix = "rd";
    }

    let hour = today.getHours()
    // pad number with zeros so it is two digits long
    const minute = today.getMinutes().toString().padStart(2, '0');
    let when;
    // check AM or PM
    if (hour <= 12 || hour === 24){
        when = "AM";
    }else{
        when = "PM";
    }
    hour = hour % 12;
    if (hour === 0){
        hour = 12;
    }
    return `Today's date is ${month[today.getMonth()]} ${day}${suffix}, ${today.getFullYear()}. It is ${hour}:${minute} ${when}.`
};

// Write tests here:
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
console.log(tokenize("Hello World!"));
assert(reverse("Hello World!") === "!dlroW olleH");
console.log(uniqueOnes([1, 1, 2, 43, 3, 5, 7, 43, 43, 56, 3]));
assert(factorial(5) === 120);
console.log(zip([1, 2, 3], [5, 3, 1]));
console.log(unzip([[1, 5], [2, 3], [3, 1]]));
assert(shiftRight("Hello", 3) === "lloHe");
console.log(announceDate());

