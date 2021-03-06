slender
=======

A thin front end framework for interacting with a RESTful API.

**Contents:**
- [RESTful Interactions](#restful-interactions)
- [Data Binding](#data-binding)
- [Single Page Apps](#single-page-apps)
- [Tests](#tests)

**Build and run tests with `grunt`**

Usage
=====

```js
//Requires jQuery
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="slender.min.js"></script>
```

##Data Binding

__Set up__

Instantiate a new Slender object for each model you want to save. (Note: untested for multiple objects)
```js
var sl = new Slender();
```

Any changes you make on the local side will be automatically done to the server.
  1. Register the object to be bound with slender.
  2. Pull in the most recent version of this from the API and save it to localstorage.
  3. Every time this local model is changed, slender will automatically update to the API.

__1. Register__

- `getURL` should be the url to `GET` the **whole** object required to be synced
- `putURL` is the url to `PUT` an updated version of the object to the server (Note: haven't worked out different update methods yet)
- `delURL` is the url to `DELETE` the whole object from the server and the local store

```js
//Register
sl.register('modelName', {
  getURL: 'http://url/item/:id',         //Ensure ':id' is replaced for your object
  putURL: 'http://url/item/:id',
  delURL: 'http://url/item/:id'
}, function(err, data) {
  console.log(err, data);
});
```

__2. Pull & Save__

Runs a `GET` request on the registered URL and saves the returned object to the local store. This is part of the initial 'setup stage' - it is generally only run once.

```js
//Pull
sl.pull('modelName', function(err, data) {
  //callback for when `pull` is done. 
  console.log(err, data);
});
```

__3. Update After Change__

Does a `PUT` request to the registered URL after you have changed the local store. Slender provides some convenience methods for saving to the local storage.

```js
sl.saveLocally({
  property: 'toBeChanged'
});
//Note: not sure if this should be done automatically or after method called
sl.updateRemote();
```


##RESTful Interactions

These methods follow a basic pattern of `(url, data, callback)`, where `data` is optional.

**get**: Used for GET requests. `data` is optional. Authorisation is a work in progress.
```js
slender.get('https://www.google.com/finance/info?&q=NASDAQ:AAPL', function(response) {
  console.log(data);
});
```

**post**: Used for POST requests. Need to clarify what `data` format should be.
```js
var myInfo = {
  name: 'Matthew Palmer',
  age : '17'
}

slender.post('https://.../', myInfo, function(response) {
  console.log(response);
});
```

**put**: Used for PUT requests.
```js
slender.put('https://.../', function(response) {
  console.log(response);
});
```

**delete**: Used for DELETE requests.
```js
slender.del('https://.../', function(response) {
  console.log(response);
});
```


Tests
=====

Tests are done with Jasmine in a headless browser instance. Use `grunt jasmine` to run the tests.

Resources
=========

- http://gruntjs.com/getting-started    Note: JSHint + Testing framework
- http://handlebarsjs.com/    Note: This isn't really what slender should be for. It should be HTML agnostic.
- http://qunitjs.com/
- http://pivotal.github.io/jasmine/
