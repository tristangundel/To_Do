const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 61519;
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const testResponse = {
    bender: "Bender is great",
    scruffy: "I'm the janitor"
};

app.use(express.static(DIST_DIR));
app.use(express.static("../src/public"));
app.get('/api', (req, res) => {
    res.send(testResponse);
});

app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});

app.listen(port, () => {
    console.log("Server listening on port: " + port);
});
