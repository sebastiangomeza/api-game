const express = require('express');
const app = express();
const routes = require('./route');

app.use('/', routes);

app.listen(3000, () =>
    console.log(`APP running on port 3000`)
);