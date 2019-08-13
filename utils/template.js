var r = require('./XMLparser.js')

var response = {};

// Message de bienvenue
response.greeting = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, 'greeting')
  };
};

response.q_greeting = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, 'q_greeting'),
            "subtitle": r.stringID(sender_locale, 'select_button'),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, 'oui'),
                "payload": "test_force"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, 'non'),
                "payload": "work_type"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, 'help_button'),
                "payload": "help"
              }
            ]
          }
        ]
      }
    }
  };
};

//Demande si le postulant a déjà fait le test forces
response.test_force = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, 'test_force'),
            "subtitle": r.stringID(sender_locale, 'select_button'),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, 'oui'),
                "payload": "medic"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, 'non'),
                "payload": "time_since_apply"
              },
            ]
          }
        ]
      }
    }
  };
};

response.medic = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, 'medic')
  };
};

response.q_medic = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, 'select_options'),
            "subtitle": r.stringID(sender_locale, 'select_button'),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, 'traitement'),
                "payload": "delay_explanation"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, 'medical'),
                "payload": "medic_info"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, 'discuss'),
                "payload": "recruiter_contact_options"
              }
            ]
          }
        ]
      }
    }
  };
};

response.medic_info = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, 'medic_info')
  };
};

response.time_since_apply = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, 'time_since_apply'),
            "subtitle": r.stringID(sender_locale, 'select_button'),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, 'less_14'),
                "payload": "less_14_day"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, 'more_14'),
                "payload": "more_14_day"
              }
            ]
          }
        ]
      }
    }
  };
};

response.less_14_day = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, 'less_14_day')
  };
};

response.more_14_day = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, 'more_14_day')
  };
};

//******************************************************************************
//                        SMALL ACE START
//******************************************************************************

//Demande de l'âge du postulant
response.age = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "age"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "oui"),
                "payload": "citizen"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "non"),
                "payload": "out_age"
              }
            ]
          }
        ]
      }
    }
  };
};

// Réponse dans le cas où il n'a pas l'âge
response.out_age = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "out_age")
  };
};

// Demande de la citoyenneté du postulant
response.citizen = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "citizen"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "oui"),
                "payload": "scolarship"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "non"),
                "payload": "out_citizen"
              }
            ]
          }
        ]
      }
    }
  };
};

// Réponse dans le cas où le postulant n'a pas la citoyenneté
response.out_citizen = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "out_citizen")
  };
};

//Explication du niveau de scolarité requis au postulant
response.scolarship = function(sender_locale) {
  return {
    "text" : r.stringID(sender_locale, "scolarship"),
  };
};

//Question du niveau de scolarité du postulant
response.q_scolarship = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "q_scolarship"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "oui"),
                "payload": "work_type_from_small_ace"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "non"),
                "payload": "out_scolarship"
              }
            ]
          }
        ]
      }
    }
  };
};

// Réponse dans le cas où le postulant n'a pas les préalable au niveau de la scolarité
response.out_scolarship = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "out_scolarship")
  };
};

//******************************************************************************
//                        SMALL ACE END
//******************************************************************************

// Demande du type de travail recherché (Temps plein / Temps partiel)

response.work_type_from_small_ace = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "work_type_from_small_ace")
  };
};

response.q_work_type_from_small_ace = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "choose_option"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "apply_button"),
                "payload": "apply"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "explore_button"),
                "payload": "explore"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "discuss"),
                "payload": "recruiter_contact_options"
              }
            ]
          }
        ]
      }
    }
  };
};

response.work_type = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "work_type"),
  };
};

response.q_work_type = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "choose_option"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "fulltime_button"),
                "payload": "fulltime"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "parttime_button"),
                "payload": "parttime"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "explore_button"),
                "payload": "explore"
              }
            ]
          }
        ]
      }
    }
  };
};

// Temps plein, demande si le postulant veux postuler maintenant, Explorer, ou parler a un recruteur
response.fulltime = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "fulltime")
  };
};

response.q_fulltime = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "q_fulltime"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "oui"),
                "payload": "fulltime_choice"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "non"),
                "payload": "speak2recruiter"
              },
            ]
          }
        ]
      }
    }
  };
};

response.fulltime_choice = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "fulltime_choice")
  };
};

response.q_fulltime_choice = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "choose_option"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "admissibility"),
                "payload": "age"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "explore_button"),
                "payload": "explore"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "discuss"),
                "payload": "recruiter_contact_options"
              }
            ]
          }
        ]
      }
    }
  };
};

// Temps partiel, redirection vers les site internet de la Réserve
response.parttime = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "parttime")
  };
};

response.q_parttime = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "q_parttime"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "oui"),
                "payload": "parttime_info"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "non"),
                "payload": "other_question"
              },
            ]
          }
        ]
      }
    }
  };
};

response.parttime_info = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "parttime_info")
  };
};

// Le postulant désir t'il parler avec un recruteur?
response.speak2recruiter = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "speak2recruiter"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "oui"),
                "payload": "recruiter_contact_options"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "non"),
                "payload": "out_recruiter"
              }
            ]
          }
        ]
      }
    }
  };
};

// Options pour contacter un recruteur
response.recruiter_contact_options = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "recruiter_contact_options"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "phone"),
                "payload": "recruiter_phone"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "mail"),
                "payload": "recruiter_mail"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "messenger"),
                "payload": "off_bot"
              }
            ]
          }
        ]
      }
    }
  };
};

// Refus de parler avec un recruteur
response.out_recruiter = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "out_recruiter")
  };
};

// Postuler
response.apply = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "apply"),
            "image_url": "https://forcesemploi.ca/images/test6.jpg",
            "subtitle": r.stringID(sender_locale, "select_button_redirection"),
            "default_action":
            {
              "type": "web_url",
              "url": "https://forces.ca/fr/appliquer/?fbclid=IwAR0GeGUw3UfhyRA6HtbfiBtv6I1YlRzt5XF5BUsB5vG9AgTbzcTaH7KUXZ0",
              "webview_height_ratio": "full",
            },
            "buttons": [
              {
                "type": "web_url",
                "url": "https://forces.ca/fr/appliquer/?fbclid=IwAR0GeGUw3UfhyRA6HtbfiBtv6I1YlRzt5XF5BUsB5vG9AgTbzcTaH7KUXZ0",
                "title": r.stringID(sender_locale, "more_info")
              }
            ]
          }
        ]
      }
    }
  };
};

// Explorer les métier les plus en demandes
response.explore = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "explore")
  };
};

response.q_explore = function(sender_locale) {
  return {
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
          {
            "title": r.stringID(sender_locale, "technologies"),
            "image_url": "https://forcesemploi.ca/storage/images/vbLnKfPj0r3fPVniop0X59wPVMqIHpAgQLP4C0IC.jpeg",
            "subtitle": r.stringID(sender_locale, "select_button_redirection"),
            "default_action":
            {
              "type": "web_url",
              "url": "https://forcesemploi.ca/nouvelles/technologies-de-linformation",
              "webview_height_ratio": "full",
            },
            "buttons": [
              {
                "type": "web_url",
                "url": "https://forcesemploi.ca/nouvelles/technologies-de-linformation",
                "title": r.stringID(sender_locale, "more_info")
              }
            ]
          },
          {
            "title": r.stringID(sender_locale, "mecanic"),
            "image_url": "https://forcesemploi.ca/storage/images/ozHW5p32EeWyD3oYLowEyOzY1gfVxjJ003phoXgs.png",
            "subtitle": r.stringID(sender_locale, "select_button_redirection"),
            "default_action":
            {
              "type": "web_url",
              "url": "https://forcesemploi.ca/nouvelles/mecanique",
              "webview_height_ratio": "full",
            },
            "buttons": [
              {
                "type": "web_url",
                "url": "https://forcesemploi.ca/nouvelles/mecanique",
                "title": r.stringID(sender_locale, "more_info")
              }
            ]
          },
          {
            "title": r.stringID(sender_locale, "marine"),
            "image_url": "https://forcesemploi.ca/storage/images/BiemfnEe4ltueuDoKt09n6JLWhDor220IwwdhM4y.png",
            "subtitle":r.stringID(sender_locale, "select_button_redirection"),
            "default_action":
            {
              "type": "web_url",
              "url": "https://forcesemploi.ca/nouvelles/marine",
              "webview_height_ratio": "full",
            },
            "buttons": [
              {
                "type": "web_url",
                "url": "https://forcesemploi.ca/nouvelles/marine",
                "title": r.stringID(sender_locale, "more_info")
              }
            ]
          },
          {
            "title": r.stringID(sender_locale, "tactic_op"),
            "image_url": "https://forcesemploi.ca/storage/images/avMzI47D4NhU7SleqxAqYNRV4KKFlT1c2i4hi8Bk.jpeg",
            "subtitle":r.stringID(sender_locale, "select_button_redirection"),
            "default_action":
            {
              "type": "web_url",
              "url": "https://forcesemploi.ca/nouvelles/operations-tactiques-et-securite",
              "webview_height_ratio": "full",
            },
            "buttons": [
              {
                "type": "web_url",
                "url": "https://forcesemploi.ca/nouvelles/operations-tactiques-et-securite",
                "title": r.stringID(sender_locale, "more_info")
              }
            ]
          },
          {
            "title": r.stringID(sender_locale, "admin_log"),
            "image_url": "https://forcesemploi.ca/storage/images/6PwhiHU3xbrWNkEE9PtGDkKOTYGq5v66tnDRC9bZ.jpeg",
            "subtitle":r.stringID(sender_locale, "select_button_redirection"),
            "default_action":
            {
              "type": "web_url",
              "url": "https://forcesemploi.ca/nouvelles/administration-et-logistique",
              "webview_height_ratio": "full",
            },
            "buttons": [
              {
                "type": "web_url",
                "url": "https://forcesemploi.ca/nouvelles/administration-et-logistique",
                "title": r.stringID(sender_locale, "more_info")
              }
            ]
          },
          {
            "title": r.stringID(sender_locale, "discuss_recruiter"),
            "image_url": "https://scontent.fymq2-1.fna.fbcdn.net/v/t1.0-9/64328327_2361763970701720_1330930482933661696_n.jpg?_nc_cat=108&_nc_oc=AQkvjturKpmibBHe5qloTjcaQf8PhZSvCWtbUZjBb4Q8Dhlh59GgaR7RGjHECvcRfos&_nc_ht=scontent.fymq2-1.fna&oh=65c2fde8be0328745d49a93df2d27f98&oe=5DA634D5",
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "discuss"),
                "payload": "recruiter_contact_options"
              }
            ]
          }
        ]
      }
    }
  };
};

response.explore_choice = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "explore_choice")
  };
};

response.q_explore_choice = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "choose_option"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "admissibility"),
                "payload": "age"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "discuss"),
                "payload": "recruiter_contact_options"
              }
            ]
          }
        ]
      }
    }
  };
};

// Contacter un recruteur par téléphone.
response.recruiter_phone = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "recruiter_phone")
  };
};

response.link_to_reserve = function(sender_locale) {
  return {
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
           {
            "title": r.stringID(sender_locale, "talk2recruiter"),
            "image_url": "https://scontent.fymq2-1.fna.fbcdn.net/v/t1.0-9/64328327_2361763970701720_1330930482933661696_n.jpg?_nc_cat=108&_nc_oc=AQkvjturKpmibBHe5qloTjcaQf8PhZSvCWtbUZjBb4Q8Dhlh59GgaR7RGjHECvcRfos&_nc_ht=scontent.fymq2-1.fna&oh=65c2fde8be0328745d49a93df2d27f98&oe=5DA634D5",
            "subtitle": r.stringID(sender_locale, "image_redirection"),
            "default_action":
            {
              "type": "web_url",
              "url": "https://forces.ca/fr/parlez-a-un-recruteur",
              "webview_height_ratio": "full",
            }
          }
        ]
      }
    }
  };
};

//Contacter un recruteur par courriel
response.recruiter_mail = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "recruiter_mail")
  };
};

// Continuer la discussion messenegr avec un recruteur
response.recruiter_messenger = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "recruiter_messenger")
  };
};

response.delay_explanation = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "delay_explanation")
  };
};

response.q_delay_explanation = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "q_delay_explanation"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "discuss"),
                "payload": "recruiter_contact_options"
              }
            ]
          }
        ]
      }
    }
  };
};

response.help = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "help")
  };
};

response.other_question = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "other_question"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "oui"),
                "payload": "AED"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "non"),
                "payload": "good_bye"
              }
            ]
          }
        ]
      }
    }
  };
};

response.good_bye = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "good_bye")
  };
};

response.talk2bot = function(sender_locale) {
  return {
    "attachment" : {
      "type": "template",
      "payload": {
        "template_type": "generic",
        "elements": [
          {
            "title": r.stringID(sender_locale, "talk2bot"),
            "subtitle": r.stringID(sender_locale, "select_button"),
            "buttons": [
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "oui"),
                "payload": "get_started"
              },
              {
                "type": "postback",
                "title": r.stringID(sender_locale, "non"),
                "payload": "off_bot"
              }
            ]
          }
        ]
      }
    }
  };
};

response.out_of_context = function(sender_locale) {
  return {
      "text": r.stringID(sender_locale, "out_of_context")
  };
};

response.AED = function(sender_locale) {
  return {
    "text": r.stringID(sender_locale, "aed")
  };
};

module.exports = response;
