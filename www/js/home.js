async function loadHome() {

    const result = await api("home.php");

    if (!result.success) {

        document.getElementById("status").textContent =
            "Server Offline";

        return;
    }

    const data = result.data;

    document.getElementById("appName").textContent =
        data.app.name;

    document.getElementById("heroTitle").textContent =
        data.hero.title;

    document.getElementById("heroSubtitle").textContent =
        data.hero.subtitle;

    document.getElementById("status").textContent =
        "🟢 " + data.server.status;

    document.getElementById("serverTime").textContent =
        data.server.time;

}
