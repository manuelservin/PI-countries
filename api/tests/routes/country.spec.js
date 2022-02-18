/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Country, conn } = require("../../src/db.js");

const agent = session(app);
const country = {
  name: "Argentina",
};

/* describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(pokemon)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
}); */

//test get countries

describe("GET /country", function () {
  it("responds with json", function (done) {
    agent
      .get("/country")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
