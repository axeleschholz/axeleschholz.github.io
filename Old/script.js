function CheckPassword(inputtxt) {
  var passw = -1783174268;
  var hashed = hashpass(inputtxt);
  if (hashed == passw) {
    window.location.href = "demons";
  }
}

function hashpass(string) {
  //set variable hash as 0
  var hash = 732;
  // if the length of the string is 0, return 0
  if (string.length == 0) return hash;
  for (i = 0; i < string.length; i++) {
    ch = string.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
