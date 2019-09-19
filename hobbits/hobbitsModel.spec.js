const Hobbits = require("./hobbitsModel"); // bring it in bc we are testing it
const db = require("../data/dbConfig");

describe("hobbits model", () => {
  beforeEach(async () => {
    // this will run before each of the tests cleans up hobbits table
    await db("hobbits").truncate();
  });

  it("should set environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
    // find DB_ENV in the package.json under test
  });

  // test endpoint to see if it inserts hobbits to db
  describe("insert()", () => {
    it("should insert hobbits into the db", async () => {
      // insert a record
      await Hobbits.insert({ name: "Gaffer" });
      let hobbits = await db("hobbits");
      console.log(hobbits);
      // assert the record was inserted
      expect(hobbits).toHaveLength(1);
    });
    it("should insert hobbits into the db", async () => {
      const [id] = await Hobbits.insert({ name: "gaffer" });
      let hobbit = await db("hobbits")
        .where({ id })
        .first();
      expect(hobbit.name).toBe("gaffer"); // use "Sam" first to see that it fails then change to Gaffer
    });
  });
});
