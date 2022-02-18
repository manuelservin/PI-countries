const { Country, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Country model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: true }));
    describe("name", (name) => {
      it("should throw an error if name is null", (done) => {
        Country.findOne({
          where: {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          },
        })
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Country.findOne({ name: "Argentina" });
      });
    });
  });
});
