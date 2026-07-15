window.addEventListener("load", async () => {

    const ok = await authenticateApp();

    if (ok) {
        location.href = "dashboard.html";
    } else {
        location.href = "offline.html";
    }

});
