class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.formState = "add";
  }

  showPosts(posts) {
    let output = "";
    posts.forEach((post) => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id="${post.id}">
          <i class="fa fa-pencil"></i>
          </a>
          <a href="#" class="delete card-link" data-id="${post.id}">
          <i class="fa fa-remove"></i>
          </a>
        </div>
      </div>`;
    });

    this.post.innerHTML = output;
  }
  showAlert(message, className) {
    this.clearAlert()

    // create div
    const div = document.createElement('div')
    // add classes
    div.className = className
    // add text
    div.appendChild(document.createTextNode(message))
    // get parent to insert this in the DOM
    const container = document.querySelector('.postsContainer')
    
    // Get posts
    const posts = document.querySelector('#posts')
    // Insert alert div
    container.insertBefore(div, posts)

    // Timeout
    setTimeout(() => {
      this.clearAlert()
    }, 3000)
  }
  // Alert message re. clear data
  clearAlert() {
    const currentAlert = document.querySelector('.alert')

    if(currentAlert) {
      currentAlert.remove()
    }
  }

  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  // Fill form with data to edit
  fillForm(data) {
    this.titleInput.value = data.title
    this.bodyInput.value = data.body
    this.idInput.value  = data.id

    this.changeFormState('edit')
  }

  // Clear id input (this is hidden)
  clearIdInput() {
    this.idInput.value = ''
  }

  // Change the form state: in edit mode, the 'post it' button needs to change
  changeFormState(type) {
    if(type === 'edit') {
      this.postSubmit.textContent = 'Update Post'
      this.postSubmit.className = 'post-submit btn btn-warning btn-block'

      // Create cancel button
      const button = document.createElement('button')
      button.className = 'post-cancel btn btn-light btn-block'
      button.appendChild(document.createTextNode('Cancel Edit'))

      // Get parent to insert this into the DOM
      const cardForm = document.querySelector('.card-form')
      // Get element to insert the button before
      const formEnd = document.querySelector('.form-end')
      // Insert cancel button
      cardForm.insertBefore(button, formEnd)


    } else {
      this.postSubmit.textContent = 'Post it'
      this.postSubmit.className = 'post-submit btn btn-primary btn-block'
      // Remove cancel button if displayed
      if(document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove()
      }
      // Clear id from hidden field
      this.clearIdInput()
      this.clearFields()
    }
  }
}

export const ui = new UI();
