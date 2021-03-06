//Unfortunately the localstore tests are somewhat
//reliant on eachother. It would be better to have 
//them run individually, but this is difficult to do
//because localStorage isn't async.
//I hate the way Jasmine makes me do async tests.

describe('localstore', function() {
  it('should store & retrieve json objects to the local storage', function() {
    var flag, storedVal, retrievedVal, didMatch;
    runs(function() {
      flag = false;

      store('slTestObjectLocalstore', { one: 3, two: 2, three: 3 }, function(err, data) {
        if (!err) {
          storedVal = data;
        } else {
          storedVal = 'error in store';
        }
      });

      retrieve('slTestObjectLocalstore', function(err, data) {
        if (!err) {
          retrievedVal = data;
        } else {
          retrievedVal = 'error in retrieve';
        }
      });
      if (JSON.stringify(storedVal) === retrievedVal) {
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
  it('should overwrite objects in the local storage', function() {
    var flag, storedVal, retrievedVal, didMatch;
    runs(function() {
      var updatedObject = { 'one': 1, 'two': 2, 'three': 3 }; //slightly different to other
      flag = false;

      store('slTestObjectLocalstore', updatedObject, function(err, data) {
        if (!err) {
          storedVal = data;
        } else {
          storedVal = 'error in store';
        }
      });  //an updated object

      retrieve('slTestObjectLocalstore', function(err, data) {
        if (!err) {
          retrievedVal = data;
        } else {
          retrievedVal = 'error in retrieve';
        }
      });
      if (JSON.stringify(updatedObject) == retrievedVal) {
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