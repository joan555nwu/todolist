describe('test the todo', function () {
  
  
  beforeEach(function(){
    jasmine.getFixtures().fixturesPath ='./';
    loadFixtures('todo.html');
    jasmine.getStyleFixtures().fixturesPath ='./';
    loadStyleFixtures('todo.css')
  });


  it('adds new item',function(){
    var spyEvent = spyOnEvent("#addbutton", 'click');
    $("#addbutton").click();
    expect(spyEvent).toHaveBeenTriggered();
  });

  xit('removes todo item',function(){
    var spyEvent = spyOnEvent(".list button", 'click');
    $(".list button").click();
    // expect('click').toHaveBeenTriggeredOn(".list button");
    expect(spyEvent).toHaveBeenTriggered();
  });

  xit('submit',function(){
    $("#inputtask").val("just add")
    spyOnEvent('#submit','click');
    $("#submit").click();
   expect($("ul li").length).toEqual(4);
  });
});