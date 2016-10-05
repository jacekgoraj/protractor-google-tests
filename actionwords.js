var Actionwords = {
  goGooglePage: function () {
    browser.get('http://www.google.pl/');
  console.log("New window should open and go google page - test")
  },
  theResult: function (result) {
  var EC = protractor.ExpectedConditions;
  browser.wait((EC.presenceOf(element(by.id('rcnt'))));
  console.log(result);
  },
  fillKeyWordInput: function (key_word) {
    element(by.id('lst-ib')).sendKeys(key_word);
  },
  clickSearchButton: function () {
    element(by.xpath("//input[@value = 'Szukaj w Google']")).click();
  },
  clickLuckyShotButton: function () {
    element(by.xpath("//input[@value = 'Szczęśliwy traf']")).click();
  }
};