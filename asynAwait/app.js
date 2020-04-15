// async function myFunc() {

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000)
//   })

//   const error = false  // just for the example: can be set to 'true' to see example
//   if(!error) {
//     const res = await promise
//     return res
//   } else {
//     await Promise.reject(new Error('Something went wrong'))
//   }
//   }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err))


//EXAMPLE: get users from jsonplaceholder API

async function getUsers() {
  // await response of fetch call
  const response = await fetch('http://jsonplaceholder.typicode.com/users')
  
  // only proceed once fetch promise is resolved
  const data = await response.json()

  // proceed when second promise is resolved
  return data
}

getUsers().then(users => console.log(users));