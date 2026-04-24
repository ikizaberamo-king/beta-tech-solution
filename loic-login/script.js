
// Fake database (like backend users)
const users = [
    { username: "beta", password: "1234", role: "admin" },
    { username: "tech", password: "0000", role: "user" }
];

// Main login function
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");
    const box = document.getElementById("loginBox");

    msg.style.color = "red";

    // validation
    if (!username || !password) {
        msg.innerText = "⚠ Please fill all fields";
        shake(box);
        return;
    }

    // loading effect
    msg.style.color = "white";
    msg.innerText = "Checking credentials...";

    setTimeout(() => {

        const user = users.find(u =>
            u.username === username && u.password === password
        );

        if (user) {
            msg.style.color = "lightgreen";
            msg.innerText = "Login successful ✔";

            // save session (like real apps)
            localStorage.setItem("betaUser", JSON.stringify(user));

            // redirect
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);

        } else {
            msg.innerText = "❌ Invalid login details";
            shake(box);
        }

    }, 1200);
}

// shake effect function
function shake(element) {
    element.classList.add("shake");
    setTimeout(() => {
        element.classList.remove("shake");
    }, 300);
}

// auto login check (session system)
window.onload = () => {
    const session = localStorage.getItem("betaUser");
    if (session) {
        window.location.href = "home.html";
    }
};