const request = require("supertest");
const app = require("../app");

describe("/api/current/:locale", () => {
  test("GET 200 should return an object containing keys location, current, and current should contain condition", () => {
    return request(app)
      .get("/api/current/Stockport")
      .expect(200)
      .then(({ body }) => {
        expect(body).toEqual(
          expect.objectContaining({
            name: expect.any(String),
            region: expect.any(String),
            country: expect.any(String),
            last_updated: expect.any(String),
            celcius: expect.any(Number),
            farenheit: expect.any(Number),
            description: expect.any(String),
            icon: expect.any(String),
            wind: expect.any(Number),
            humidity: expect.any(Number),
          })
        );
        expect(body.name).toBe("Stockport");
        expect(body.region).toBe("Greater Manchester");
        expect(body.country).toBe("United Kingdom");
      });
  });
  test('GET 400 - should return a status of 400 and an error message when number passed as locale',()=>{
    return request(app)
    .get("/api/current/9999")
    .expect(400)
    .then(({body})=>{
        expect(body.msg).toBe('location must be in text format')
    })
  })
  test('GET 404 - should return a status of 404 when valid locale requested but does not exist and an error message',()=>{
    return request(app)
    .get("/api/current/XXXX")
    .expect(404)
    .then(({body})=>{
        expect(body.msg).toBe('location does not exist, please try again')
    })
  })


});
