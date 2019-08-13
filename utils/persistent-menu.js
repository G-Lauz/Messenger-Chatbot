// /utils/persistent-menu.js //

'use strict';
const api = require('./api');

function add(callback) {
  console.log('ADD PERSISTENT MENU');

  var persistentMenu = {
    "persistent_menu": [
      {
        "locale": "default",
        "composer_input_disabled": true,
        "call_to_actions": [
          {
            "type": "postback",
            "title": "Parler à un recruteur",
            "payload": "off_bot"
          },
          {
            "type": "postback",
            "title": "Talk to a recruiter",
            "payload": "off_bot"
          }
        ]
      },
      {
        "locale": "fr_CA",
        "composer_input_disabled": true,
        "call_to_actions": [
          {
            "type": "postback",
            "title": "Parler à un recruteur",
            "payload": "off_bot"
          }
        ]
      }
    ]
  };

  api.call('/messenger_profile', persistentMenu, callback);
}

function remove(done) {
  console.log('REMOVE PERSISTENT MENU');

  var payload = {
    "setting_type": "call_to_actions",
    "thread_state": "existing_thread",
    "call_to_actions": []
  };

  api.call('/thread_settings', payload, done);
}

module.exports = {
  add,
  remove
}
