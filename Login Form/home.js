function getQueryParams() {
    return new URLSearchParams(window.location.search);
}

function logout() {
    window.location.href = "index.html";
}

window.onload = () => {
    const params = getQueryParams();
    const username = params.get("username");
    const role = params.get("role");
    const content = document.getElementById("content");
    const noSession = document.getElementById("noSession");

    if (!username || !role) {
        content.style.display = "none";
        noSession.style.display = "block";
        return;
    }

    document.getElementById("welcomeName").innerText = username;
    document.getElementById("usernameValue").innerText = username;
    document.getElementById("roleValue").innerText = role;

    history.replaceState(null, "", "home.html");
};
