const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public/'));

// Middleware
// Receives request, modifies request, then proceeds to routes.
/*app.use((req, res, next) => {

});*/

// As of Express 4.16+, can use the same funcionality that body-parser package has.
/*app.use(express.json()); // Interprets JSON data.

app.get('/', (req, res) => {
    // req.query - Information from query string
    // req.body - Data you insert to POST
    // req.header(s) - depends on version whether its header or headers. Get headers for HTTP method.
    // req.params - parameters entered in URL
    res.send('getting root');
});*/


app.listen(3000);
