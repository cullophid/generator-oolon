'use strict';
var request = require('request'),
  config = require('config'),
  tokenize = require('url-builder').tokenise,
  when = require('when'),
  host = 'http://localhost '+ config.port;

exports.headers = {
  'content-type' : 'application/json'
};

// ## Methods
exports.get = function (url, params) {
  return when.promise(function (resolve) {
    url = host + tokenize(url, params, true);
    console.log('TEST: GET', url);
    request({
      method: 'GET',
      uri: url,
      json : true,
      headers: exports.headers
    }, function(e, r) {
      if (e) {
        console.log('ERROR');
        console.log(e);
      }
      return resolve(r);
    });
  });
};

exports.post = function (url, params, body) {
  return when.promise(function (resolve) {
    url = host +  tokenize(url, params, true);;
    console.log('TEST : POST', url);
    request({
      method: 'POST',
      uri: url,
      json : body,
      headers: exports.headers
    }, function(e, r) {
      return resolve(r);
    });
  });
};
