const API_BASE = "https://mport.site.je/api/";

async function api(endpoint, options = {}) {
    const response = await fetch(API_BASE + endpoint, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        },
        ...options
    });

    return response.json();
}
