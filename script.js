document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("error");

    if (!name || !email || !message) {
      error.textContent = "All fields are required.";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      error.textContent = "Enter a valid email.";
      return;
    }

    if (message.length < 10) {
      error.textContent = "Message must be at least 10 characters.";
      return;
    }

    error.textContent = "Form submitted successfully!";
  });
});
