const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("complete manager information", () => {
    const officeNum = "268";
    const ma = new Manager("Nancy", 70, "bountravel@hotmail.com", officeNum);
    expect(ma.officeNum).toBe(officeNum);
  });

  it("Gets officeNum number with getofficeNumNum() method", () => {
    const ma = new Manager("Nancy", 70, "bountravel@hotmail.com", "268");
    expect(ma.getOfficeNum()).toBe("268");
  });

  it("Gets role with getRole() method", () => {
    const ma = new Manager("Nancy", 70, "bountravel@hotmail.com", 268);
    expect(ma.getRole()).toBe("Manager");
  });
});
