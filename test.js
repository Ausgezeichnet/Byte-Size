console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {

    let structureOne = function() {
      function expandUrl() {
        const urlToExpand = $expr;
        $.getJSON(urlToExpand, response => {
          $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
        }, 'json');
      }
    };

    let isMatchOne = Structured.match(code, structureOne);
    assert.isNotOk(isMatchOne, 'Did you delete \'json\' from the end of the \'$.getJSON()\' method?');

  }); 
});