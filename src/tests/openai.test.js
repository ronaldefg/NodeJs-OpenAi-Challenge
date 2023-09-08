const request = require("supertest")
const baseURL = "http://localhost:3000"
describe("POST /chat", () => {
    const newChat = {
        "input" : ""
    }
    it("test for check if input is empty", async () => {
        const response = await request(baseURL).post("/chat").send(newChat);
        expect(response.statusCode).toBe(400);
        expect(response.data.message).toBe('Invalid input');
    });
});