describe('Publisher Subscriber', function() {
    describe('Publisher', function() {
        var publisher = new bucefalo.patterns.publisherSubscriber.pubSub.Publisher();
        it('should allow to add subcribers', function() {
            publisher.subcribe('event', function(data) {
                console.log('something');
            });
            expect(publisher.subcribers.length).equal.to(1);
        });
    });

    describe('Subcriber', function() {
        var publisher = new bucefalo.patterns.publisherSubscriber.pubSub.Publisher();
        publisher.doSomething = function(msg) {
            this.notify('doSomething',msg);
        };

        it('should be able to lisent a publisher event', function(done) {
            publisher.subcribe('doSomething', function(data) {
                expect(data).equal.to('msg');
                done();
            });
            publisher.doSomething('msg');
        });
    });
});