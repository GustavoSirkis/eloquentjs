// The previous chapter introduced the standard function Math.min that returns its 
// smallest argument. We can write a function like that ourselves now. Define the 
// function min that takes two arguments and returns their minimum.

// Hints

// If you have trouble putting braces and parentheses in the right place to 
// get a valid function definition, start by copying one of the examples in 
// this chapter and modifying it.

// A function may contain multiple return statements.


function min(a, b) {
  if(a < b) {
    return a;
  } 
    return b;
}

console.log(min(30, 10));