var btn = document.getElementsByClassName("btn");

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

function init(){
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", handleClick);
      }
}

init();