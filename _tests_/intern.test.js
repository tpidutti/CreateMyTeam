const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Complete intern information", () => {
      const school = "UofA";
      const novice = new Intern("Theresa", 80, "bountravel@hotmail.com", school);
      expect(novice.school).toBe(school);
    });
    
    it("Gets school info with getSchool() method", () => {
      const novice = new Intern("Theresa", 80, "bountravel@hotmail.com", "UofA");
      expect(novice.getSchool()).toBe("UofA");
    });

    it("Gets role with getRole() method", () => {
      const novice = new Intern("Theresa", 80, "bountravel@hotmail.com", "UofA");
      expect(novice.getRole()).toBe("Intern");
    });
  
});
