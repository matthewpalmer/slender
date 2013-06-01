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