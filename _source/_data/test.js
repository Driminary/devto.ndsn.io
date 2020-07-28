var devtoAPI = require("./devto.api.js");

devtoAPI.then((p) => {
    p.forEach(e => {
        console.log(e.title + ": " + e.page_views_count)
    });
});