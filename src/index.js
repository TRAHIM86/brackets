module.exports = function check(str, bracketsConfig) {

  if (str.length % 2 !==0) {return false}
  
  let pairForBrac = Object.fromEntries(bracketsConfig);

  let pairForBracReverse = {};

  Object.entries(pairForBrac).forEach(([key, value]) => {
  pairForBracReverse[value] = key;
})
  
  let typesOpenBrac = Object.values(pairForBracReverse);
  
  let bracStack = [];

    for (let i = 0; i < str.length; i += 1) {

    if (str[i] === bracStack[bracStack.length - 1] && str[i] === pairForBrac[str[i]]) {
      bracStack.pop();
    } else  if (typesOpenBrac.includes(str[i])) {
      bracStack.push(str[i]);
      //console.log(bracStack)
    } else {
      if (bracStack.length === 0) {
        return false;
      }
      if (pairForBracReverse[str[i]] === bracStack[bracStack.length - 1]) {
        
        bracStack.pop();
      } else {
        return false;
      }
    }
  } return bracStack.length === 0;
}