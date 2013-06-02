//does a put request for now
//this module untested due to the same
//cross domain issues with pull
function updateRemote(objectName, jsonToUpload, callback) {
  //retrieve the registered put url
  retrieve(objectName, function(err, data) {
    var parseData = JSON.parse(data);
    
    parseData = JSON.parse(parseData);
    var putURL = parseData.urls.putURL;
    console.log(putURL, parseData);
    //var d = JSON.stringify(jsonToUpload);
    $.ajax({
      type: "PUT",
      url: putURL,
      contentType: "application/json",
      data: data
    }).done(function(e) {
      callback(e);
    });
  });
}