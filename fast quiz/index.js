let chooseCont = document.createElement('div');
chooseCont.className = 'chooseCont';
document.body.appendChild(chooseCont);

let form = document.createElement('form');
chooseCont.appendChild(form);

let label = document.createElement('label');
label.innerText = 'Choose the Time: ';
label.setAttribute('for', 'timer');
form.appendChild(label);

let select = document.createElement('select');
select.id = 'timer';
form.appendChild(select);

let option1 = document.createElement('option');
let option2 = document.createElement('option');
let option3 = document.createElement('option');

option1.innerText = '10 sec';
option2.innerText = '30 sec';
option3.innerText = '60 sec';

option1.setAttribute('value', '10');
option2.setAttribute('value', '30');
option3.setAttribute('value', '60');


select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);


let botton = document.createElement('div');
botton.className = 'botton';
botton.innerText = `let's start !`
chooseCont.appendChild(botton);

function theQuiz() {
    let num1 = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    let num2 = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    let variable = false;
    let contanier = document.createElement("div");
    let bottomContanier = document.createElement("div");
    let calcNum = document.createElement("div");
    let calcNumText = document.createTextNode(`${num1} + ${num2} =`);
    let sumInput = document.createElement("input");
    let btn = document.createElement("div");
    btn.innerText = "Next";
    btn.className = "btn";
    sumInput.setAttribute("type", "number");
    contanier.className = "contanier";
    bottomContanier.className = "btmContainer";
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
        if (+sumInput.value == num1 + num2) {
          i.className = "fa-solid fa-check";
          bottomContanier.appendChild(i);
        }
        // if flase
        else {
          i.className = "fa-solid fa-x";
          bottomContanier.appendChild(i);
          let flaseAnswar = document.createElement("h2");
          flaseAnswar.innerText = `The Right answar is: ${num1 + num2}`;
          document.body.appendChild(flaseAnswar);
        }
        variable = true;
      } else {
        location.reload();
      }
    };
    
    
}






function startPersistentTimer(durationInSeconds, displayElementId) {
  let startTime = parseInt(localStorage.getItem("timerStartTime") || "0");
  let elapsedTime = parseInt(localStorage.getItem("timerElapsedTime") || "0");
  let timerInterval;
  const displayElement = document.getElementById(displayElementId);

  function updateDisplay() {
    const remainingTime = Math.max(0, durationInSeconds - elapsedTime);
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    displayElement.textContent = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      localStorage.removeItem("timerStartTime");
      localStorage.removeItem("timerElapsedTime");
    }
  }

  function startTimer() {
    if (startTime === 0) {
      startTime = Math.floor(Date.now() / 1000);
      localStorage.setItem("timerStartTime", startTime);
    }
    timerInterval = setInterval(() => {
      elapsedTime = Math.floor(Date.now() / 1000) - startTime;
      localStorage.setItem("timerElapsedTime", elapsedTime);
      updateDisplay();
    }, 1000);
  }

  updateDisplay();
  if (elapsedTime < durationInSeconds) {
    startTimer();
  }
}
let displayTime = document.createElement("h2");
document.body.appendChild(displayTime);
displayTime.id = "distimer";

botton.onclick = function () {
    if (window.sessionStorage.getItem('starting') != 0) {
        chooseCont.remove();
        let startTimer = document.createElement('h2');
        let i = 3;
        let invertal = setInterval(function () {
            if (i == 0) {
                startTimer.innerText = '';
                clearInterval(invertal);
            }
            else {
                startTimer.innerText = i;
                document.body.appendChild(startTimer);
                i -= 1;
            }
            
        }, 1000)
        let variable = window.sessionStorage.setItem("starting", 0);
      setTimeout(function () {
            window.sessionStorage.setItem('timer', new Date().getSeconds())
            theQuiz();
            
            startPersistentTimer(select.value, 'distimer');
      }, 4000)
    }
}



if (window.sessionStorage.getItem("starting") == 0) {
  chooseCont.remove();
  theQuiz();
  startPersistentTimer(select.value, "distimer");
  
}
