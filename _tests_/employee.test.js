const Employee = require("./lib/employee");

describe("Employee", () => {
  describe("StartToBuild", () => {
    it("Object of Employee is started", () => {
      const em = new Employee();
      expect(typeof em).toBe("object");
    });

    it("Name attribute set in constructor", () => {
      const name = "Name";
      const em = new Employee(name);
      expect(em.name).toBe(name);
    });

    it("ID attribute set with constructor", () => {
      const id = "idNum";
      const em = new Employee(id);
      expect(em.id).toBe("name", id);
    }); 
    
    it("Email attrubute set in constructor", () => {
      const email = "emailAddress";
      const em = new Employee(email);
      expect(em.email).toBe("name", idNum, email);
    });
  });
  
  describe("gets", () => {
    it ("Gets name with getName() method", () => {
      const name = "Name";
      const em = new Employee(name, idNum, "emailAddres");
      expect(em.getName()).toBe(name);
    });

    it ("Gets id with getId() method", () => {
      const id = "idNum";
      const em = new Employee("Name", id, "emailAddres");
      expect(em.getId()).toBe(id);
    });

    it ("Gets email with getEmail() method", () => {
      const email = "emailAddres";
      const em = new Employee("Name", idNum, email);
      expect(em.getEmail()).toBe(email);
    });

    it ("Gets role with getRole() method", () => {
      const em = new Employee("Name", idNum, "emailAddres");
      expect(em.getRole()).toBe("Employee");
    });
  });
});