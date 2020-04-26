import { http } from "./http";
import { ui } from "./ui";

// Get posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Get posts
function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

// Add new post, using http model to make post request
function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  // Object literal for values from form
  const data = {
    title,
    body,
  };
  // Create post
  http
    .post("http://localhost:3000/posts", data)
    .then((data) => {
      //
      ui.showAlert('Post added', 'alert alert-success')
      ui.clearFields()
      getPosts(); // this calls all posts, including the new one, for display
    })
    .catch((err) => console.log(err))
}
