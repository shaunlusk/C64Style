describe("Color", function() {
  describe("#getByIndex()", function() {
    it("should return colors", function(done) {
      var result, expected, idx;

      idx = 0;
      expected = C64Style.Color.BLACK;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 1;
      expected = C64Style.Color.WHITE;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 2;
      expected = C64Style.Color.RED;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 3;
      expected = C64Style.Color.CYAN;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 4;
      expected = C64Style.Color.PURPLE;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 5;
      expected = C64Style.Color.GREEN;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 6;
      expected = C64Style.Color.BLUE;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 7;
      expected = C64Style.Color.YELLOW;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 8;
      expected = C64Style.Color.ORANGE;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 9;
      expected = C64Style.Color.BROWN;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 10;
      expected = C64Style.Color.PINK;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 11;
      expected = C64Style.Color.DARKGREY;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 12;
      expected = C64Style.Color.GREY;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 13;
      expected = C64Style.Color.LIGHTGREEN;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 14;
      expected = C64Style.Color.LIGHTBLUE;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);
      idx = 15;
      expected = C64Style.Color.LIGHTGREY;
      result = C64Style.Color.getByIndex(idx);
      assert(result === expected, "index " + idx + " failed. expected:" + expected + ", actual:" + result);

      done();
    });
  });
  describe("#getDefaultPalette()", function() {
    it("should return default palette", function(done) {
      var expected = [
        C64Style.Color.BLACK,
        C64Style.Color.WHITE,
        C64Style.Color.RED,
        C64Style.Color.CYAN,
        C64Style.Color.PURPLE,
        C64Style.Color.GREEN,
        C64Style.Color.BLUE,
        C64Style.Color.YELLOW,
        C64Style.Color.ORANGE,
        C64Style.Color.BROWN,
        C64Style.Color.PINK,
        C64Style.Color.DARKGREY,
        C64Style.Color.GREY,
        C64Style.Color.LIGHTGREEN,
        C64Style.Color.LIGHTBLUE,
        C64Style.Color.LIGHTGREY
      ];
      var result = C64Style.Color.getDefaultPalette();
      for (var i = 0; i < expected.length; i++) {
        assert(expected[i] === result[i], "idx " + i + " failed. expected:" + expected[i] + ", actual:" + result[i]);
      }
      done();
    });
  });
});
