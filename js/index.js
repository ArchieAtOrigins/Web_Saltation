function repeatStrNum(str, num) {
  while (num > 0) {
    var newStr = "";
    newStr += str;
    num--;
    document.getElementById("funckySpot").innerHTML = newStr;
    console.log(newStr);
  }
  return newStr;
}
repeatStrNum("nobugs", 3);