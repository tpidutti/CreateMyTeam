const Intern = require("./lib/intern");

describe("Intern", () => {
  describe("StartToBuild", () => {
    it("Object of Intern is started", () => {
      const novice = new Intern();
      expect(typeof novice).toBe("object");
    });

    it("Name attribute set in constructor", () => {
      const name = "Name";
      const novice = new Intern(name);
      expect(novice.name).toBe(name);
    });

    it("ID attribute set with constructor", () => {
      const id = "idNum";
      const novice = new Intern(id);
      expect(novice.id).toBe("name", id);
    });

    it("email attrubute set in constructor", () => {
      const email = "emailAddress";
      const novice = new Intern(email);
      expect(novice.email).toBe("name", "idNum", email);
    });

    it("school attrubute set in constructor", () => {
      const school = "school";
      const novice = new Intern(school);
      expect(novice.school).toBe("name", "idNum", "emailAddress", school);
    });
  });

  describe("gets", () => {
    it("Gets name with getName() method", () => {
      const name = "Name";
      const novice = new Intern(name, "idNum", "emailAddres");
      expect(novice.getName()).toBe(name);
    });

    it("Gets id with getId() method", () => {
      const id = "idNum";
      const novice = new Intern("Name", id, "emailAddres");
      expect(novice.getId()).toBe(id);
    });

    it("Gets email with getemail() method", () => {
      const email = "emailAddres";
      const novice = new Intern("Name", "idNum", email);
      expect(novice.getemail()).toBe(email);
    });

    it("Gets school  with getSchool() method", () => {
      const novice = new Intern("Name", "idNum", "emailAddres", school);
      expect(novice.getSchool()).toBe(school);
    });

    it("Gets role with getRole() method", () => {
      const novice = new Intern("Name", "idNum", "emailAddres");
      expect(novice.getRole()).toBe("Intern");
    });
  });
});
