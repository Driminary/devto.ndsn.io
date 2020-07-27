var axios = require("axios");
var toJSON = require("xml2js").parseString;

var feed = process.env.DEVTO_FEED || "https://dev.to/feed/ndsn";

module.exports = async () => {
    let response = await axios.get(feed);

    toJSON(response.data, { explicitArray: false, trim: true }, function (
      err,
      result
    ) {
      result.rss.channel.item.forEach((element) => {
        element.path = element.link.split("/").slice(-1)[0];
      });
      return ({ feed: feed, posts: result.rss.channel.item });
    });
};
