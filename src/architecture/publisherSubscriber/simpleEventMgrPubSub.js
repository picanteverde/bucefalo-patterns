bucefalo.patterns.publisherSubscriber.eventManager.createEventManager = function(){
	var events = {};
	return {
		subscribe: function(event, fn){
			if(!events.hasOwnProperty(event)){
				events[event] = [];
			}
			events[event].push(fn);
		},
		publish:function (event, data){
			var l, i, fns, fn;
			if(events.hasOwnProperty(event)){
				fns = events[event];
				len = fns.length;
				for(i = 0; i < len; i +=1){
					fn = fns[i];
					fn(data);
				}
			}
		}
	};
};


eventMng.subscribe("gustavo", function gritar (palabra){
	console.log(palabra +"!!!!!!!");
});

eventMng.subscribe("gustavo", function refunfunear (palabra){
	console.log("gr#$%#@@");
});

eventMng.subscribe("mauricio", function susurrar (palabra){
	console.log(palabra);
});

eventMng.publish("gustavo", "JavaScript es lo más");
eventMng.publish("mauricio", "Java es lo menos");
