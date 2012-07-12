bucefalo.namespace('bucefalo.patterns.publisherSubscriber.eventManager',{});

bucefalo.patterns.publisherSubscriber.eventManager.createEventManager = function() {
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
                    fn(data);
                }
            }
        }
    };
};


bucefalo.patterns.publisherSubscriber.eventManager.subscribe("gustavo", function gritar(palabra) {
    console.log(palabra + "!!!!!!!");
});

bucefalo.patterns.publisherSubscriber.eventManager.subscribe("gustavo", function refunfunear(palabra) {
    console.log("gr#$%#@@");
});

bucefalo.patterns.publisherSubscriber.eventManager.subscribe("mauricio", function susurrar(palabra) {
    console.log(palabra);
});

bucefalo.patterns.publisherSubscriber.eventManager.publish("gustavo", "JavaScript es lo más");
bucefalo.patterns.publisherSubscriber.eventManager.publish("mauricio", "Java es lo menos");