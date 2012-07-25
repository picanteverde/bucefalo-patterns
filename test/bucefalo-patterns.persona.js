 describe("bucefalo.pattenrs.persona",function(){

	it("should create a new persona and test hablar",function(){
		var a = new Persona();
		expect(a.hablar()).to.equal("hola");
	});
});