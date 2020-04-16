class EasyHTTP {
  // Make HTTP GET request with async/await
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Make POST request with async/await
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();
    return resData;
  }

  // Make PUT request with async/await
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json()
    return resData
  }

  // Make DELETE request with async/await
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const resData = await 'Resource deleted'
    return resData
  }
}
