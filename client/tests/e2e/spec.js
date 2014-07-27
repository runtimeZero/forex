describe('MainPage',function(){
  var ptor;
  var bidTextPartB,askTextPartB;
  var bidTextPartBValue,askTextPartBValue;

  beforeEach(function(){
    ptor = protractor.getInstance();
  });

  it('should contain forex in the title',function(){
    ptor.get('/');
    ptor.sleep(5000);
    expect(ptor.getTitle()).toContain('Forex');
  });

  it('should have EUR/USD selected by default',function(){
    var dropDown = ptor.findElement(protractor.By.xpath('//a[@class="dropdown-toggle"]/span'));
      expect(dropDown.getText()).toContain('EUR/USD');
  });

  it('should have some value populated in bid',function(){
    var bidTextPartA = ptor.findElement(protractor.By.xpath('//fix-display[@val="current.bidPrice"]/span[1]'));
    expect(bidTextPartA.getText()).toContain('1.34');
    bidTextPartB = ptor.findElement(protractor.By.xpath('//fix-display[@val="current.bidPrice"]/span[2]'));
    expect(bidTextPartB.getText()).not.toBe('');
    bidTextPartB.getText().then(function(data){
      bidTextPartBValue = data;
    });
  });

  it('should have some value populated in ask',function(){
    var  askText = ptor.findElement(protractor.By.xpath('//fix-display[@val="current.askPrice"]/span[1]'));
    expect(askText.getText()).toContain('1.34');
    askTextPartB = ptor.findElement(protractor.By.xpath('//fix-display[@val="current.askPrice"]/span[2]'));
    askTextPartB.getText().then(function(data){
      askTextPartBValue = data;
    });
  });

  it('should have updated value of bidText and askText',function(){
    ptor.sleep(15000);
    bidTextPartB.getText().then(function(data){
      expect(bidTextPartBValue).not.toEqual(data);
    });

    askTextPartB.getText().then(function(data){
      expect(askTextPartBValue).not.toEqual(data);
    });

  },20000);

  it('should capture bid Value upon button click',function(){
   ptor.findElement(protractor.By.xpath('//div[@id="bid-window"]/div[2]/button')).click();
   ptor.sleep(1000);
   ptor.findElements(protractor.By.repeater('activity in alerts')).then(function(rows){
     expect(rows.length).toBe(1);
   });

  });



});


