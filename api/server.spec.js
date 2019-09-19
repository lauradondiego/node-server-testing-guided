const request = require("supertest");

const server = require("./server");

// 1. return promise
// 2. use async and await
// 3. use done

describe("server.js", () => {
  describe("GET /", () => {
    it("returns 200 OK", () => {
      // make a GET request to the /endpoint on the server
      return request(server) // when testing something thats asynchronous use return in front
        .get("/")
        .then(res => {
          // assert or check that we get an http status code 200
          expect(res.status).toBe(200);
        });
    });

    it("should return { api: 'up' }", async () => {
      // single quotes
      const res = await request(server).get("/");

      expect(res.body.api).toBe("up"); //this is testing a particular property of the body
      expect(res.body).toEqual({ api: "up" }); // this is testing the whole thing
    });

    it("returns JSON", done => {
      request(server)
        .get("/")
        .then(res => {
          // assert or check that we get an http status code 200
          expect(res.type).toMatch(/json/i); // needs to have json in it somewhere
          done();
        });
    });
  });
});
