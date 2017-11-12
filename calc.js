const button = document.getElementById('button');
const result = document.getElementById('result');
const birthday = document.getElementById('birthday');

button.addEventListener('click', function() {
	let myBirthday = new Date(birthday.value);
  let today = new Date();
	result.innerHTML = getYears(myBirthday, today);
});

function getYears(birthday, today) {
	let thisYear = today.getFullYear();
  let birthYear = birthday.getFullYear();
	let age = thisYear - birthYear;
  return 'You are ' + age + ' years old';
} 
