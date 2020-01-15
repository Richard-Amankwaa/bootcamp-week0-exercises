/**
 * Part 1:
 *    What will print and why?
 *    "1"
 *    "2"
 *    "null"
 *      Right after a is declared the code prints it on the screen. The function that is 
 * called afterward y declare its own variable aslo called a and prints it. x does the same.
 *    What will change if we delete line 15? Why?
 *    only the first a's value '1' will be printed because y and x aren't there to change the value
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = (n) => {
  let a = n;
  console.log(a);
}

const y = () => {
  let a = 2;
  console.log(a);
  x(n);
}

let a = 1;
console.log(a);
y();
