var turno = "o";

var wining_moves = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
var DataBase = firebase.database();
DataBase.ref("/gato").on("value", (val)=>{
if (val.val().game_progress){
 for( i = 0; i <= 8; i++){
    console.log(val.val().game_progress[i]);
    
    console.log(i)
    buttons[i].innerHTML = val.val().game_progress[i]
 }
 turno = val.val().player;
 verify(val.val().game_progress,turno);
}else{
    clean();
}
})

const buttons = document.querySelectorAll("#red button");
console.log(buttons);
function marcar(obj){

if (turno != "ganaste"){
if (obj.innerHTML == ""){
obj.innerHTML = turno;
movements = Array.prototype.map.call(buttons, (btn)=>  btn.innerHTML);
DataBase.ref("/gato").update({game_progress:movements});
verify(movements,turno);
if (turno == "o"){
    turno = "x"
}else if ( turno == "x"){
    turno = "o"
}
DataBase.ref("/gato").update({player:turno});
}
}
}

function clean(){
console.log(buttons);
buttons.forEach(boton =>{
boton.innerHTML = "";
boton.style.border = "1px solid black"
turno = "o";
DataBase.ref("/gato").update({game_progress:null, player:"o"});
})
}

function verify(movements,turno1){

    wining_moves.forEach(element=>{
        if (movements[element[0]] == turno1 && movements[element[1]] == turno1 && movements[element[2]] == turno1){
            console.log("gano el " + turno1);
            buttons[element[0]].style.border = "7px solid green"
            buttons[element[1]].style.border = "7px solid green"
            buttons[element[2]].style.border = "7px solid green"
            turno = "ganaste"
        }
    })

}
