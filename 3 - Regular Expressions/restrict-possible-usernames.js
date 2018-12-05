"let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+?\d*/i; // my solution
let userCheck = /^[a-z]{2,}\d*$/i;
let result = userCheck.test(username);