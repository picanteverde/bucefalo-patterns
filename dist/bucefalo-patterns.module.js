/*! Bucefalo Patterns - v0.1.0 - 2012-07-13
* https://github.com/picanteverde/bucefalo-patterns
*/

var bucefalo = bucefalo || {};
bucefalo.patterns = bucefalo.patterns || {};
if(!bucefalo.namespace){
	bucefalo.namespace = function(namespace, object){
		var o,
			ar,
			len,
			i,
			global = (function(){ 
				return this;
			}());
		o = global;
		ar = namespace.split(".");
		if (object===undefined) {
			object={};
		}
		len = ar.length;
		for (i = 0; i < len; i += 1){
			if (!o.hasOwnProperty(ar[i])) {
				if (i === len - 1) { 
					o[ar[i]] = object;
				}
				else {
					o[ar[i]] = {};
				}
			}
			o = o[ar[i]];

		}
	};

}

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
                var l, i, fns, fn, len, launchEvent = function(fn, data) {
                        setTimeout(function() {
                            fn(data);
                        }, 0);
                    };
                if (events.hasOwnProperty(event)) {
                    fns = events[event];
                    len = fns.length;
                    for (i = 0; i < len; i += 1) {
                        fn = fns[i];
                        launchEvent(fn, data);
                    }
                }
            }
        };
    }
});
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
                        fn(data);
                    }
                }
            }
        };
    }
});
module.exports = bucefalo;