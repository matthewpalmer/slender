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

//index
function oneTest(first) {
  console.log(first);
  if (first == 'one') {
    console.log('one');
  }
}

function store(callback, name, jsonObj) {
  if (name && jsonObj) {
    // Put the object into storage
    localStorage.setItem(name, JSON.stringify(jsonObj)); //this isn't async!
    callback(null, JSON.stringify(jsonObj));
  } else {
    callback('invalid arguments');
  }
}

function retrieve(callback, name) {
  // Retrieve the object from storage
  if (name) {
    var retrievedObject = localStorage.getItem(name); //not async!
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    callback(null, retrievedObject);
  } else {
    callback('invalid arguments');
  }
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