function roll(){// player 1
var randomNumber1 = Math.random()
var randomNumber1 = Math.floor((randomNumber1*6)) + 1
console.log(randomNumber1)

 if (randomNumber1 === 1){
    
    document.querySelector(".dice .img1 ").setAttribute("src","dice1.png")

}
 else if (randomNumber1 === 2){

        document.querySelector(".dice .img1 ").setAttribute("src","dice2.png")

 }
 else if (randomNumber1 === 3){

        document.querySelector(".dice .img1 ").setAttribute("src","dice3.png")

 }

 else if (randomNumber1 === 4){

        document.querySelector(".dice .img1 ").setAttribute("src","dice4.png")

 }

 else if (randomNumber1 === 5){

        document.querySelector(".dice .img1 ").setAttribute("src","dice5.png")

 }

 else{
            document.querySelector(".dice .img1 ").setAttribute("src","dice6.png")

 }

//player 2

var randomNumber2 = Math.random()
var randomNumber2 = Math.floor((randomNumber2*6)) + 1
console.log(randomNumber2)

 if (randomNumber2 === 1){
    
    document.querySelector(".dice .img2 ").setAttribute("src","dice1.png")

}
 else if (randomNumber2 === 2){

        document.querySelector(".dice .img2 ").setAttribute("src","dice2.png")

 }
 else if (randomNumber2 === 3){

        document.querySelector(".dice .img2 ").setAttribute("src","dice3.png")

 }

 else if (randomNumber2 === 4){

        document.querySelector(".dice .img2 ").setAttribute("src","dice4.png")

 }

 else if (randomNumber2 === 5){

        document.querySelector(".dice .img2 ").setAttribute("src","dice5.png")

 }

 else{
            document.querySelector(".dice .img2 ").setAttribute("src","dice6.png")

 }

 //winner code

 if (randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player-1 won"
 }

 else if (randomNumber1 === randomNumber2){
        document.querySelector(".container h1").innerHTML = "Game Tied"

 }

 else{

            document.querySelector(".container h1").innerHTML = "Player-2 Won"
            


 }
}

document.querySelector(".btn button").addEventListener("click",roll)