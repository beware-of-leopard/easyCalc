var input1, input2, submit, answer;

input1 = document.querySelector('#num_one');
input2 = document.querySelector('#num_two');
submit = document.querySelector('#calculateBtn');
answer = document.querySelector('#answer');


function getAnswer(){
	var finalAnswer = Number(input1.value) + Number(input2.value);
	answer.textContent = finalAnswer;
}

submit.addEventListener('click', getAnswer);
