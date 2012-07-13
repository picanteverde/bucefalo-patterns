var bucefalo = require ("./../dist/bucefalo-patterns.module.js"),
 	expect = require("chai").expect;



describe("bucefalo.pattenrs.keyValueObserver",function(){
	var x = {
		cambioYA:function(a){
			this.b = a;
		}
	},
	y;
	
	beforeEach(function(){
		y = {a:1};
		y = global.bucefalo.patterns.keyObserver.observable(y);
	})
	it("should make y observable",function(){
		y = global.bucefalo.patterns.keyObserver.observable(y);
		expect(y.getter).to.be.ok;
		expect(y.setter).to.be.ok;
		expect(y.subscribe).to.be.ok;
	});

	it("should allow to set a property value",function(){
		y.setter("a",2);
		expect(y.a).that.equals(2);
	});

	it("should update x.b value from y.a",function(){
		y.subscribe(x, "cambioYA", "a");
		y.setter("a",3);
		expect(x).to.have.property("b").that.equals(3);
	});
})