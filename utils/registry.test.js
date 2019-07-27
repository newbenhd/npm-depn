const {expect} = require("chai");
const api = require("./registry");

describe('public registry api test', function () {
  describe('GET api url without any endpoint', function () {
    it('should return data with info about registry', function (done) {
      api.getPackage(undefined,undefined, (err, res)=>{
        expect(res.status).to.equal(200);
        done();
      });
    });
  });
  describe('GET api url with package name', function () {
    it('should return data with info about the package', function (done) {
      api.getPackage('express', undefined, (err, res)=>{
        expect(res.status).to.equal(200);
        done();
      });
    });
    it('should return err with wrong package name', function (done) {
      api.getPackage('asdfjklajsdf', undefined, (err, res)=>{
        expect(err.code).to.equal(500);
        done();
      })
    });
    it('should return res with info about the package and version', function(done){
      api.getPackage('express', '4.1.1', (err, res)=>{
        expect(res.status).to.equal(200);
        done();
      })
    });
    it("should return err with info about the package and wrong version", function(done){
      api.getPackage('express', '10.1.1', (err, res)=>{
        expect(err.code).to.equal(500);
        done();
      })
    });
    it('should return err with info about only version', function(done){
      api.getPackage(undefined, '4.1.1', (err, res)=>{
        expect(err.code).to.equal(500);
        done();
      });
    });
  });
});

