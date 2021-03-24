const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("StartToBuild", () => {
    it("Object of Employee is started", () => {
      const em = new Employee();
      expect(typeof em).toBe("object");
    });

    it("Name attribute set in constructor", () => {
      const name = "John";
      const em = new Employee(name);
      expect(em.name).toBe(name);
    });

    it("ID attribute set with constructor", () => {
      const id = 90;
      const em = new Employee("John", id);
      expect(em.id).toBe(id);
    }); 
    
    it("Email attrubute set in constructor", () => {
      const email = "bountravel@hotmail.com";
      const em = new Employee("John", 90, email);
      expect(em.email).toBe(email);
    });
  });
  
  describe("gets", () => {
    it ("Gets name with getName() method", () => {
      const name = "John";
      const em = new Employee(name, 90, "bountravel@hotmail.com");
      expect(em.getName()).toBe(name);
    });

    it ("Gets id with getId() method", () => {
      const id = 90;
      const em = new Employee("John", id, "bountravel@hotmail.com");
      expect(em.getId()).toBe(id);
    });

    it("Gets email with getEmail() method", () => {
      const email = "bountravel@hotmail.com";
      const em = new Employee("John", 90, email);
      expect(em.getEmail()).toBe(email);
    });

    it ("Gets role with getRole() method", () => {
      const em = new Employee("John", 90, "bountravel@hotmail.com");
      expect(em.getRole()).toBe("Employee");
    });
  });
});