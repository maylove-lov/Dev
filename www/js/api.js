const API_URL = "https://mport.site.je/api/";

async function api(endpoint, options = {}) {

    try {

        const response = await fetch(API_URL + endpoint, {
            method: options.method || "GET",
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {})
            },
            body: options.body || null
        });

        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return {
            success: false,
            message: "Tidak dapat terhubung ke server."
        };

    }

}
