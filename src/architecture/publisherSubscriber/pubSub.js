bucefalo.namespace('bucefalo.patterns.publisherSubscriber.pubSub', {
    Publisher: function() {
        var subcribers = [],
            createDeliveryFunction = function(fn, data) {
                return function() {
                    fn(data);
                };
            };

        this.subscribe = function(event, fn) {
            if (!subcribers.hasOwnProperty(event)) {
                subcribers[event] = [];
            }
            subcribers[event].push(fn);
        };

        this.unsubscribe = function(event, fn) {
            if (!subcribers.hasOwnProperty(event)) {
                return;
            }
            var index = subcribers[event].indexOf(fn);
            if (index) {
                subcribers[event].splice(index, 1);
            }
        };

        this.notify = function(event, data) {
            var len;

            if (!subcribers.hasOwnProperty(event)) {
                return;
            }

            len = subcribers[event].length;
            while (len--) {
                setTimeout(createDeliveryFunction(subcribers[event][len], data), 0);
            }
        };
    }
});