/* take user's action(rock,paper,scissor)
 * generate computers action(rock,paper,scissor)
 * compute who won
 * display the answer*/

let playerMove,computerMove;			
function playRound(playerMove,computerMove){
	if(playerMove=="rock"){
		if(computerMove==0){
			console.log("DRAW!!! Try again.");
		}
		else if(computerMove==1){
			console.log("OOF!! You lose.");
		}
		else{
			console.log("WOAH!! You won.");
		}
	}
	else if(playerMove=="paper"){
		if(computerMove==0){
			console.log("WOAH!! You won.");
		}
		else if(computerMove==1){
			console.log("DRAW!! Try again.");
		}
		else{
			console.log("OOF!! You lose.");
		}
	}
	else{
		if(computerMove==0){
			console.log("OOF!! You lose.");
		}
		else if(computerMove==1){
			console.log("WOAH!! You won.");
		}
		else{
			console.log("DRAW!! Try again.");
		}
	}
}
function playGame(){			
	playerMove=prompt("What is your move: Rock, Paper or Scissor?");

	/* Math.random generates from [0-1)
	* (Math.random)*3 generates from [0-3)
	* Math.floor((Math.random())*3) generates from [0-2]*/

	computerMove= () => Math.floor((Math.random()*3));//rock==0,paper==1,scissors==3
	playRound(playerMove,computerMove());
}
for(i=0;i<5;i++){
	playGame();
}
