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