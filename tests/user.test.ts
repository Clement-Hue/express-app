import request from "supertest";
import app from "../src/index";

describe("get user", () => {
    it("should get all users",  async () => {
        const response = await request(app).get("/user");
        expect(response.status).toBe(200);
        expect(response.text).toBe("get users");
    });
});
