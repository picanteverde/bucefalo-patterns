var bucefalo = require("./../dist/bucefalo-patterns.module.js"),
    expect = require("chai").expect;

var Persona = function(){
    return this;
};
Persona.prototype.hablar = function(){
    return  "hola";
}

describe("test persona", function() {
    it("crear gustavo hablar", function() {
        var a = new Persona();

        expect(a.hablar()).to.equal('hola');
    });

});