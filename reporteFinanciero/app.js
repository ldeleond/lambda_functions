const serverless = require('serverless-http');
const express = require('express');
const db = require('./db/database');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/reportefinanciero', (req, res) => {
  res.send({ application: 'sample-app', version: '1' });
});
//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);