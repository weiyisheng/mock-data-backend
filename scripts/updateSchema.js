// require("babel-register")
// require("babel-polyfill")

var fs = require('fs')
var path = require('path')
var introspectionQuery = require('./introspectionQuery')

var request = require('superagent')

request.post("localhost:4000/graphql")
.send({query: introspectionQuery })
.end(function(err, response){
  if(err) {
    console.error("Error occured: ", err)
  } else {
    var result = response.body
    if (result.errors) {
      console.error(
        'ERROR introspecting schema: ',
        JSON.stringify(result.errors, null, 2)
      );
    } else {
      fs.writeFileSync(
        path.join(__dirname, '../build/schema.json'),
        JSON.stringify(result, null, 2)
      );
    }
  }
})
