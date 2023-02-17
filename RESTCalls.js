'use strict';

var utils = require('../utils/writer.js');
var RESTCalls = require('../service/RESTCallsService');

module.exports.active_cardGET = function active_cardGET (req, res, next, apiKey) {
  RESTCalls.active_cardGET(apiKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.application Status Update = function application Status Update (req, res, next, body, apiKey) {
  RESTCalls.application Status Update(body, apiKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.check_statusGET = function check_statusGET (req, res, next, apiKey, applicationID) {
  RESTCalls.check_statusGET(apiKey, applicationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edit Application = function edit Application (req, res, next, apiKey) {
  RESTCalls.edit Application(apiKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.edit B2B2C Application = function edit B2B2C Application (req, res, next, apiKey) {
  RESTCalls.edit B2B2C Application(apiKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list_applicationGET = function list_applicationGET (req, res, next, apiKey, type) {
  RESTCalls.list_applicationGET(apiKey, type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.login_tokenPOST = function login_tokenPOST (req, res, next, apiKey) {
  RESTCalls.login_tokenPOST(apiKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resume Application = function resume Application (req, res, next, body, apiKey) {
  RESTCalls.resume Application(body, apiKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.single_applicationGET = function single_applicationGET (req, res, next, apiKey, applicationID) {
  RESTCalls.single_applicationGET(apiKey, applicationID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.single_cardGET = function single_cardGET (req, res, next, apiKey, userUniqueId, month) {
  RESTCalls.single_cardGET(apiKey, userUniqueId, month)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submit Application = function submit Application (req, res, next, apiKey) {
  RESTCalls.submit Application(apiKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submit Application B2B2C = function submit Application B2B2C (req, res, next, apiKey) {
  RESTCalls.submit Application B2B2C(apiKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.view Card Detail = function view Card Detail (req, res, next, body, apiKey) {
  RESTCalls.view Card Detail(body, apiKey)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
