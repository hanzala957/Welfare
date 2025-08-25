
function openForm(type) {
  document.getElementById("formBox").style.display = "flex";
  switchForm(type);
}
function closeForm() {
  document.getElementById("formBox").style.display = "none";
}
function switchForm(type) {
  document.getElementById("loginForm").style.display = (type === "login") ? "block" : "none";
  document.getElementById("signupForm").style.display = (type === "signup") ? "block" : "none";
}

document.getElementById("joinUsBtn").addEventListener("click", function () {
  alert("Thank you for your interest💕! Please contact us at: hanzalarehan's welfare@email.com","+92_3135673137");
});

window.onload = function () {
  document.querySelectorAll(".service-card").forEach(function (card) {
    card.classList.add("fade-in");
  });
};

document.getElementById("contactform").addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let status = document.getElementById("status");

  if (name && email && message) {
    status.style.color = "green";
    status.textContent = "Message sent successfully!";
    this.reset();
  } else {
    status.style.color = "red";
    status.textContent = "Please fill out all the fields.";
  }
});
