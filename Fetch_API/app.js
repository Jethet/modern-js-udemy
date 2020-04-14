// Get local text file data
document.querySelector("#button1").addEventListener("click", getText);

function getText() {
  fetch("test.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.querySelector("#output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get local json file data
document.querySelector("#button2").addEventListener("click", getJSON);

function getJSON() {
  fetch("posts.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.querySelector('#output').innerHTML = output
    })
    .catch(function (err) {
      console.log(err);
    });
}
