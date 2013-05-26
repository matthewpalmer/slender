slender
=======

A thin front end framework for interacting with a RESTful API.

**Contents:**
- [RESTful Interactions](#restful-interactions)
- [Data Binding](#data-binding)
- [Single Page Apps](#single-page-apps)
- [Tests](#tests)

Usage
=====

```js
//Requires jQuery
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="slender.min.js"></script>
```

##RESTful Interactions

These are the most common ways of using slender. They are based on jQuery's `$.ajax`. 
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
slender.delete('https://.../', function(response) {
  console.log(response);
});
```


##Data Binding
Any changes you make on the local side will be automatically done to the server.

```js
//Bind
slender.bind(URL, METHOD, ID|OBJ);    //Most likely a PUT request
//Make some changes to the local model
function makeChanges(ID) {            //This *only* changes the model, the views still need to be worked out.
  ID.age = '18';                      //Or could use some kind of evented system. i.e., ID.on('change').update();
}
//Update the remote model
slender.update();                     //.update() once changes have been made. 
```

##Single Page Apps
Helpful additions if you are doing a single page app.

Tests
=====

Need to decide on a proper testing method.

Resources
=========

- http://gruntjs.com/getting-started    Note: JSHint + Testing framework
- http://handlebarsjs.com/    Note: This isn't really what slender should be for. It should be HTML agnostic.
- http://qunitjs.com/
- http://pivotal.github.io/jasmine/
