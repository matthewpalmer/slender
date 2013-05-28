//index
function oneTest(first) {
  console.log(first);
  if (first == 'one') {
    console.log('one');
  }
}//The methods for interacting with the REST API
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
*///Reflect local changes to the API
/*
  have a model that is scraped in from api on page load
  this will persist in client side (HTML5 storage?)
  
  when the local model is changed (model.on('change')?)
  change this in the api
  
  this may need to be heavily set by the user to get the
  right api urls etc
*/
