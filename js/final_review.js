var btn = document.getElementsByClassName("v102_1634");
var btn2 = document.getElementsByClassName("v102_1652");
var btn3 = document.getElementsByClassName("v102_1635");
var btn4 = document.getElementsByClassName("v102_1636");
var btn5 = document.getElementsByClassName("v102_1637");

function handleClick(event){
    console.log(event.target);

    console.log(event.target.classList);

    if(event.target.classList[1] === 'clicked'){
        event.target.classList.remove('clicked');
    } 
    else{
        event.target.classList.add('clicked');
    }
}

function init1(){
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", handleClick);
      }
}

function init2(){
    for (var i = 0; i < btn2.length; i++) {
        btn2[i].addEventListener("click", handleClick);
      }
}

function init3(){
    for (var i = 0; i < btn3.length; i++) {
        btn3[i].addEventListener("click", handleClick);
      }
}

function init4(){
    for (var i = 0; i < btn4.length; i++) {
        btn4[i].addEventListener("click", handleClick);
      }
}

function init5(){
    for (var i = 0; i < btn5.length; i++) {
        btn5[i].addEventListener("click", handleClick);
      }
}


init1();
init2();
init3();
init4();
init5();