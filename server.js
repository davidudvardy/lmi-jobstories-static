const express = require("express");
const path = require("path");
const app = express();

const pgp = require('pg-promise')();
const connectionString = process.env.DATABASE_URL || 'postgres://dudvardy@127.0.0.1:5432/lmi-jobstories';
const db = pgp(connectionString);

// Serve static files from the client app
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve categories from API
app.get("/api/categories", (req, res) => {
    let query = `SELECT * FROM (SELECT p.id AS key, p.title, (SELECT array_to_json(array_agg(row_to_json(usertypes))) FROM (SELECT u.id AS key, u.title FROM usertypes AS u WHERE u.product_id=p.id) usertypes) as usertypes FROM products AS p) product_usertypes;`;
    db.any(query)
        .then(function(data) {
            res.send(data);
            console.log('Sent', data.length, 'product categories.');
        })
        .catch(function(err) {
            res.send(err);
            console.log('ERROR:', err);
        });
});

// Serve job stories from API
app.get("/api/jobstories", (req, res) => {
    let query = `SELECT c.description AS context, m.description AS motivation, o.description AS outcome, p.id AS product, j.usertype_ids AS userTypes FROM jobstories AS j, contexts AS c, motivations AS m, outcomes AS o, usertypes AS u, products AS p WHERE c.id=j.context_id AND m.id=j.motivation_id AND o.id=j.outcome_id AND u.id=j.usertype_ids[1] AND p.id=u.product_id;`;
    db.any(query)
        .then(function(data) {
            res.send(data);
            console.log('Sent', data.length, 'job stories.');
        })
        .catch(function(err) {
            res.send(err);
            console.log('ERROR:', err);
        });
});

// For any other requests, serve static site
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);