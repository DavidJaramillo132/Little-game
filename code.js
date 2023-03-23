let tiempo = prompt("¿Cuanto tiempo quieres tener?")
let necesario = prompt("¿A cuantos puntos quieres llegar?")

const player = document.getElementById("player");
player.addEventListener("click",addPoints);

const totalPoints =  document.getElementById("points");
const duration = document.getElementById("time");
const winLose = document.getElementById("win");

let time = tiempo;
let points = 0;
let need = necesario;

function addPoints(){
    points++;
    totalPoints.textContent = `Total score: ${points}/${need}`;
    let ranNum = Math.round(Math.random()*448);
    let ranNum2 = Math.round(Math.random()*660);

    player.style.marginTop = ranNum + "px";
    player.style.marginLeft = ranNum2 + "px";


}



const subtractTime = () =>{
    if(time >= 1){
        time--;
        duration.innerHTML = `Time: ${time}`;
    }
    if(points == need) {
        winLose.innerHTML = "You win";
        winLose.style.color = "blue";
        Stop();
        clearInterval(subtractTime);

    } 
    if(time === 0){
        winLose.innerHTML = "You lose";
        winLose.style.color = "red";
        Stop();
        clearInterval(subtractTime);
    };
         
}

 setInterval(subtractTime, 1000)

   


function Stop(){
    player.id = "da";
    duration.innerHTML = "Congratulations :)";
 }