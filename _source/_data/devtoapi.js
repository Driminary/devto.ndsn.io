var axios = require("axios");

var api_key = process.env.DEVTO_APIKEY || (() => { throw("No API Key Set!")})();
var api_url = process.env.DEVTO_APIURL || "https://dev.to/api/articles/me";

module.exports = (async () => {
    try {
    let response = await axios
      .get(api_url, {
        headers: {
          'api-key': api_key, // Send the API Key in the header
        },
      })

    return { posts: response.data } 
    
    

    } catch(e) {
        console.error(e)
    }
  })();
