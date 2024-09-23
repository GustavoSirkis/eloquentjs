// Write a loop that makes seven calls to conole.log to output the followin triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// It may be useful to know that you can find the length of a string by writing .length after it.

  let str = '#'
  for(let i = 0; i < 7 ; i++) {
    console.log(str);
    str += '#';
  }
  
