function store(objectName, jsonObj, callback) {
  if (objectName && jsonObj) {
    // Put the object into storage
    localStorage.setItem(objectName, JSON.stringify(jsonObj)); //this isn't async!
    callback(null, jsonObj);
  } else {
    callback('invalid arguments');
  }
}

function retrieve(objectName, callback) {
  // Retrieve the object from storage
  if (objectName) {
    var retrievedObject = localStorage.getItem(objectName); //not async!
    
    callback(null, retrievedObject);
  } else {
    callback('invalid arguments');
  }
}