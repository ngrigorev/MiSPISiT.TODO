const express = require('express');

let app = express();
let port = 80;

app.listen(port, () => {
    console.info(`App run on http://localhost:${port}`);
});