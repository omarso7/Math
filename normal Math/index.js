let num1 = Math.floor(Math.random() * (50 - 10 + 1) + 10);
let num2 = Math.floor(Math.random() * (50 - 10 + 1) + 10);
let variable = false;
let contanier = document.createElement('div');
let bottomContanier = document.createElement('div');
let calcNum = document.createElement('div');
let calcNumText = document.createTextNode(`${num1} + ${num2} =`);
let sumInput = document.createElement('input');
let btn = document.createElement('div');
btn.innerText = 'Next';
btn.className = 'btn';
sumInput.setAttribute('type', 'number');
contanier.className = 'contanier';
bottomContanier.className = 'btmContainer';
document.body.appendChild(contanier);
contanier.appendChild(calcNum);
contanier.appendChild(sumInput);
document.body.appendChild(bottomContanier);
bottomContanier.appendChild(btn);
calcNum.appendChild(calcNumText);
let i = document.createElement("i");
btn.onclick = function () {
    if (variable == false) {
        // if true
        if (+sumInput.value == (num1 + num2)) {
            i.className = 'fa-solid fa-check';
            bottomContanier.appendChild(i);
        }
        // if flase
        else {
            i.className ='fa-solid fa-x'
            bottomContanier.appendChild(i);
            let flaseAnswar = document.createElement('h2');
            flaseAnswar.innerText = `The Right answar is: ${num1 + num2}`
            document.body.appendChild(flaseAnswar);
        }
        variable = true;
    }
    else {
        location.reload();
    }
}