import { http } from "./http";
import { ui } from "./ui";

// Get posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Listen for delete: event delegation
document.querySelector("#posts").addEventListener("click", deletePost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit)

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
      ui.showAlert("Post added", "alert alert-success");
      ui.clearFields();
      getPosts(); // this calls all posts, including the new one, for display
    })
    .catch((err) => console.log(err));
}

// Update post: enable edit state
function enableEdit(e) {
  e.preventDefault()
  if(e.target.parentElement.classList.contains('edit')) {
    // by logging e.target.parentElement.dataset.id, you can check if you get
    // the correct id when you click on the 'edit' icon
    const id = e.target.parentElement.dataset.id;
    // Get the title and body to be edited
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
    const body = e.target.parentElement.previousElementSibling.textContent

    const data = {
      id,
      title,
      body
    }
    // Fill form with current post
    ui.fillForm(data)
  }  
}

// Delete post
function deletePost(e) {
  e.preventDefault();
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;

    if (confirm("Are you sure?")) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert("Post removed", "alert alert-success");
          getPosts()
        })
        .catch((err) => console.log(err));
    }
  }
}
