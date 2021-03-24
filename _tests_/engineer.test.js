const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Complete github account info", () => {
      const github = "tpidutti";
      const en = new Engineer("Joe", 50, "bountravel@hotmail.com", github);
      expect(en.github).toBe(github);
    });

    it("Gets github profile with getGithub() method", () => {
      const en = new Engineer("Joe", 50, "bountravel@hotmail.com", "tpidutti");
      expect(en.getGithub()).toBe("tpidutti");
    });

    it("Gets role with getRole() method", () => {
      const en = new Engineer("Joe", 50, "bountravel@hotmail.com", "tpidutti");
      expect(en.getRole()).toBe("Engineer");
    });
  });
