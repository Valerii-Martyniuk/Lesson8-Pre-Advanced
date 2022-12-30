//*********    */ Task1   ************
let city;
city = "Kyiv";
city = "Lviv";
let address = city;
console.log(address);
//
//*********    */ Task2   ************
let a = Number(prompt("write number"));
if (a == 0) {
    console.log(a);
}
else if (a % 2 == 0) {
    console.log("число парне");
}
else {
    console.log("число непарне");
}
//
//*********    */ Task3   ************
function sum(...arg) {
    let num = 0;
    arg.forEach(function (element) {
        if (element > num) {
            num = element;
        }
    });
    return num;
}
console.log(sum(1, 2, 3, 4));
//
//*********    */ Task4   ************
function getSqrt(number) {
    if (number <= 0) {
        console.log("write number bigger then 0");
    }
    else if (typeof number === "string") {
        console.log("write number");
    }
    else if (typeof number === "number") {
        console.log(Math.sqrt(number));
    }
    else {
        console.log("write number ");
    }
}
getSqrt(0);
//
//*********    */ Task5   ************
let getS = (sel) => document.querySelector(sel);
let Bwords = "";
let newBwords = [];
let textareaWords = "";
let textareaArray = [];
getS(".add-btn").addEventListener("click", function () {
    if (getS(".inp-text").value == "") {
        return alert("write word");
    }
    Bwords += getS(".inp-text").value + " ";
    getS(".inp-text").value = "";
    newBwords = Bwords.split(" ");
    getS("p").innerHTML = `<span>Bad words:</span> ${Bwords}`;
});
getS(".reset-btn").addEventListener("click", function () {
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
    for (let i = 0; i < textareaArray.length; i++) {
        let a = textareaArray[i];
        for (let i = 0; i < newBwords.length; i++) {
            if (a == newBwords[i]) {
                let b = a.length;
                a = "";
                for (let i = 0; i < b; i++) {
                    a += "*";
                }
            }
        }
        textareaArray[i] = a;
    }
    let n = textareaArray.join();
    getS("textarea").value = n.replace(/,+/g, " ");
});
