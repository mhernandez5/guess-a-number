let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
    if (e.keyCode == 13){
        run(e);
    }
});

userNum.focus();

let counter = 0;

function run () {
   document.getElementById("paragraph").style.backgroundColor = "pink";
   document.getElementById("paragraph").style.color = "black";
   document.getElementById("paragraph").style.padding = "20px";
   randomNum();
   userNumber();
   compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "turquoise";
    x.style.color = "black";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundColor = "turquoise";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
}


function compareNumbers() { 
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");

    if (a!= b) {
        z.innerHTML = "Numbers are not the same. Computer got "   +  b  +  ", and user got "   +  a;
        z.style.color = "white";
        z.style.backgroundColor = " turquoise";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        counter++
        c.innerHTML =  "You have tried " + counter + " times."
        c.style.color = "white";
        c.style.backgroundColor = " turquoise";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        document.querySelector("body").style.backgroundColor = "turquoise"


    }else if (a == b) {
        z.innerHTML = "Numbers are the same. Computer got " +  b  +  ", and user got "   +  a ;
        z.style.color = "white";
        z.style.backgroundColor = " #00a37d";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "you have tried "
 + counter + "times to get it rigth"
        c.style.color = "white";
        c.style.backgroundColor = "turquoise";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        counter = 0;
        document.querySelector("body").style.backgroundColor = "turquoise"
    }

    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}
