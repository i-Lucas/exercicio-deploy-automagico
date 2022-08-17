import supertest from "supertest";
import app from "../src/app.js";

let GLOBAL_VISITS = 0;

describe("GET /", () => {

    it("should return a object containing the count of visits", async () => {

        const result = await supertest(app).get("/");
        GLOBAL_VISITS = result.body.count;
        expect(result.body).toHaveProperty("count");
    });
});

describe("POST /", () => {

    it("should return 200 OK", async () => {

        const result = await supertest(app).post("/");
        expect(result.text).toBe("Olá, T5!");
        expect(result.status).toBe(200);
    });

    it("check if the count of visits has been incremented", async () => {

        const result = await supertest(app).get("/");
        expect(result.body.count).toBe(GLOBAL_VISITS + 1);
    });
});