var assert = require("assert");
const fn_og = require('../src/app').fn_og

  describe('GET /og', function() {
     it('should return ok status code', function () {
        assert.equal(fn_og(), "joy")
     });
  });