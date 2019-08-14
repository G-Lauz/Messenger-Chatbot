// /utils/XMLparser.js //

'use strict';

const fs = require('fs');
const dom = require('xmldom').DOMParser;

function stringID(location, id) {
  var path = __dirname + '/../language/' + location + '.xml';
  var xml = fs.readFileSync(path);
  var doc = new dom().parseFromString(xml.toString(), 'text/xml');
  return doc.getElementById(id).childNodes[0].nodeValue;
}

module.exports = {
  stringID
};
