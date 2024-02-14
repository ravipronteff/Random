// console.log('start')
// setTimeout(()=>{
//   console.log('text without time')
// },100)

// setTimeout(()=>{
//   console.log('with timer 1sec')
// },1000)

// setTimeout(()=>{
//   console.log('with timer 2sec')
// },2000)

// ////

// console.log('Start');

// setTimeout(function () {
//   console.log('Inside Callback');
// }, 1000);

// console.log('End');
// /// another
// console.log('Start');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise Resolved');
//   }, 1000);
// });

// promise.then((result) => {
//   console.log(result);
// });

// console.log('End');
// another question
// console.log('Start');

// setTimeout(() => {
//   console.log('Inside Timeout');
// }, 0);
// // first promise
// Promise.resolve().then(() => {
//   console.log('Inside Microtask');
// });
// // second promise
// const promise = new Promise((resolve, reject) => {
//   resolve('Promise Resolved');
// });
// promise.then(result => {
//   console.log(result);
// });
// const fetchData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   console.log('text', await res.json());
// };
// fetchData();

// console.log('End');

// another test example
// const fetchDataCallback = callback => {
//   setTimeout(() => {
//     const data = 'Async data';
//     callback(data);
//   }, 1000);
// };

// fetchDataCallback(result => console.log('Callback Result:', result));

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Async data';
      resolve(data);
      // Uncomment the next line to simulate an error
      // reject(new Error('Error fetching data'));
    }, 1000);
  });
}

// fetchDataPromise()
//   .then(result => {
//     console.log('Promise Result:', result);
//   })
//   .catch(error => {
//     console.error(error,'Promise Error:', error.message);
//   });
async function fetchDataAsyncAwait() {
  try {
    const result = await fetchDataPromise();
    console.log('Async/Await Result:', result);
  } catch (error) {
    console.error('Async/Await Error:', error.message);
  }
}

fetchDataAsyncAwait();
