//Reflect local changes to the API
/*
  have a model that is scraped in from api on page load
  this will persist in client side (HTML5 storage?)
  
  when the local model is changed (model.on('change')?)
  change this in the api
  
  this may need to be heavily set by the user to get the
  right api urls etc
*/


function hello() {
  return 'hello';
}

//No idea if this is the proper way
function Slender(foo) {
  this.pull = pull;
  this.updateRemote = updateRemote;
  this.register = register;
  this.localstore = {
    store: store,
    retrieve: retrieve
  };
}

function store(objectName, jsonObj, callback) {
  if (objectName && jsonObj) {
    // Put the object into storage
    localStorage.setItem(objectName, JSON.stringify(jsonObj)); //this isn't async!
    callback(null, JSON.stringify(jsonObj));
  } else {
    callback('invalid arguments');
  }
}

function retrieve(objectName, callback) {
  // Retrieve the object from storage
  if (objectName) {
    var retrievedObject = localStorage.getItem(objectName); //not async!
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    callback(null, retrievedObject);
  } else {
    callback('invalid arguments');
  }
}

//Pull is untested because it's way difficult to test this
//Cross domain requests suck
//This module contains awful code; refactor ASAP.
function pull(objectName, callback) {
  //find the objectName in that object
  //$.ajax get the remote object
  console.log('we are in the pull');
  retrieve(objectName, function(err, data) {
    if (err) {
      callback('pull error');
    } else {
      //console.info('data is ', data);
      var parsedData = JSON.parse(data);
      console.log('dd', parsedData, data);
      var urlToGET = parsedData.urls.getURL;
      //console.info(urlToGET, data);
      console.info($);
      $.get(urlToGET, {}, function(retData) {
        console.info('pull was performed. ', retData);
        //pull also saves to the local store
        parsedData.data = JSON.parse(retData);
        store(objectName, parsedData, function(err, data) {
          console.info('store done');
          callback(null, data);
        });
      });
      //console.info('after jquery');
    }
  });

  
}

function register(nameOfObject, objToBeSaved, callback) {
  store(nameOfObject, objToBeSaved, function(err, data) {
    if (err) {
      callback('register error');
    } else {
      callback(null, data);
    }
  });
}

//The methods for interacting with the REST API
//requires jquery!
//make data optional
//check jquery syntax/method/arg order
function get(url, callback) {
  $.get(url, callback);
}

function post(url, data, callback) {
  $.post(url, data, callback);
}

function put(url, data, callback) {
  $.put(url, data, callback);
}

function del(url, data, callback) {
  $.del(url, data, callback);
}

/*
module.exports = {
  get: get,
  post: post,
  put: put,
  del: del
};
*/

//does a put request for now
//this module untested due to the same
//cross domain issues with pull
function updateRemote(objectName, jsonToUpload, callback) {
  //retrieve the registered put url
  retrieve(objectName, function(err, data) {
    var parseData = JSON.parse(data);
    var putURL = parseData.urls.put;
    var d = JSON.stringify(jsonToUpload);
    $.ajax({
      type: "PUT",
      url: putURL,
      contentType: "application/json",
      data: d
    }).done(function(e) {
      callback(e);
    });
  });
}