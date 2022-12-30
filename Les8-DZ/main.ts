//*********    */ Task1   ************

let city: string;
city = "Kyiv";
city = "Lviv";
let address: string = city;
console.log(address);

//

//*********    */ Task2   ************

let a: number = Number(prompt("write number"));
if (a == 0) {
  console.log(a);
} else if (a % 2 == 0) {
  console.log("число парне");
} else {
  console.log("число непарне");
}

//

//*********    */ Task3   ************

function sum(...arg): number {
  let num: number = 0;
  arg.forEach(function (element): void {
    if (element > num) {
      num = element;
    }
  });
  return num;
}
console.log(sum(1, 2, 3, 4));

//

//*********    */ Task4   ************

function getSqrt(number?): void {
  if (number <= 0) {
    console.log("write number bigger then 0");
  } else if (typeof number === "string") {
    console.log("write number");
  } else if (typeof number === "number") {
    console.log(Math.sqrt(number));
  } else {
    console.log("write number ");
  }
}
getSqrt(0);

//

//*********    */ Task5   ************

let getS = (sel) => document.querySelector(sel);
let Bwords: string = "";
let newBwords: Array<string> = [];
let textareaWords: string = "";
let textareaArray: Array<string> = [];

getS(".add-btn").addEventListener("click", function () {
  if (getS(".inp-text").value == "") {
    return alert("write word");
  }
  Bwords += getS(".inp-text").value + " ";
  getS(".inp-text").value = "";
  newBwords = Bwords.split(" ");
  getS("p").innerHTML = `<span>Bad words:</span> ${Bwords}`;
});
getS(".reset-btn").addEventListener("click", function (): void {
  Bwords = "";
  newBwords = [];
  getS(".inp-text").value = "";
  getS("p").innerHTML = `<span>Bad words:</span>`;
  getS("textarea").value = "";
});

getS(".bottom-btn").addEventListener("click", function () {
  textareaWords = getS("textarea").value;
  textareaArray = textareaWords.split(" ");
  if (getS("textarea").value == "") {
    return alert("write text");
  }
  for (let i: number = 0; i < textareaArray.length; i++) {
    let a: string = textareaArray[i];
    for (let i: number = 0; i < newBwords.length; i++) {
      if (a == newBwords[i]) {
        let b: number = a.length;
        a = "";
        for (let i: number = 0; i < b; i++) {
          a += "*";
        }
      }
    }
    textareaArray[i] = a;
  }
  let n: string = textareaArray.join();
  getS("textarea").value = n.replace(/,+/g, " ");
});
