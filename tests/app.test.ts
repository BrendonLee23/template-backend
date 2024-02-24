
import prisma from "../src/database";
import app from "../src/app";
import httpStatus from "http-status";
import supertest from "supertest";
import { createMssage } from "./factories/massage-factory";

const api = supertest(app);

describe("Integration Tests", () => {

    beforeEach(async () => {
        await prisma.message.deleteMany();
    })

    afterAll( async () => {
        await prisma.message.deleteMany();
        await prisma.$disconnect();
    })

    it("should return 200 and I'm Ok!", async() => {
        const {text, status} = await api.get("/health");
        expect(status).toBe(httpStatus.OK);
        expect(text).toBe("I'm Ok!");
    })

    it("should return all messages", async() => {
        //Arrange
        await createMssage();
        await createMssage();
        //Act
        const {body, status} = await api.get("/messages");

        //Assert
        expect(status).toBe(httpStatus.OK);
        expect(body).toEqual(expect.arrayContaining([
            expect.objectContaining({
            id: expect.any(Number),
            text: expect.any(String)
            })
        ]))
    })
});
