describe('register', function() {
  it('should save the object from input to the localstore', function() {
    var flag, storedVal, retrievedVal, didMatch;
    var urlsToBeSaved = {
      getURL: 'URL/get',
      putURL: 'URL/put',
      delURL: 'URL/del'
    };
    var newRegisterObj = {
      urls: urlsToBeSaved
    };
    runs(function() {
      flag = false;
      register('slTestObjectRegister', newRegisterObj, function(err, data) { 
      //finished
      //console.info(err, data);
      //expect(data).toBeOkay();    //not sure if actually valid

      });
    retrieve('slTestObjectRegister', function(err, data) {
        if (!err) {
          retrievedVal = data;
        } else {
          retrievedVal = 'error in retrieve';
        }
      });    //This is not the right name
    console.info(JSON.stringify(newRegisterObj), retrievedVal);
      if (JSON.stringify(newRegisterObj) === retrievedVal) {
        flag = true;
        didMatch = true;
      } else {
        flag = true;
        didMatch = false;
      }
    });
    waitsFor(function() {
      return flag;
    }, 'The flag should be set true after things match', 2000);
    runs(function() {
      expect(flag).toBe(true);
      expect(didMatch).toBe(true);
    });
  });
});