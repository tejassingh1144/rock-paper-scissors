/* take user's action(rock,paper,scissor)
 * generate computers action(rock,paper,scissor)
 * compute who won
 * display the answer*/

let playerMove,computerMove;
let score=0;
let resultScreen=document.querySelector('#resultScreen');
let scoreScreen=document.querySelector('#scoreScreen');
function playRound(playerMove,computerMove){
	if(playerMove=="rock"){
		if(computerMove==0){
			result="DRAW!!! Try again.";
		}
		else if(computerMove==1){
			result="OOF!! You lose.";
		}
		else{
			result="WOAH!! You won.";
		}
	}
	else if(playerMove=="paper"){
		if(computerMove==0){
			result="WOAH!! You won.";
		}
		else if(computerMove==1){
			result="DRAW!! Try again.";
		}
		else{
			result="OOF!! You lose.";
		}
	}
	else{
		if(computerMove==0){
			result="OOF!! You lose.";
		}
		else if(computerMove==1){
			result="WOAH!! You won.";
		}
		else{
			result="DRAW!! Try again.";
		}
	}
	if(result=="WOAH!! You won.") score++;
	resultScreen.textContent=result;
	if(score==5) console.log('You Won the game');
	scoreScreen.textContent=score;
}
function playGame(){			
	playerMove=this.id;
	computerMove= () => Math.floor((Math.random()*3));//rock==0,paper==1,scissors==3
	playRound(playerMove,computerMove());
}
const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissor=document.querySelector('#scissor');
rock.addEventListener('click',playGame);
paper.addEventListener('click',playGame);
scissor.addEventListener('click',playGame);
