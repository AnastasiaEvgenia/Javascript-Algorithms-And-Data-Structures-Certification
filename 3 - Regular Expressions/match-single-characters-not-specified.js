let quoteSample =  "3 blind mice. ";
let myRegex = /[^aeiou/d]/gi; // /[^aeiou1-9]/ig this works too
let result = quoteSample.match(myRegex);