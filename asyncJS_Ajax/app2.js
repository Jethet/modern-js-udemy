document.querySelector("#button1").addEventListener("click", loadCustomer);
document.querySelector('#button2').addEventListener('click', loadCustomers)

// Load individual customer
function loadCustomer(e) {
  // Create xhr request
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      // parse JSON as object, otherwise properties cannot be accessed
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul style="list-style: none">
        <li>ID: ${customer.id}</li>
        <li>Name: ${customer.name}</li>
        <li>Company: ${customer.company}</li>
        <li>Phone: ${customer.phone}</li>
        </ul>
      `
      document.querySelector('#customer').innerHTML = output
    }
  };
  xhr.send();
  e.preventDefault();
}

// Load all customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest

  xhr.open('GET', 'customers.json', true)
  xhr.onload = function() {
    if(this.status === 200) {
      const customers = JSON.parse(this.responseText)
      // Since customers.json is an array, use loop to get each object:
      let output = ''
      customers.forEach(function(customer) {
        // Append each object to output
        output += `
        <ul style="list-style: none">
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
        `
      })
      document.querySelector('#customers').innerHTML = output
    }
  }
  xhr.send()
  e.preventDefault()
}