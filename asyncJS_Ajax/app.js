document.querySelector("#button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN method: specifies type of request and file name for request
  xhr.open("GET", "data.txt", true);

  // console.log('READYSTATE', xhr.readyState);
  // Optional: used for spinners or loaders (fetching data)
  xhr.onprogress = function () {
    console.log("READYSTATE", xhr.readyState);
  };

  xhr.onload = function () {
    console.log("READYSTATE", xhr.readyState);

    if (this.status === 200) {
      // console.log(this.responseText);
      document.querySelector("#output").innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  xhr.onerror = function () {
    console.log("Request error");
  };

  xhr.send();
}
