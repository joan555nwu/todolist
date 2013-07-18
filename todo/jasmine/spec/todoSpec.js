describe('simplest jQuery plugin test', function () {
  
  /*beforeEach( function() {
    jasmine.getFixtures().fixturesPath = '/Users/twer/Documents/todo/';
    loadFixtures('todo.html');
    spyOnEvent($("#submit"), 'click');
  });*/
  it("and can have a negative case", function() {
      expect(false).not.toBe(true);
    });

  it('hello',function(){
    jasmine.getFixtures().fixturesPath = "../";
    loadFixtures('todo.html');
    spyOnEvent('button', 'click');
    $("button").click();
    expect('click').toHaveBeenTriggeredOn('button');
  });
  
});