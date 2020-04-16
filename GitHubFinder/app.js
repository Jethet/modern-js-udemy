// Initialize class GitHub (see github.js)
const github = new Github

// Inititalize UI
const ui = new UI

// Create event listener for search input
const searchUser = document.querySelector("#searchUser");
searchUser.addEventListener("keyup", (e) => {
  // Get user input
  const userText = e.target.value

  if(userText !== '') {
    // Make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert (in UI file)


      } else {
        // Show profile (in UI file)
        ui.showProfile(data.profile)
      }
    })  
  } else {
    // Clear profile

  }


  e.preventDefault();
});
