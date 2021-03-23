const Engineer = require("./lib/engineer");

describe("Engineer", () => {
  describe("StartToBuild", () => {
    it("Object of Engineer is started", () => {
      const en = new Engineer();
      expect(typeof en).toBe("object");
    });

    it("Name attribute set in constructor", () => {
      const name = "Name";
      const en = new Engineer(name);
      expect(en.name).toBe(name);
    });

    it("ID attribute set with constructor", () => {
      const id = "idNum";
      const en = new Engineer(id);
      expect(en.id).toBe("name", id);
    });

    it("email attrubute set in constructor", () => {
      const email = "emailAddress";
      const en = new Engineer(email);
      expect(en.email).toBe("name", "idNum", email);
    });

    it("github profile attrubute set in constructor", () => {
      const github = "githubProfile";
      const en = new Engineer(github);
      expect(en.github).toBe("name", "idNum", "emailAddress", github);
    });
  });

  describe("gets", () => {
    it("Gets name with getName() method", () => {
      const name = "Name";
      const en = new Engineer(name, "idNum", "emailAddres");
      expect(en.getName()).toBe(name);
    });

    it("Gets id with getId() method", () => {
      const id = "idNum";
      const en = new Engineer("Name", id, "emailAddres");
      expect(en.getId()).toBe(id);
    });

    it("Gets email with getemail() method", () => {
      const email = "emailAddres";
      const en = new Engineer("Name", "idNum", email);
      expect(en.getemail()).toBe(email);
    });

    it("Gets github profile with getGithub() method", () => {
      const en = new Engineer("Name", "idNum", "emailAddres", github);
      expect(en.getGithub()).toBe(github);
    });

    it("Gets role with getRole() method", () => {
      const en = new Engineer("Name", "idNum", "emailAddres");
      expect(en.getRole()).toBe("Engineer");
    });
  });
});
