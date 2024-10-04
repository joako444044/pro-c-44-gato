var turno = "o";
var wining_moves = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const buttons = document.querySelectorAll("#red button");
console.log(buttons);
function marcar(obj){
if (turno != "ganaste"){
if (obj.innerHTML == ""){
obj.innerHTML = turno;
verify();
if (turno == "o"){
    turno = "x"
}else if ( turno == "x"){
    turno = "o"
}
}
}
}

function clean(){
console.log(buttons);
buttons.forEach(boton =>{
boton.innerHTML = "";
boton.style.border = "1px solid black"
turno = "o";
})
}

function verify(){
    movements = Array.prototype.map.call(buttons, (btn)=>  btn.innerHTML);
    wining_moves.forEach(element=>{
        if (movements[element[0]] == turno && movements[element[1]] == turno && movements[element[2]] == turno){
            console.log("gano el " + turno);
            buttons[element[0]].style.border = "7px solid green"
            buttons[element[1]].style.border = "7px solid green"
            buttons[element[2]].style.border = "7px solid green"
            turno = "ganaste"
        }
    })

}
