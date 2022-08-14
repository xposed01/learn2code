let arr = [3,2,7,5,8,1,0,9,4,6];

function sortArray(arr) {
	for(let i = 0; i < arr.length; i++) {
		console.log(arr[i])
		for(let j = i+1; j < arr.length; j++) {
			let item = arr [i];
			let itemTwo = arr[j];
			if (arr[j] < arr[i]) {
				arr[i] = itemTwo;
				arr[j] = item;
			}
		}
	}
	return arr;
}

console.log(sortArray(arr));