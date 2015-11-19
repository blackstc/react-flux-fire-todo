var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var key = require('./apiKeys');

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + key.imgur
      }
    }).then(function(response) {
      return response.json();
    });
  }
}
