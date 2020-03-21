// /utils/handover-protocol.js //

'use strict';

// Import API helper
const api = require('./api');

function passThreadControl(sender_psid, targetAppId) {
  console.log('PASSING THREAD CONTROL');

  let payload = {
    "recipient": {
      "id":sender_psid
    },
    "target_app_id":targetAppId
  };

  api.call('/pass_thread_control', payload, () => {});
}

function takeThreadControl(sender_psid) {
  console.log('TAKING THREAD CONTROL');
  let payload = {
    "recipient": {
      "id": sender_psid
    }
  };

  api.call('/take_thread_control', payload, () => {});
}

function getThreadOwner(sender_psid) {
  const https = require('https');
  var path = '/v2.6/me/thread_owner?recipient=' + sender_psid + '&access_token=' + process.env.PAGE_ACCESS_TOKEN;
  const options = {
    hostname: 'graph.facebook.com',
    path: path,
    method: 'GET'
  };

  const req = https.request(options, res => {
    res.on('data', d => {
      process.stdout.write(d);
    })
  });

  req.on('error', error => {
    console.error(error);
  });

  req.end();
}

//export functions
module.exports = {
  passThreadControl,
  takeThreadControl,
  getThreadOwner
};
