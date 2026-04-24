const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const event = document.getElementById("event").value;

    if (name === "" || event === "") {
        form.classList.add("shake");

        setTimeout(() => {
            form.classList.remove("shake");
        }, 300);

        return;
    }

    // Success animation
    message.textContent = `✅ ${name}, your ${event} is booked!`;
    message.style.color = "green";
    message.style.opacity = 1;
    message.style.transform = "scale(1)";

    form.reset();
});