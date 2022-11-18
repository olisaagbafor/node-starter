
// Settled Promises
const p = Promise.resolve({id: 1, username: "OlisaAgbafor"});
p.then(result => console.log(result));

const q = Promise.reject(new Error('Seems Something Failed...'));
q.catch(error => console.log(`Error: ${error.message}`));


// Parallel Promises
const p1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('Asynchronous Call 1....');
        resolve(1);
    }, 2000)
})

const p2 = new Promise(resolve => {
    setTimeout(() => {
        console.log('Asynchronous Call 2....');
        resolve(2)
    }, 2000)
})

const p3 = new Promise(reject => {
    setTimeout(() => {
        console.log('Asynchronous Call 3....');
        reject(new Error('This Failed ...'))
    }, 2000)
})

Promise.all([p1, p2])
    .then(result => console.log(result));

Promise.race([p3, p1])
    .then(result => console.log(result));