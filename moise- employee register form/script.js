document.getElementById("employeeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let inputs = document.querySelectorAll("input, select, textarea");
    let msg = document.getElementById("successMsg");

    let valid = true;

    // Validate inputs with animation
    inputs.forEach(input => {
        if (input.hasAttribute("required") && input.value.trim() === "") {
            valid = false;

            input.classList.add("shake");

            setTimeout(() => {
                input.classList.remove("shake");
            }, 500);
        }
    });

    if (!valid) {
        showToast("❌ Please fill all required fields!", "error");
        return;
    }

    // Success message
    msg.style.display = "block";

    showToast("🎉 Employee Registered Successfully!", "success");

    setTimeout(() => {
        msg.style.display = "none";
    }, 3000);

    this.reset();
});


// Floating notification
function showToast(text, type) {
    let div = document.createElement("div");

    div.innerText = text;

    div.style.position = "fixed";
    div.style.top = "20px";
    div.style.right = "20px";
    div.style.padding = "12px 18px";
    div.style.borderRadius = "8px";
    div.style.color = "white";
    div.style.fontWeight = "bold";
    div.style.zIndex = "1000";
    div.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    div.style.animation = "slideIn 0.4s ease";

    div.style.background = (type === "success") ? "#28a745" : "#dc3545";

    document.body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 2500);
}