describe('_.escape', function () {

  it.skip('should not overwrite existing global _', function(){

  });

  it.skip('should not overwrite existing _.escape', function(){

  });

  it('should create global _', function(){
    expect(_).to.be.ok;
  });

  it('should add _.escape if not exist', function(){
    expect(_.escape).to.be.ok;
  });

  it('should escape html characters', function(){
    var template = "&<>\"'`";
    var expected = "&amp;&lt;&gt;&quot;&#39;&#96;";
    expect(_.escape(template)).to.equal(expected);
  });

});