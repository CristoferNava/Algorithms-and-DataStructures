// Log all pairs of array

const box = [1, 2, 3, 4, 5];

function pairs(box) {
	let pairsBox = []; // O(1)
 	for (let i = 0; i < box.length; i++) { // O(n * n)
		for (let j = i + 1; j < box.length; j++) { // O(n)
			pairsBox.push([box[i], box[j]]); // O(n)
		}
	}

	return pairsBox; // O(1)
}

console.log(pairs(box)); // O(n^2) Cuadratic time.