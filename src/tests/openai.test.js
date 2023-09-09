const request = require("supertest")
const baseURL = "http://localhost:3000"
describe("POST /chat", () => {
    const emptyChat = {
        "input" : ""
    }
    it("test for check if input is empty", async () => {
        const response = await request(baseURL).post("/chat").send(emptyChat);
        expect(response.statusCode).toBe(400);
        let jsonResp = JSON.parse(response.error.text);
        expect(jsonResp.error).toBe('Invalid input');
    });
    const okChat = {
        "input" : "Hola bot como estas?"
    }
    it("test for check if has response", async () => {
        const response = await request(baseURL).post("/chat").send(okChat);
        console.log(response.body);
        expect(response.statusCode).toBe(200);
        expect(response.body.response).toBeDefined();
    });
});