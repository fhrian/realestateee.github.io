// script.js
// Function to toggle the menu icon
// REestate
function toggleMenu() {
  var menuIcon = document.getElementById("menu-icon");
  menuIcon.classList.toggle("bx-x");
}

// Add an event listener to the menu icon
document.getElementById("menu-icon").addEventListener("click", toggleMenu);

// sign up dan login
// script.js

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form values
  var fullName = document.getElementById("full-name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;

  // Display the form values in the console
  console.log("Full Name:", fullName);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Password:", password);

  // You can perform additional actions here, such as sending the form data to a server using AJAX
}

// Add an event listener to the form submission
document
  .getElementById("signup-form")
  .addEventListener("submit", handleFormSubmit);
