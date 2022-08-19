var btn = document.getElementsByClassName("v104_2145");
var btn2 = document.getElementsByClassName("v104_2146");

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

init1();
init2();