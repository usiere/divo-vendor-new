'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _catController = require('./cat-controller');

var controller = _interopRequireWildcard(_catController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


var jwt = require("express-jwt");
var jwksRsa = require("jwks-rsa");

var authConfig = {
  domain: "dev-xuvviu1o.auth0.com",
  audience: "http://localhost:8080"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-xuvviu1o.auth0.com
var checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://' + authConfig.domain + '/.well-known/jwks.json'
  }),

  audience: authConfig.audience,
  issuer: 'https://' + authConfig.domain + '/',
  algorithm: ["RS256"]
});

router.post('/cat', checkJwt, controller.create);
router.get('/cat', checkJwt, controller.index);
router.delete('/cat/:id', checkJwt, controller.remove);
router.get('/cat/:id', checkJwt, controller.getone);
router.put('/cat/:id', checkJwt, controller.update);

exports.default = router;