function PageState() {}

PageState.prototype.init = function () {
  homeState();
};

// Home state
const homeState = function () {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    `;
};

// About state
const aboutState = function () {
  document.querySelector("#heading").textContent = "About us";
  document.querySelector("#content").innerHTML = `<p>This is the about page</p>`;
};

// Contact state
const contactState = function () {
  document.querySelector("#heading").textContent = "Contact us";
  document.querySelector("#content").innerHTML = `
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary>Submit</button>
    </form>
  `;
};

// Instantiate page state
const page = new PageState();

// Initialise first state
page.init();

// UI variables & event listeners
let home = document.getElementById("home");
let about = document.getElementById("about");
let contact = document.getElementById("contact");

home.addEventListener("click", (e) => {
  homeState();
  e.preventDefault();
});

about.addEventListener("click", (e) => {
  aboutState();
  e.preventDefault();
});

contact.addEventListener("click", (e) => {
  contactState();
  e.preventDefault();
});
