function register(nameOfObject, objToBeSaved, callback) {
  store(nameOfObject, objToBeSaved, function(err, data) {
    if (err) {
      callback('register error');
    } else {
      callback(null, data);
    }
  });
}