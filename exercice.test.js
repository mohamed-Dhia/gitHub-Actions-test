const toBeTested = require("./exercice.js")
const { should } = require("chai")

describe('exercice', function () {

    it('should exist', function () {
        should().exist(toBeTested);
    });

    it('should be a function', function () {
        toBeTested.should.be.a("function");
    });

    // Note: Any comparison here needs to use eql. Otherwise Mocha will test for
    // exact equality (identity)

    it('should return true', function () {
        toBeTested().should.eql(true)
    });
});
