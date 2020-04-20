// The blur event fires when an element has lost focus
// Focus event is used to give focus to a html element. It sets the
// element as the active element (one html element at a single time)
// The element can either be a button or a text field or a window etc.

document.querySelector("#name").addEventListener("blur", validateName);
document.querySelector("#zip").addEventListener("blur", validateZip);
document.querySelector("#email").addEventListener("blur", validateEmail);
document.querySelector("#phone").addEventListener("blur", validatePhone);

// The classList property returns the class name(s) of an element,
// as a DOMTokenList object. This property is useful to add, remove
// and toggle CSS classes on an element.
//The classList property is read-only, but can be modified by using
// the add() and remove() methods.
function validateName() {
  const name = document.querySelector("#name");
  // Regex: anything between 2 and 10 chars, upper/lowercase
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateZip() {
  const zip = document.querySelector('#zip')
  //Regex: starts with 5 numbers; optional: - and 4 numbers
  const re = /^[0-9]{5}(-[0-9]{4})?$/

  if (!re.test(zip.value)){
    zip.classList.add('is-invalid')
  } else {
    zip.classList.remove('is-invalid')
  }
}

function validateEmail() {
  const email = document.querySelector('#email')
  // Starts with upper/lowercase chars, underscore, dot, dash
  // plus literal char @, then same regex group for domain name,
  // then literal dot, then domainname: 2-5 chars
  const re =/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

  if (!re.test(email.value)) {
    email.classList.add('is-invalid')
  } else {
    email.classList.remove('is-invalid')
  }
}

function validatePhone() {
  const phone = document.querySelector('#phone')
  const re =/^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/
  if (!re.test(phone.value)){
    phone.classList.add('is-invalid')
  } else {
    email.classList.remove('is-invalid')
  }
}
