const msg = document.querySelector('.main');
const btn = document.querySelector('.btn');
const answer = document.querySelector('input');
const score = document.querySelector('.score');
let play = false;
let words = ['python','sql','javascript','c++','php','java','html','css','angular','css','swift'];
let newwords = "";
let ranwords = "";
let s = 0;

const createNewwords = () =>{
	let random = Math.floor(Math.random()*words.length);
	let newword = words[random];
	return newword;
}
const scrambleword = (arr) =>{
	for(i=words.length-1; i>=0;i--){
		let temp  = arr[i];
		let j = Math.floor(Math.random()*(i+1));
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
}
score.innerHTML = `Score : ${s}`;
btn.addEventListener("click",function(){
score.style.display = "block";
	if (!play) {
		play = true;
		btn.innerHTML = "Guess";
		answer.style.display = "block";
		newwords = createNewwords();
		ranwords = scrambleword(newwords.split("")).join("");
		// console.log(ranwords);
		msg.innerHTML = `Guess This Word: ${ranwords}`;
	}else{
		let tword = answer.value;
		if (newwords == tword) {
			play = false;
			msg.innerHTML = `Great it is ${newwords}`;
			s++;
			answer.value = "";
			score.innerHTML = `Score : ${s}`;;
			answer.style.display = "none";
			btn.innerHTML = "start again";
		}else{
			answer.value = "";
			msg.innerHTML = ` Sorry Boss ! Try Again ${ranwords}`;
			
		}
	}

});