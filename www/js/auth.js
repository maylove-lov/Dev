async function authenticateApp() {
    try {
        const result = await api("auth.php", {
            method: "POST",
            headers: {
                "X-MPORT-APP": "1"
            }
        });

        if (result.success) {
            localStorage.setItem("app_token", result.token);
            return true;
        }

        return false;
    } catch (e) {
        return false;
    }
}
