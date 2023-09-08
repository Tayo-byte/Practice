document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // For demonstration purposes, let's just log the username and password.
  console.log("Username: " + username);
  console.log("Password: " + password);

  // In a real implementation, you would handle authentication with a server-side process.
});
