var bucefalo = require("./../../../dist/bucefalo-patterns.module.js"),
    expect = require("chai").expect;

describe('Publisher Subscriber Manager', function() {
    var eventMng;

    beforeEach(function() {
        eventMng = new global.bucefalo.patterns.publisherSubscriber.eventManager.createEventManager();
    });

    it('should be able to lisent a publisher event', function(done) {
        eventMng.subscribe("gustavo", function gritar(palabra) {
            expect(palabra).to.equal("JavaScript es lo más");
        }); 

        eventMng.subscribe("gustavo", function refunfunear(palabra) {
            expect(palabra).to.equal("JavaScript es lo más");
        });

        eventMng.subscribe("mauricio", function susurrar(palabra) {
            expect(palabra).to.equal("Java es lo menos");
            done();
        });

        eventMng.publish("gustavo", "JavaScript es lo más"); 
        eventMng.publish("mauricio", "Java es lo menos");

    });
});

describe('Async Publisher Subscriber Manager', function() {
    var eventMng;

    beforeEach(function() {
        eventMng = new global.bucefalo.patterns.publisherSubscriber.asyncEventManager.createEventManager();
    });

    it('should be able to lisent a publisher event', function(done) {
        eventMng.subscribe("gustavo", function gritar(palabra) {
            expect(palabra).to.equal("JavaScript es lo más");
        }); 

        eventMng.subscribe("gustavo", function refunfunear(palabra) {
            expect(palabra).to.equal("JavaScript es lo más");
        });

        eventMng.subscribe("mauricio", function susurrar(palabra) {
            expect(palabra).to.equal("Java es lo menos");
            done();
        });

        eventMng.publish("gustavo", "JavaScript es lo más"); 
        eventMng.publish("mauricio", "Java es lo menos");

    });
});