const toBeTested = require("./exercice.js");
const { should } = require("chai");

describe("exercice", function () {
  it("should exist", function () {
    should().exist(toBeTested);
  });

  it("should be a function", function () {
    toBeTested.should.be.a("function");
  });

  it("should return true", function () {
    toBeTested().should.eql(true);
  });
});
