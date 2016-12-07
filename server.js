'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.start = start;
exports.stop = stop;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = undefined;
//app.use(cors())
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({ extended: true }));

app.all('*', function (req, res) {
  return res.send(_extends({ msg: 'Hello World!' }, req.body, req.query));
});

function start() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { port: process.env.SERVER_PORT };

  return new Promise(function (resolve) {
    return server = app.listen(config.port, function () {
      return resolve({ server: server, stop: stop });
    });
  });
}
function stop() {
  return new Promise(function (resolve) {
    return server.close(resolve);
  });
}
