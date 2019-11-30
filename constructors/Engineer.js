const Employee = require("./Employee");

/**
 * Class representing a Engineer.
 * @class
 * @extends Employee
 */
class Engineer extends Employee {
  /**
   * Create a Engineer.
   * @param {string} name - Name of the Engineer
   * @param {number} id - ID of the Engineer
   * @param {string} email - Email of the Engineer
   * @param {number} gitty - gitty username of the Engineer
   */
  constructor(name, id, email, gitty) {
    if (!gitty || !gitty.trim().length) {
      throw new Error("Expected parameter 'gitty' to be a non-empty string");
    }
    super(name, id, email);
    this.gitty = gitty;
  }
}

module.exports = Engineer;
