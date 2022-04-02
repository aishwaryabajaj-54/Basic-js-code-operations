console.log('Question 1:')

function convertBinaryToDecimal(binary){
	const decimal = parseInt(binary, 2);
	return decimal;
}

function checkIfPrime(num){
	let counter = true;
	for(let i=2; i<=num/2; ++i){
		if(num%i === 0){
		  counter = false;
		  break;
		}
	}
	return counter;
}

function countPrimeNumbers(start, end){
	let startPrime = convertBinaryToDecimal(start);
	let endPrime = convertBinaryToDecimal(end);
	if(startPrime > endPrime) {
		startPrime = startPrime + endPrime;
		endPrime = startPrime - endPrime;
		startPrime = startPrime - endPrime;
	}
	for(let i=startPrime; i<= endPrime; i++){
		const counter = checkIfPrime(i);
		if(counter) {
			console.log(i)
		}
	}
}

countPrimeNumbers(101, 11111)