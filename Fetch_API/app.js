// Get local text file data
document.querySelector("#button1").addEventListener("click", getText);

function getText() {
  fetch("test.txt")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      document.querySelector("#output").innerHTML = data;
    })
    .catch((err) => console.log(err));
}

// Get local json file data
document.querySelector("#button2").addEventListener("click", getJSON);

function getJSON() {
  fetch("posts.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((post) => (output += `<li>${post.title}</li>`));
      document.querySelector("#output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// Get API data
document.querySelector("#button3").addEventListener("click", getExternal);

function getExternal() {
  fetch("https://api.github.com/events")
    .then(res => res.json())
    .then(data => {
      let output = "";
      data.forEach(function (event) {
        output += `<li>${event.id}</li>`;
    });
  document.querySelector("#output").innerHTML = output
    })
  .catch(err => console.log(err));
}

