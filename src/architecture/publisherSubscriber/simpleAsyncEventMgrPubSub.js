bucefalo.namespace('bucefalo.patterns.publisherSubscriber.eventManager', {
    createEventManager: function() {
        var events = {};
        return {
            subscribe: function(event, fn) {
                if (!events.hasOwnProperty(event)) {
                    events[event] = [];
                }
                events[event].push(fn);
            },
            publish: function(event, data) {
                var l, i, fns, fn, len;
                if (events.hasOwnProperty(event)) {
                    fns = events[event];
                    len = fns.length;
                    for (i = 0; i < len; i += 1) {
                        fn = fns[i];
                        setTimeout(function() {
                            fn(data);
                        }, 0);

                    }
                }
            }
        };
    }
});