function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
// A callback is needed because otherwise the data will be returned
// before it has actually loaded (callback makes it asynchronous)
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  // Because this.http is not in the scope of the function below, but
  // outside of it, 'this' is put into a variable that is used like 'this'
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// Make an HTTP POST request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json")

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true )

  let self = this
  this.http.onload = function(){
    if(self.http.status = 200) {
      callback(null, 'Post Deleted')
    } else {
      callback('Error: ' + self.http.status)
    }
  }
  this.http.send()
}