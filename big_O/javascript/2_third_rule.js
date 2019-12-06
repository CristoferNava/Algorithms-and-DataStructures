boxes1 = ["Python", "JS", "Java"];
boxes2 = ["Django", "React", "Spring"];

function showBoxes(array1, array2) {
	array1.forEach(function(box) { // O(n1)
		console.log(box); // O(n1)
	});

	array2.forEach(function(box) { // O(n2)
		console.log(box); // O(n2)
	});
}

showBoxes(boxes); // O(n1 + n2)