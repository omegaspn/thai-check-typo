const thaiTypoCheck = require(".");

describe.only("thaiTypoCheck", () => {
  it("should return true when no typo", () => {
    expect(thaiTypoCheck("ฉันอยากกินยำ   ")).toBe(true);
    expect(thaiTypoCheck("ฉัน อยากกิน   ยำ")).toBe(true);
    expect(thaiTypoCheck("ฉันอยากกินยำพัทยา", ["พัทยา"])).toBe(true);
  });

  it("should return false when found typos", () => {
    expect(thaiTypoCheck("ฉนอยากกินยำ")).toBe(false);
    expect(thaiTypoCheck("ฉันอยากกินยำา")).toBe(false);
    expect(thaiTypoCheck("ฉัน อยากกินยำมาก กกกกก")).toBe(false);
  });

  it("should skip and return true when inputText is null or empty", () => {
    expect(thaiTypoCheck("")).toBe(true);
    expect(thaiTypoCheck(null)).toBe(true);
    expect(thaiTypoCheck(undefined)).toBe(true);
  });
});
