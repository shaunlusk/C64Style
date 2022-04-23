import { Color } from '../src/Color';

describe("Color", function() {
  describe("#getByIndex()", function() {
    it("should return colors", function(done) {
      let result, expected, idx;

      idx = 0;
      expected = Color.BLACK;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 1;
      expected = Color.WHITE;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 2;
      expected = Color.RED;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 3;
      expected = Color.CYAN;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 4;
      expected = Color.PURPLE;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 5;
      expected = Color.GREEN;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 6;
      expected = Color.BLUE;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 7;
      expected = Color.YELLOW;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 8;
      expected = Color.ORANGE;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 9;
      expected = Color.BROWN;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 10;
      expected = Color.PINK;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 11;
      expected = Color.DARKGREY;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 12;
      expected = Color.GREY;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 13;
      expected = Color.LIGHTGREEN;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 14;
      expected = Color.LIGHTBLUE;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);
      idx = 15;
      expected = Color.LIGHTGREY;
      result = Color.getByIndex(idx);
      expect(result).toBe(expected);

      done();
    });
  });
  // describe("#getDefaultPalette()", function() {
  //   it("should return default palette", function(done) {
  //     const expected = [
  //       Color.BLACK,
  //       Color.WHITE,
  //       Color.RED,
  //       Color.CYAN,
  //       Color.PURPLE,
  //       Color.GREEN,
  //       Color.BLUE,
  //       Color.YELLOW,
  //       Color.ORANGE,
  //       Color.BROWN,
  //       Color.PINK,
  //       Color.DARKGREY,
  //       Color.GREY,
  //       Color.LIGHTGREEN,
  //       Color.LIGHTBLUE,
  //       Color.LIGHTGREY
  //     ];
  //     const result = Color.getDefaultPalette();
  //     for (const i = 0; i < expected.length; i++) {
  //       expect(expected[i]).toBe(result[i]);
  //     }
  //     done();
  //   });
  // });
});
