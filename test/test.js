var request = require('supertest');
var app = require('../app.js');
var assert = require("assert");


describe('app js test', function() {
  describe('GET /', function() {
     it('should respond to GET with empty path', function (done) {
        request(app) 
               .get('/')
               .expect(200).
               expect(res => {
                assert.equal(res.text, 'Hello World!');
              })
               .end(done) 
     });
  });
});