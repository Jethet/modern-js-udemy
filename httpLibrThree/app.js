const http = new EasyHTTP()

//Get users
http.get('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err))

// Create user data
const data = {
  name: 'John Doe',
  username: 'John',
  email: 'jdoe@gmail.com'
}

// // Create a user
// http.post('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// // Update user
// http.put('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// // Delete user
// http.delete('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users/2')
// .then(data => console.log(data))
// .catch(err => console.log(err))

