function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result += "I " +myVerb+ " with the " +myAdjective+ " snoozy " +myNoun+ " very " +myAdverb+ ".";
  // var result = "My "+myAdjective+" "+myNoun+" "+myVerb+"s very "+myAdverb+".";
  // Your code above this line
  return result;
}
// Change the words here to test your function
wordBlanks("cat", "little", "hit", "slowly");