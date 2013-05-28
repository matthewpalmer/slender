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