function boooo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("Boooo!");
    }
}
// Space Complexity O(1), we are not creating variables or data structures

function setHi(times) {
    let hi = [];
    for (let i = 0; i < times; i++) {
        hi[i] = "hi";
    }

    return hi;
}
// O(n), we are creating a array and adding values to it every time.