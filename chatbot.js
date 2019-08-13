// chatbot.js //

const request = require('request');
const reply = require('./utils/template');
const api = require('./utils/api');
const sendAPI = require('./utils/sendapi');
const handoverProtocol = require('./utils/handover-protocol');
var r = require('./utils/XMLparser.js');

const expressBot = /\bbot\b|\brobot\b|\bchatbot\b/i;

var methods = {};

methods.inboxPassThreadControl = function(event) {
  console.log('AED');
}

methods.receivedStandbyMessage = function(event) {
  api.callGetLocaleAPI(event, methods.handleStandbyMessage);
};

methods.handleStandbyMessage = function(event ,sender) {
  var sender_locale = sender.locale;
  var sender_psid = sender.psid;
  var received_message = event.message;

  let response;
  let regextest;

  if(received_message.text){
    regextest = expressBot.test(received_message.text);

    if(regextest){
      handoverProtocol.takeThreadControl(sender_psid);

      response = reply.talk2bot(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
    }
  }
};

methods.receivedMessage = function(event){
  api.callGetLocaleAPI(event, methods.handleMessage);
};

// Handle message events
methods.handleMessage = function(event, sender) {
  var sender_locale = sender.locale;
  var sender_psid = sender.psid;
  var received_message = event.message;

  let response;

  // Check if message contains text
  if (received_message.text) {

    //Create the payload for a basic text message
    response = reply.out_of_context(sender_locale);
    sendAPI.call(sender_psid, response, () => {
      handoverProtocol.passThreadControl(sender_psid, 263902037430900);
    });
  }
};

methods.receivedPostback = function(event){
  api.callGetLocaleAPI(event, methods.handlePostback);
}

// Handles messaging_postbacks events
methods.handlePostback = function(event, sender) {
  var sender_locale = sender.locale;
  var sender_psid = sender.psid;
  var received_postback = event.postback;

  let response;

  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  switch(payload) {

    case 'get_started':
      response = reply.greeting(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.q_greeting(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'test_force':
      response = reply.test_force(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'medic':
      response = reply.medic(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.q_medic(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'medic_info':
      response = reply.medic_info(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.q_medic(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'time_since_apply':
      response = reply.time_since_apply(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'less_14_day':
      response = reply.less_14_day(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'more_14_day':
      response = reply.more_14_day(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.speak2recruiter(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'age':
      response = reply.age(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'citizen':
      response = reply.citizen(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'out_age':
      response = reply.out_age(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'scolarship':
      response = reply.scolarship(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.q_scolarship(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'out_citizen':
      response = reply.out_citizen(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'work_type':
      response = reply.work_type(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.q_work_type(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'work_type_from_small_ace':
      response = reply.work_type_from_small_ace(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.q_work_type_from_small_ace(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'out_scolarship':
      response = reply.out_scolarship(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'fulltime':
      response = reply.fulltime(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.q_fulltime(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'fulltime_choice':
      response = reply.fulltime_choice(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.q_fulltime_choice(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'parttime':
      response = reply.parttime(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.q_parttime(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'parttime_info':
      response = reply.parttime_info(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.link_to_reserve(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'speak2recruiter':
      response = reply.speak2recruiter(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'recruiter_contact_options':
        response = reply.recruiter_contact_options(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
        break;

    case 'out_recruiter':
        response = reply.out_recruiter(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
        break;

    case 'apply':
        response = reply.apply(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
        break;

    case 'explore':
        response = reply.explore(sender_locale);
        sendAPI.call(sender_psid, response, () => {
          response = reply.q_explore(sender_locale);
          sendAPI.call(sender_psid, response, () => {
            response = reply.explore_choice(sender_locale);
            sendAPI.call(sender_psid, response, () => {
              response = reply.q_explore_choice(sender_locale);
              sendAPI.call(sender_psid, response, () => {});
            });
          });
        });
        break;

    case 'recruiter_phone':
      response = reply.recruiter_phone(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'recruiter_mail':
      response = reply.recruiter_mail(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'delay_explanation':
      response = reply.delay_explanation(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        response = reply.q_medic(sender_locale);
        sendAPI.call(sender_psid, response, () => {});
      });
      break;

    case 'help':
      response = reply.help(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'other_question':
      response = reply.other_question(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'good_bye':
      response = reply.good_bye(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'AED':
      response = reply.AED(sender_locale);
      sendAPI.call(sender_psid, response, () => {});
      break;

    case 'off_bot':
      response = reply.recruiter_messenger(sender_locale);
      sendAPI.call(sender_psid, response, () => {
        handoverProtocol.passThreadControl(sender_psid, 263902037430900);
      });
      break;

    default:
      console.log("Payload non reconnu: " + payload)
  }
};

module.exports = methods;
