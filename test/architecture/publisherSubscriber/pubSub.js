var bucefalo = require("./../../../dist/bucefalo-patterns.module.js"),
    expect = require("chai").expect;

describe('Publisher Subscriber', function() {
    var publisher;

    beforeEach(function() {
        publisher = new global.bucefalo.patterns.publisherSubscriber.pubSub.Publisher();
        publisher.doSomething = function(msg) {
            this.notify('doSomething', msg);
        };
    });

    it('should be able to lisent a publisher event', function(done) {
        publisher.subscribe('doSomething', function(data) {
            expect(data).to.equal('msg');
            done();
        });
        publisher.doSomething('msg');
    });

    it('should be able to unsubscribe for an event', function(done) {
        var subscriberOne = function(data) {
                expect(data).to.equal('msg');
                done();
            },
            subscriberTwo = function() {
                throw new Error();
            };
        publisher.subscribe('doSomething', subscriberOne);
        publisher.subscribe('doSomething', subscriberTwo);

        publisher.unsubscribe('doSomething', subscriberTwo);

        publisher.doSomething('msg');
    })
});