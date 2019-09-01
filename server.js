const express = require('express')
const app = express();
const sample = require("lodash.sample");
const lorem = require("lorem-ipsum");

const pubDate = require("./pubDate");

const titles = [
    "This is random title %s",
    "A %s title",
    "Lol, %s",
    "Look, a %s",
    "%s - hello"
];

let c = 0;

const generateItem = () => {
    const title = sample(titles).replace("%s", Date.now() + "_" + (c++));

    return `
    <item>
        <title>${title}</title>
        <link>http://awesome-site-with-a-long.name.com/article.number.${c}.html</link>
        <pubDate>${pubDate()}</pubDate>
        <description>${lorem()}</description>
    </item>`
};

app.get('/', function (req, res) {
    const items = [];

    for (let i = 0; i <= 100; i++) {
        items.push(generateItem());
    }

    res.send(`
    <rss version="2.0">
        <channel>
            <title>XXX</title>
            <link>xxx</link>
            ${items.join("")}
        </channel>
    </rss>`)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
