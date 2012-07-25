var bucefalo = require ("./../dist/bucefalo-patterns.module.js"),
 	expect = require("chai").expect;

 	describe("bucefalo.pattenrs.Persona",function(){

	it("should create a new persona and test hablar",function(){
		var a = Persona();
		expect(a.hablar()).to.equal("hola");
	});
})