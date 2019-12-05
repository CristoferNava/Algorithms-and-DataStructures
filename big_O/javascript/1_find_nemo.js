const name = ['nemo'];
const names = ['cristofer', 'oliver', 'josue', 'monse', 'gerardo', 'pollo', 
                'gallo'];
const large = new Array(100000).fill('pollo')

function findNemo(array) {
    let t0 = performance.now();
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] === 'nemo') {
            console.log('We found Nemo!');
        }
    }
    let t1 = performance.now();
    console.log(`${t1 - t0} milliseconds`);
}

findNemo(large); // O(n)