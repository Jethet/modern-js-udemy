// Profile scroller (like dating site scroller)

const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    name: "William Johnson",
    age: 38,
    gender: "male",
    lookingfor: "female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    name: "Helen Baker",
    age: 32,
    gender: "female",
    lookingfor: "female",
    location: "New York NY",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
  },
];

const profiles = profileIterator(data);

// nextProfile()  // With this you can call the first profile to display automatically

// Next event by clicking button:
document.querySelector("#next").addEventListener("click", nextProfile);

// Next profile display: profile content plus image
function nextProfile() {
  // iterate over profiles with next:
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.querySelector("#profileDisplay").innerHTML = `
      <ul class="list-group" style="list-style: none; ">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>`;

    document.querySelector("#imageDisplay").innerHTML = `
      <img src="${currentProfile.image}">`;
} else {
  // No more profiles
  window.location.reload()
}
}

// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

