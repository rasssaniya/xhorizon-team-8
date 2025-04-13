document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous errors
    document.getElementById('userError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get values
    const userType = document.getElementById('userType').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let valid = true;

    // Validate user type
    if (userType === '') {
      document.getElementById('userError').textContent = 'Please select a user type.';
      valid = false;
    }

    // Validate email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      valid = false;
    }

    // Validate password (at least 6 characters)
    if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      valid = false;
    }

    // If all valid, proceed
    if (valid) {
      // Optionally redirect or submit
      // For demonstration, redirect to dashboard.html
      window.location.href = 'http://127.0.0.1:3000/mainpage.html'; // Change as needed
    }
  });

document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission

  const userType = document.getElementById("userType").value;

  // Check user type and redirect accordingly
  if (userType === "student") {
    window.location.href = "student.html";
  } else if (userType === "teacher") {
    window.location.href = "teacher.html";
  } else if (userType === "admin") {
    window.location.href = "admin.html";
  } else {
    document.getElementById("userError").textContent = "Please select a user type.";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("Campus Bridge loaded!");
  // You can start coding dynamic features here.
});


