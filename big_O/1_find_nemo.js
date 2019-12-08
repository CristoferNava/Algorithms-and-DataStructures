const name = ['nemo'];
const names = ['cristofer', 'oliver', 'josue', 'monse', 'gerardo', 'pollo', 
                'gallo'];
const large = new Array(100000).fill('pollo')

function findNemo(array) {
    let t0 = performance.now(); // O(1)
    for (let i = 0; i <= array.length - 1; i++) { // O(n)
        if (array[i] === 'nemo') { // O(n)
            console.log('We found Nemo!'); // O(n)
        }
    }
    let t1 = performance.now(); // O(1)
    console.log(`${t1 - t0} milliseconds`); // O(1)
}

findNemo(large); // O(n)