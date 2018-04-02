var zendesk = require('node-zendesk');
var exampleConfig = require('./config');
//var fs = require('fs');
//var zd = require('../lib/client');

var client = zendesk.createClient({
  username:  exampleConfig.auth.username,
  token:     exampleConfig.auth.token,
  remoteUri: exampleConfig.auth.remoteUri
});

client.users.auth(function (err, res, result) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(JSON.stringify(result));
  console.log(JSON.stringify(result.verified, null, 2, true));
});

client.tickets.list(function (err, statusList, body, responseList, resultList) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(JSON.stringify(body, null, 2, true));//will display all tickets
});