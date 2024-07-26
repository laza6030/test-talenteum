import request from "supertest";
import app from "..";

jest.useRealTimers();

describe("Given a Server", () => {
  it("Should return a 200 status", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});

describe("Given a POST request at the path /save-user", () => {
  describe("When the request is valid", () => {
    it("Should return a 200 status", async () => {
      const response = await request(app).post("/save-user").send({
        username: "John",
        email: "johndoe@user.com",
        age: 30,
      });
      expect(response.status).toBe(200);
      expect(response.text).toBe("User saved successfully");
    });
  });

  describe("When the username is empty", () => {
    it('Should return a "Username can not be empty" error message', async () => {
      const response = await request(app).post("/save-user").send({
        username: "",
        email: "johndoe@user.com",
        age: 30,
      });

      console.log(response.text);

      expect(response.statusCode).toBe(500);
      expect(response.text).toBe("Username can not be empty");
    });
  });

  describe("When the email address is invalid", () => {
    it('Should return a "Please provide a valid email" error message', async () => {
      const response = await request(app).post("/save-user").send({
        username: "johndoe",
        email: "johndoe@ user.com",
        age: 30,
      });

      console.log(response.text);

      expect(response.statusCode).toBe(500);
      expect(response.text).toBe("Please provide a valid email");
    });
  });

  describe("When given age is a negative value", () => {
    it('Should return a "Age should be a positive number" error message', async () => {
      const response = await request(app).post("/save-user").send({
        username: "johndoe",
        email: "johndoe@user.com",
        age: -30,
      });

      console.log(response.text);

      expect(response.statusCode).toBe(500);
      expect(response.text).toBe("Age should be a positive number");
    });
  });
});
