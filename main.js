function InsertChar(char) {
  document.getElementById("result").value += char;
}

function ClearResult() {
  document.getElementById("result").value = "";
}

function DeleteChar() {
  let result = document.getElementById("result").value;
  document.getElementById("result").value = result.slice(0, -1);
}

// calculating result

function ResultCalc() {
  let result = document.getElementById("result").value;
  let answer = eval(result);
  document.getElementById("result").value = answer;
}

function Enter() {
  document.getElementById("result").addEventListener("keyup", () => {
    ResultCalc();
    console.log("everythings working...");
  });
}
document.getElementById("mn").style.display == "block";
document.getElementById("cl").addEventListener("click", () => {
  document.getElementById("mn").style.display = "none";
  if (document.getElementById("mn").style.display == "none") {
    document.getElementById("mn").style.display == "block";
    document.getElementById("mn").style.transition = ".3s ease";
    document.querySelector("body").style.background = "none";
  }
});




const theme = document.getElementById('theme');
const colorText = 'white';












// const themeColor = 'white';
// const textColor = 'white';
// const backTheme = document.querySelector('body').style.background = 'block';


// function ToggTheme() {
//   if (backTheme.style.display === 'block') {
//     backTheme.style.display = 'none';
//   } else {
//     console.log('went');
//   }
// }






// calling functions

Enter();
ResultCalc();
InsertChar();
DeleteChar();
ClearResult();






