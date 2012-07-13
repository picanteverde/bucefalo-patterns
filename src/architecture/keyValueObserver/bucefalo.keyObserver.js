bucefalo.namespace('bucefalo.patterns.keyObserver',{
	observable : function(obj){
		var dic = {};
		obj.setter = function(property,value){
			var suscribed, i;
			obj[property] = value;
			suscribed = dic[property];
			if(suscribed !== undefined){
				for (i = suscribed.length - 1; i >= 0; i--) {
					suscribed[i](value);
				}
			}
		};
		obj.getter =function(property){
			return obj[property];
		};
		obj.subscribe = function(object, method, property){
			if(!dic.hasOwnProperty(property)){
				dic[property] = [];
			}
			dic[property].push(function(value){
				object[method](value);
			});
		};
		return obj;
	}
});