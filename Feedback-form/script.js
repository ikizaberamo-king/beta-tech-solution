
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const rating = document.getElementById("rating").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !rating || !message) {
    alert("Please fill all fields");
    return;
  }

  // Simulate sending data
  document.getElementById("responseMsg").innerText = "Thank you for your feedback!";

  // Reset form
  document.getElementById("feedbackForm").reset();
});