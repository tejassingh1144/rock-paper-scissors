function printResult(someText){
	const div=document.createElement('div');
	const divChild1=document.createElement('div');
	const divChild2=document.createElement('div');
	const reference= document.querySelector(`#${resultScreen.id}>#ref`);
	divChild1.classList.add('left','leftSide');
	divChild1.textContent=someText;
	divChild2.classList.add('right','rightSide');
	divChild2.textContent=someText;
	div.style.display='flex';
	div.appendChild(divChild1);
	div.appendChild(divChild2);
	resultScreen.insertBefore(div,reference.nextSibling);
	
}
function addLifes(user,j,playerColor) {
	for (i = 0; i < 5; i++) {
		const life = document.createElement('div');
		const referenceHeart = document.querySelector(`#${user.id}>#ref`);
		life.setAttribute('id', 'life');
		user.insertBefore(life, referenceHeart.nextSibling);
		if(j==0){
			if(playerColor=='white'){
				life.style.backgroundColor='black';
			}
			else{
				life.style.backgroundColor='white';
			}
		}
		else{
			if(playerColor=='white'){
				life.style.backgroundColor='white';
			}
			else{
				life.style.backgroundColor='black';
			}
		}
	}
}

function removeLife(user) {
	const life = document.querySelector(`#${user.id}>#life`);
	user.removeChild(life);
}

function playRound() {
	playerMove = this.id;
	generateMove = () => Math.floor((Math.random() * 3));//rock=0,paper=1,scissor=2
	computerMove = generateMove();
	if (playerMove == "rock") {
		if (computerMove == 0) {
			result = "DRAW!!! Try again.";
		}
		else if (computerMove == 1) {
			result = "OOF!! You lose.";
		}
		else {
			result = "WOAH!! You won.";
		}
	}
	else if (playerMove == "paper") {
		if (computerMove == 0) {
			result = "WOAH!! You won.";
		}
		else if (computerMove == 1) {
			result = "DRAW!! Try again.";
		}
		else {
			result = "OOF!! You lose.";
		}
	}
	else {
		if (computerMove == 0) {
			result = "OOF!! You lose.";
		}
		else if (computerMove == 1) {
			result = "WOAH!! You won.";
		}
		else {
			result = "DRAW!! Try again.";
		}
	}
	printResult(result);
	if (result == 'OOF!! You lose.') removeLife(healthBar[0]);
	else if (result == 'WOAH!! You won.') removeLife(healthBar[1]);
	if(healthBar[0].children.length==2||healthBar[1].children.length==2){
		document.querySelector('body').style.display='none';
	}
}
function transition() {
	this.classList.add('transition');
}
function removeTransition() {
	this.classList.remove('transition');
}
function fillColor(player) {
	const rightSide = document.querySelectorAll('.rightSide');
	const leftSide = document.querySelectorAll('.leftSide');
	for (let i = 0; i < leftSide.length; i++) {
		leftSide[i].classList.add(`${player}`);
		if (player == 'white') {
			rightSide[i].classList.add('black');
		}
		else {
			rightSide[i].classList.add('white');
		}
	}
}

let playerMove, computerMove;
const healthBar = document.querySelectorAll('.healthBar');
const buttons = document.querySelectorAll('.buttons')
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const playerName=document.querySelector('#player');
const resultScreen=document.querySelector('#resultScreen');
const myName=prompt('What is your name?');
let playerColor = prompt('Which color do you choose: white or black?');
playerName.textContent=`${myName.toUpperCase()}:`
playerColor=playerColor.toLocaleLowerCase();
fillColor(playerColor);
for (let i = 0; i < 2; i++) {
	addLifes(healthBar[i],i,playerColor);
}
console.log(healthBar[1].children.length);
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('mouseover', transition);
	buttons[i].addEventListener('mouseout', removeTransition);
}
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissor.addEventListener('click', playRound);
