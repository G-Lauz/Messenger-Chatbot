// /utils/sendapi.js //

'use strict';
const api = require("./api");

function call(sender_psid, message, done) {
  let request_body;

  // mark_seen
  request_body = {
    "recipient": {
      "id": sender_psid
    },
    "sender_action": "mark_seen"
  }
  //sendHTTPRequest(request_body);
  api.call('/messages', request_body, () => {
    // typing_on
    request_body = {
      "recipient": {
        "id": sender_psid
      },
      "sender_action": "typing_on"
    }

    //sendHTTPRequest(request_body);
    api.call('/messages', request_body, () => {
      //typing_off
      request_body = {
        "recipient": {
          "id": sender_psid
        },
        "sender_action": "typing_off"
      }

      //sendHTTPRequest(request_body);
      setTimeout(api.call, 2000, '/messages', request_body, () => {
        // Construct the message body
        request_body = {
          "recipient": {
            "id": sender_psid
          },
          "message": message
        }

        //sendHTTPRequest(request_body);
        api.call('/messages', request_body, () => {
          done();
        });
      });
    });
  });
}

module.exports = {
  call
};
