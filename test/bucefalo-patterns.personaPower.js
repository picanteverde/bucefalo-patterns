describe("bucefalo.pattenrs.personaPower",function(){

	it("should create a new persona and test hablar",function(){
		var a = createPersona();
		expect(a.hablar()).to.equal("hola");
	});
});