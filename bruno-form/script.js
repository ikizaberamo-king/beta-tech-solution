const form = document.getElementById("productForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const id = document.getElementById("id").value.trim();
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const date = document.getElementById("date").value;

    // Simple validation
    if (!name || !id || !category || !price || !date) {
        showMessage("Please fill all required fields ❌", "red");
        return;
    }

    if (price <= 0) {
        showMessage("Price must be greater than 0 ❌", "red");
        return;
    }

    // Success animation
    showMessage("Product Registered Successfully ✅", "#00ffcc");

    // Reset form
    form.reset();
});

function showMessage(message, color) {
    successMsg.textContent = message;
    successMsg.style.color = color;

    successMsg.style.opacity = "0";
    successMsg.style.transform = "translateY(10px)";

    setTimeout(() => {
        successMsg.style.transition = "0.5s";
        successMsg.style.opacity = "1";
        successMsg.style.transform = "translateY(0)";
    }, 100);
}