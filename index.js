// index.js //

'use strict';

// Imports dependencies
require('dotenv').config();
const setupGetStartedButton = require('./utils/get-started-button');
var chatbot = require('./chatbot');

// Imports dependencies and set up http server
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
if(!module.parent){
  app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));
}

// Creates the endpoint for our webhook
app.post('/webhook', (req, res) => {

  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Parse messaging array
    const webhook_events = body.entry[0];

    // Secondary receiver is in control - listen on standby channel
    if(webhook_events.standby) {
      // iterate webhook events from standby channel
      webhook_events.standby.forEach(event => {
        if(event.message) {
          chatbot.receivedStandbyMessage(event);
        }
      });
    }

    // Bot is in control - listen for messages
    if(webhook_events.messaging) {
      // iterate webhook events
      webhook_events.messaging.forEach(event =>{

        console.log(event);

        if(event.message) {
          chatbot.receivedMessage(event);
        } else if(event.postback) {
          chatbot.receivedPostback(event);
        } else if(event.pass_thread_control) {
          chatbot.inboxPassThreadControl(event);
        }
      });
    }

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {

    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

app.get('/setup', (req, res) => {
  setupGetStartedButton.call(res);
});

module.exports = app;
