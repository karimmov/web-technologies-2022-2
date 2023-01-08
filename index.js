//задание 1
const students = [
	{ name: 'Павел', age: 20 },
	{ name: 'Иван', age: 20 },
	{ name: 'Эдем', age: 20 },
	{ name: 'Денис', age: 20 },
	{ name: 'Виктория', age: 20 },
	{ age: 40 },
];

function pickPropArray(arr, propName) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		for (let prop in arr[i])
			if (prop == propName) result.push(arr[i][prop]);
	}
	return result;
}
const result = pickPropArray(students, 'name')
console.log(result)
// [ 'Павел', 'Иван', 'Эдем', 'Денис', 'Виктория' ]



//задание 2
function createCounter() {
	let count = 0;
	return function () {
		count++;
		console.log(count);
	}
}

const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2



//задание 3
function spinWords(text) {
	let result = "";
	let words = text.split(" ");
	for (let i = 0; i < words.length; i++) {
		let word = words[i].split("");
		if (words[i].length >= 5)
			word.reverse();
		result += word.join("");
		if (i != words.length-1)
			result += " ";
	}
	return result;
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test
