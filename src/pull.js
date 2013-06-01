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