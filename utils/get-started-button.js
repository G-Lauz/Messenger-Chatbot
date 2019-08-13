// /utils/get-started-button.js //

'use strict';
const api = require('./api');

function call(res) {
  var messageData = {
    "get_started": {
        "payload":"get_started"
      }
  };
  api.call('/messenger_profile', messageData, () => {});
}
