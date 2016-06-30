'use strict';

var fs = require('fs');
var request = require('request');
var _ = require('underscore');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var args = {
  baseurl: 'https://127.0.0.1',
  file: 'sources.tsv'
};

function addFBSource(name, id) {
  request.post(args.baseurl + '/api/v1/source', { form: { nickname: name, media: 'facebook', url: 'http://facebook.com/' + id } },
               function(err, res) {
                 if (err) return console.log(err);
  });
}


_.each(process.argv, function(arg) {
  arg = arg.split('=');
  if (_.contains(['--file', '--baseurl'], arg[0])) {
    args[arg[0].replace('--', '')] = arg[1];
  }
});

var lineReader = require('readline').createInterface({
  input: fs.createReadStream(args['file']),
  terminal: false
});

lineReader.on('line', function(line) {
  var data = line.split('\t');
  addFBSource(data[1], data[2]);
});
