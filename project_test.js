describe('Automated Google', function () {
  beforeEach(function () {
    this.actionwords = Object.create(Actionwords);
  });

  describe('Searching for keyWord', function () {
    function searchingForKeyWord (key_word, result) {
      this.actionwords.goGooglePage();
      this.actionwords.fillKeyWordInput(String(keyWord));
      this.actionwords.clickSearchButton();
      this.actionwords.theResult(String(result));
    }

    it('defaultSet', function () {
      searchingForKeyWord.apply(this, ['random', 'New window should show the results for given key word']);
    });
  });


  describe('Searching for keyWord with lucky shot', function () {
    function searchingForKeyWordWithLuckyShot (key_word, result) {
      this.actionwords.goGooglePage();
      this.actionwords.fillKeyWordInput(String(keyWord));
      this.actionwords.clickLuckyShotButton();
      this.actionwords.theResult(String(result));
    }

    it('defaultSet', function () {
      searchingForKeyWordWithLuckyShot.apply(this, ['random', 'New window should show the results for given key word']);
    });
  });
});
