var validateForm = () => {
  var search = document.getElementById("search").value;
  let regex = new RegExp("^[a-zA-Z0-9_]{1,}[a-zA-Z]+[0-9]*$");

  if (!regex.test(search)) {
    alert("Only characters A-Z, a-z and '_' are  accepted.");
    document.getElementById("search").focus();
    return false;
  }
  return true;
};

const validateLoginForm = () => {
  var string1 = document.getElementById("capt").value;
  var string2 = document.getElementById("textinput").value;
  if (string1 !== string2) {
    alert("Please enter a valid captcha");
    return false;
  }
  var username = document.getElementById("c-username").value;
  let regex = new RegExp("^[a-zA-Z0-9_]{3,}[a-zA-Z]+[0-9]*$");

  if (!regex.test(username)) {
    alert("Only characters A-Z, a-z and '_' are  accepted.");
    document.getElementById("c-username").focus();
    return false;
  }
  return true;
};

function recap() {
  var alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var a = alpha[Math.floor(Math.random() * 62)];
  var b = alpha[Math.floor(Math.random() * 62)];
  var c = alpha[Math.floor(Math.random() * 62)];
  var d = alpha[Math.floor(Math.random() * 62)];
  var e = alpha[Math.floor(Math.random() * 62)];
  var f = alpha[Math.floor(Math.random() * 62)];

  var sum = a + b + c + d + e + f;

  document.getElementById("capt").value = sum;
}

