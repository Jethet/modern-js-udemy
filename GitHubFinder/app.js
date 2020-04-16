// Initialize class GitHub (see github.js)
const github = new Github();

// Inititalize UI
const ui = new UI();

// Create event listener for search input
const searchUser = document.querySelector("#searchUser");
searchUser.addEventListener("keyup", (e) => {
  // Get user input
  const userText = e.target.value;

  if (userText !== "") {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert (in UI file)
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile (in UI file)
        ui.showProfile(data.profile);
        ui.showRepos(data.repos)
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }

  e.preventDefault();
});
