const Manager = require("./lib/manager");

describe("Manager", () => {
  describe("StartToBuild", () => {
    it("Object of manager is started", () => {
      const ma = new Manager();
      expect(typeof ma).toBe("object");
    });

    it("Name attribute set in constructor", () => {
      const name = "Name";
      const ma = new Manager(name);
      expect(ma.name).toBe(name);
    });

    it("ID attribute set with constructor", () => {
      const id = "idNum";
      const ma = new Manager(id);
      expect(ma.id).toBe("name", id);
    });

    it("email attrubute set in constructor", () => {
      const email = "emailAddress";
      const ma = new Manager(email);
      expect(ma.email).toBe("name", "idNum", email);
    });

    it("office number attrubute set in constructor", () => {
      const officeNum = "officeNum";
      const ma = new Manager(officeNum);
      expect(ma.officeNum).toBe("name", "idNum", "emailAddress", officeNum);
    });
  });

  describe("gets", () => {
    it("Gets name with getName() method", () => {
      const name = "Name";
      const ma = new Manager(name, "idNum", "emailAddres");
      expect(ma.getName()).toBe(name);
    });

    it("Gets id with getId() method", () => {
      const id = "idNum";
      const ma = new Manager("Name", id, "emailAddres");
      expect(ma.getId()).toBe(id);
    });

    it("Gets email with getEmail() method", () => {
      const email = "emailAddres";
      const ma = new Manager("Name", "idNum", email);
      expect(ma.getemail()).toBe(email);
    });

    it("Gets officeNum number  with getofficeNumNum() method", () => {
      const ma = new Manager("Name", "idNum", "emailAddres", officeNum);
      expect(ma.getofficeNumNum()).toBe(officeNum);
    });

    it("Gets role with getRole() method", () => {
      const ma = new Manager("Name", "idNum", "emailAddres", "officeNum");
      expect(ma.getRole()).toBe("Manager");
    });
  });
});
