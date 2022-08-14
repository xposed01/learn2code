let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, num) {
	let start = 0;
	let end = arr.length - 1;
	let mid = Math.floor((end - start) / 2);
	let result;
	let steps = 0;

	while (!result) {
		steps += 1;

		if (num === arr[mid]) {
			return result = console.log('index =', mid, 'steps =', steps)
		}

		if (num > arr[mid]) {
			start = mid + 1;
			mid = start + (Math.floor((end - start) / 2));
			console.log('index mid =', mid)
		}

		if (num < arr[mid]) {
			end = mid - 1;
			mid = start + (Math.floor((end - start) / 2));
			console.log('index mid =', mid)
		}
	}
}

console.log(binarySearch(arr, 19));