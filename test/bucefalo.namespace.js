var bucefalo = require("./../dist/bucefalo-patterns.module.js"),
    expect = require("chai").expect;

describe("Bucefalo.namespace", function() {
    it("should allow the creation of the namespace", function() {
        bucefalo.namespace("hoy.hola", {
            a: 1
        });
        expect(hoy.hola).to.be.ok;
        expect(hoy.hola).to.have.property("a").that.equals(1);
    });

    it("should allow the creation of the namespace without parameter", function() {
        bucefalo.namespace("hoy1.hola1");
        expect(hoy1.hola1).to.be.ok;
    });

    it("should allow the creation of the namespace without parameter", function() {
        bucefalo.namespace("hoy.hola.mundo2", {
            z: 1
        });
        expect(hoy.hola.mundo2).to.be.ok;
        expect(hoy.hola.mundo2).to.have.property("z").that.equals(1);
    });

    it("should allow to add new variables to a namespace", function() {
        bucefalo.patterns.something = {};
        bucefalo.namespace('bucefalo.patterns.publisherSubscriber.eventManager');
        expect(bucefalo.patterns.publisherSubscriber.eventManager).to.be.ok;
        expect(bucefalo.patterns.something).to.be.ok;
    });
});