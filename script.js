function addHearts(user,num=5){
	for(i=0;i<num-1;i++){
		const heart=document.createElement('img');
		const referenceHeart=document.querySelector(`.${user.className}>#heart`);
		heart.setAttribute('src','./files/images/heart.png');
		heart.setAttribute('id','heart');
		user.insertBefore(heart,referenceHeart.nextSibling);
	}
}	

function removeHeart(user){
	const heart=document.querySelector(`.${user.className}>#heart`);
	user.removeChild(heart);
}

function playRound(){
	playerMove=this.id;
	generateMove= () => Math.floor((Math.random()*3));//rock==0,paper==1,sword==3
	computerMove=generateMove();	
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
	if(result=="WOAH!! You won.") removeHeart(computerBar);
	else if(result=='OOF!! You lose.') removeHeart(playerBar);

	resultScreen.textContent=result;
}

let playerMove,computerMove;
const resultScreen=document.querySelector('#resultScreen');
const playerBar=document.querySelector('.left-container');
const computerBar=document.querySelector('.right-container');
console.log(playerBar.className);
addHearts(playerBar);
addHearts(computerBar);

const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const sword=document.querySelector('#sword');
rock.addEventListener('click',playRound);
paper.addEventListener('click',playRound);
sword.addEventListener('click',playRound);
