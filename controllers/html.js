//Will deal w/ the Handlebars side of things
const db = require("../models");

module.exports = function (app) {
    app.get("/", (req, res) => {
        db.Article.find({})
            .then(function (dbArticle) {
                // If we were able to successfully find Articles, send them back to the client
                const hbsObject = {
                    articles: dbArticle
                };
                res.render("index", hbsObject);
            })
            .catch(function (err) {
                // If an error occurred, send it to the client
                res.json(err);
            });
    });
}