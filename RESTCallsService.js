'use strict';


/**
 * active-card
 *
 * apiKey String 
 * no response value expected for this operation
 **/
exports.active_cardGET = function(apiKey) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Application Status Update
 *
 * body Application-status-update 
 * apiKey String 
 * no response value expected for this operation
 **/
exports.application Status Update = function(body,apiKey) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * check-status
 *
 * apiKey String 
 * applicationID String 
 * no response value expected for this operation
 **/
exports.check_statusGET = function(apiKey,applicationID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit Application
 *
 * apiKey String 
 * returns edit-application
 **/
exports.edit Application = function(apiKey) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "partnerCustomerInformationCity" : "partnerCustomerInformationCity",
  "partnerWebsite" : "partnerWebsite",
  "partnerInitialCreditLimit" : 5,
  "partnerSIC" : 6,
  "gender" : "Male",
  "partnerBusinessName" : "partnerBusinessName",
  "partnerBusinessDescription" : "partnerBusinessDescription",
  "partnerCustomerInformationHomeStreet2" : "partnerCustomerInformationHomeStreet2",
  "partnerBusinessFax" : 1,
  "partnerDateIncorporated" : "partnerDateIncorporated",
  "partnerBusinessAddress" : "partnerBusinessAddress",
  "partnerGeneralInformationState" : "AL",
  "partnercustomerInformationZip" : 5,
  "partnerCustomerInformationDOB" : "partnerCustomerInformationDOB",
  "applicationID" : "applicationID",
  "partnerCustomerInformationPercentOwnership" : 2,
  "partnerBusinessType" : "LLC",
  "partnerCustomerInformationFirstName" : "partnerCustomerInformationFirstName",
  "partnerGeneralInformationCity" : "partnerGeneralInformationCity",
  "partnerCustomerInformationHomeAddress" : "partnerCustomerInformationHomeAddress",
  "haveInsurance" : true,
  "partnerStreet2" : "partnerStreet2",
  "partnerGeneralInformationZip" : 0,
  "partnerOwnership" : "public",
  "partnerCustomerInformationLastName" : "partnerCustomerInformationLastName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit Application
 *
 * apiKey String 
 * returns edit-b2b2c-application
 **/
exports.edit B2B2C Application = function(apiKey) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "partnerCustomerInformationCity" : "partnerCustomerInformationCity",
  "partnerWebsite" : "partnerWebsite",
  "partnerInitialCreditLimit" : 5,
  "partnerSIC" : 6,
  "gender" : "Male",
  "partnerBusinessName" : "partnerBusinessName",
  "partnerBusinessDescription" : "partnerBusinessDescription",
  "partnerCustomerInformationHomeStreet2" : "partnerCustomerInformationHomeStreet2",
  "partnerBusinessFax" : 1,
  "partnerDateIncorporated" : "partnerDateIncorporated",
  "partnerBusinessAddress" : "partnerBusinessAddress",
  "partnerGeneralInformationState" : "AL",
  "partnercustomerInformationZip" : 5,
  "partnerCustomerInformationDOB" : "partnerCustomerInformationDOB",
  "applicationID" : "applicationID",
  "partnerCustomerInformationPercentOwnership" : 2,
  "partnerBusinessType" : "LLC",
  "partnerCustomerInformationFirstName" : "partnerCustomerInformationFirstName",
  "partnerGeneralInformationCity" : "partnerGeneralInformationCity",
  "partnerCustomerInformationHomeAddress" : "partnerCustomerInformationHomeAddress",
  "haveInsurance" : true,
  "partnerStreet2" : "partnerStreet2",
  "partnerGeneralInformationZip" : 0,
  "partnerOwnership" : "public",
  "partnerCustomerInformationLastName" : "partnerCustomerInformationLastName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * list-application
 *
 * apiKey String 
 * type String 
 * no response value expected for this operation
 **/
exports.list_applicationGET = function(apiKey,type) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Login
 *
 * apiKey String 
 * returns Login
 **/
exports.login_tokenPOST = function(apiKey) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Resume Application
 *
 * body Resume-application 
 * apiKey String 
 * no response value expected for this operation
 **/
exports.resume Application = function(body,apiKey) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * single-application
 *
 * apiKey String 
 * applicationID String 
 * no response value expected for this operation
 **/
exports.single_applicationGET = function(apiKey,applicationID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * single-card
 *
 * apiKey String 
 * userUniqueId String 
 * month String 
 * no response value expected for this operation
 **/
exports.single_cardGET = function(apiKey,userUniqueId,month) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Submit Application
 *
 * apiKey String 
 * returns submit-application
 **/
exports.submit Application = function(apiKey) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "partnerCustomerInformationCity" : "partnerCustomerInformationCity",
  "applicationType" : "applicationType",
  "partnerWebsite" : "partnerWebsite",
  "partnerInitialCreditLimit" : 2,
  "partnerSIC" : 1,
  "partnerBusinessPhone" : 5,
  "partnerTermsConditions" : true,
  "gender" : "Male",
  "Articles" : [ "", "" ],
  "DL_Front" : [ "", "" ],
  "partnerBusinessName" : "partnerBusinessName",
  "partnerBusinessDescription" : "partnerBusinessDescription",
  "partnerCustomerInformationHomeStreet2" : "partnerCustomerInformationHomeStreet2",
  "partnerBusinessFax" : 5,
  "partnerDateIncorporated" : "partnerDateIncorporated",
  "partnerBusinessAddress" : "partnerBusinessAddress",
  "partnerGeneralInformationState" : "AL",
  "partnercustomerInformationZip" : 7,
  "partnerCustomerInformationDOB" : "partnerCustomerInformationDOB",
  "partnerTaxID" : 0.8008281904610115,
  "partnerCustomerInformationPercentOwnership" : 9,
  "partnerBusinessType" : "LLC",
  "partnerCustomerInformationFirstName" : "partnerCustomerInformationFirstName",
  "partnerCustomerInformationSSN" : "partnerCustomerInformationSSN",
  "partnerGeneralInformationCity" : "partnerGeneralInformationCity",
  "partnerCustomerInformationHomeAddress" : "partnerCustomerInformationHomeAddress",
  "partnerCustomerInformationDrivingLicenseNumber" : "partnerCustomerInformationDrivingLicenseNumber",
  "haveInsurance" : true,
  "partnerCustomerInformationLicenseDate" : "partnerCustomerInformationLicenseDate",
  "EIN" : [ "", "" ],
  "partnerStreet2" : "partnerStreet2",
  "SSNCard" : [ "", "" ],
  "DL_Back" : [ "", "" ],
  "partnerGeneralInformationZip" : 6,
  "partnerOwnership" : "public",
  "partnerCustomerSupportEmail" : "partnerCustomerSupportEmail",
  "partnerCustomerInformationLastName" : "partnerCustomerInformationLastName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Submit Application B2B2C
 *
 * apiKey String 
 * returns submit-b2b2c-application
 **/
exports.submit Application B2B2C = function(apiKey) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "applicationType" : "B2B2C",
  "DL_Front" : [ "", "" ],
  "customerCurrentCity" : "customerCurrentCity",
  "customerMiddleName" : "customerMiddleName",
  "customerPosition" : "customerPosition",
  "customerEmployerName" : "customerEmployerName",
  "customerPersonalPhone" : 5,
  "customerEmail" : "customerEmail",
  "customerDrivingLicenseNumber" : 6,
  "customerYearsInJob" : 7,
  "customerLastName" : "customerLastName",
  "customerMonthlyIncome" : 9,
  "customerHomeType" : "Own",
  "customerSourceOtherIncome" : "customerSourceOtherIncome",
  "customerHaveInsurance" : true,
  "customerCurrentYears" : 5,
  "customerGender" : "Male",
  "customerCurrentStreetAddress" : "customerCurrentStreetAddress",
  "customerDateOfBirth" : "customerDateOfBirth",
  "DL_Back" : [ "", "" ],
  "customerCurrentZip" : 1,
  "customerSSN" : 0,
  "customerOtherIncome" : 3,
  "customerFirstName" : "customerFirstName",
  "initialCreditLimit" : 2,
  "customerMaidenName" : "customerMaidenName",
  "customerCurrentState" : "AL",
  "customerTermsConditions" : true,
  "customerBusinessPhone" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View card Detail
 *
 * body View-card-detail 
 * apiKey String 
 * no response value expected for this operation
 **/
exports.view Card Detail = function(body,apiKey) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

