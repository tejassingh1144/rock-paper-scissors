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
	fillColor(divChild1);
	fillColor(divChild2);
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
		showThisHideRest(again);
	}
}
function transition() {
	console.log(this);
	this.classList.add('transition');
}
function removeTransition() {
	this.classList.remove('transition');
}
function positionCheck(obj){
	let classArr=Array.from(obj.classList);
	for(let i=0;i<classArr.length;i++){
		if(classArr[i]=='leftSide'){
			return 'leftSide';
		}
		else if(classArr[i]=='rightSide'){
			return 'rightSide';
		}
	}
	return none;
}
function fillColor(obj){
	switch(positionCheck(obj)){
		case 'leftSide':
			obj.classList.add(playerColor);
			break;
		case 'rightSide':
			obj.classList.add(computerColor);
			break;
	}
	
}
function assignComputerColor(playerColor){
	if(playerColor=='white'){
		return 'black';
	}
	else{
		return 'white';
	}
}
function storeName(){
	const playerName=document.querySelector('#player');
	const myName=document.getElementById('name').value;
	playerName.textContent=`${myName.toUpperCase()}:`
	showThisHideRest(colorBox);
}
function storeAndFillColor(){
	playerColor=document.getElementById('color').value;
	playerColor=playerColor.toLocaleLowerCase();
	computerColor=assignComputerColor(playerColor);
	showThisHideRest(mainPage);
	let rightSide=document.querySelectorAll('.rightSide');
	let leftSide=document.querySelectorAll('.leftSide');
	rightSide=Array.from(rightSide);
	leftSide=Array.from(leftSide);
	rightSide.map(fillColor);
	leftSide.map(fillColor);
	for (let i = 0; i < 2; i++) {
	addLifes(healthBar[i],i,playerColor);
	}
}
function showThisHideRest(obj){
	for(let i=0;i<container.length;i++){
		if(container[i].id==obj.id){
			container[i].classList.remove('hide');
		}
		else{
			container[i].classList.add('hide');
		}
	}
}
function playAgain(){
	location.reload();
}
function endIt(){
	showThisHideRest(byePage);
}

let playerMove, computerMove,playerColor,computerColor;
const container=document.getElementsByClassName('container');
const nameBox=document.getElementById('nameBox');
const colorBox=document.getElementById('colorBox');
const mainPage=document.getElementById('mainPage');
const again=document.getElementById('again');
const byePage=document.getElementById('byePage');
const healthBar = document.querySelectorAll('.healthBar');
const buttons = document.querySelectorAll('.buttons')
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const resultScreen=document.querySelector('#resultScreen');
showThisHideRest(nameBox);
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('mouseover', transition);
	buttons[i].addEventListener('mouseout', removeTransition);
}
