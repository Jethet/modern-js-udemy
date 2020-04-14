const http = new easyHTTP();

//Get posts
// http.get("https://jsonplaceholder.typicode.com/posts", function (error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

// Get single post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

// Post request: create data
const data = {
  title: "Custom Post",
  body: "This is a custom post",
};

// Create post request
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post) {
//   if (error) {
//         console.log(error);
//       } else {
//         console.log(post);
//       }
// })

// Update post (with put request)
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
  if(error) {
    console.log(error);
  } else {
    console.log(response);
  }
})