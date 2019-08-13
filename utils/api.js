// /utils/api.js //

'use strict';

// Imports dependencies
const request = require('request');

var senderContext = {};

// Accept de resquest info and make HTTP POST request
function call(path, payload, done) {
  const access_token = process.env.PAGE_ACCESS_TOKEN,
        graph_url = "https://graph.facebook.com/v2.6/me";

  if(!path) {
    console.error('No endpoint specified on Messenger send!');
    return;
  } else if(!access_token || !graph_url) {
    console.error('No Page access token or graph API url configured!');
    return;
  }

  request({
    "uri": graph_url + path,
    "qs": {'access_token': access_token},
    "method": 'POST',
    "json": payload
  }, (err, res, body) => {
    if(!err && res.statusCode === 200) {
        console.log('Message sent');
    } else {
      console.error('Error: ' + err);
      console.log(body);
    }
    done();
  });
}

function callGetLocaleAPI(event, handleReceived){
  var userID = event.sender.id
  var http = require('https');
  var path = '/v2.6/' + userID + '?fields=first_name,last_name,locale,gender&access_token=' + process.env.PAGE_ACCESS_TOKEN;
  var options = {
    host: 'graph.facebook.com',
    path: path
  };

  if(senderContext[userID]){
    /*firstName = senderContext[userID].firstName;
    lastName = senderContext[userID].lastName;
    locale = senderContext[userID].locale;
    gender = senderContext[userID].gender;
    */console.log("Found "+ JSON.stringify(senderContext[userID]));/*
    if(!firstName)
      firstName = 'undefined';
    if(!lastName)
      lastename = 'undefined';
    if(!locale)
      locale = 'undefined';
    if(!gender)
      gender = 'undefined';*/
    handleReceived(event, senderContext[userID]);
    return;
  }

  var req = http.get(options, function(res){
    // Buffer de body entirely for processing as a whole
    var bodyChunks = [];
    res.on('data', function(chunk){
      //can process streamed parts here
      bodyChunks.push(chunk);
    }).on('end', function(){
      var body = Buffer.concat(bodyChunks);
      var bodyObjects = JSON.parse(body);
      /*firstName = bodyObjects.first_name;
      lastName = bodyObjects.last_name;
      locale = bodyObjects.locale;
      gender = bodyObjects.gender;
      if(!firstName)
        firstName = 'undefined';
      if(!lastName)
        lastename = 'undefined';
      if(!locale)
        locale = 'undefined';
      if(!gender)
        gender = 'undefined';
      senderContext[userID] = {};
      senderContext[userID].firstName = firstName;
      senderContext[userID].lastName = lastName;
      senderContext[userID].locale = locale;
      senderContext[userID].gender = gender;*/
      senderContext[userID] = {};
      senderContext[userID].psid = userID;
      if(bodyObjects.first_name)
        senderContext[userID].firstName = bodyObjects.first_name;
      if(bodyObjects.last_name)
        senderContext[userID].lastName = bodyObjects.last_name;
      if(bodyObjects.locale)
        senderContext[userID].locale = bodyObjects.locale;
      if(bodyObjects.gender)
        senderContext[userID].gender = bodyObjects.gender;

      console.log('Defined ' + JSON.stringify(senderContext));
      handleReceived(event, senderContext[userID]);
    })
  });
  req.on('error', function(err){
    console.log('ERROR' + e.message);
  });
}

// export the call function so it can be used elsewhere
module.exports = {
  call,
  callGetLocaleAPI,
  senderContext
};
