import app, { init } from "@/app";
import { prisma } from "@/config";
import faker from "@faker-js/faker";
import { TicketStatus } from "@prisma/client";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";
import supertest from "supertest";
import { createEnrollmentWithAddress, createUser, createTicketType, createTicket } from "../factories";
import { cleanDb, generateValidToken } from "../helpers";

const server = supertest(app);

beforeAll(async () => {
  await init();
  await cleanDb();
});
beforeEach(async () => {
  await cleanDb();
});

afterAll(async () => {
  await cleanDb();
});

describe("GET /booking", () => {
  it("should respond with status 401 if no token", async () => {
    const result = await server.get("/booking");
    expect(result.status).toBe(httpStatus.UNAUTHORIZED);
  });
  it("should respond with status 401 if invalid token", async () => {
    const result = await server.get("/booking").set("Authorization", "Bearer XXXXX");
    expect(result.status).toBe(httpStatus.UNAUTHORIZED);
  });
    it("should responde with 404 if reservation dont exists", async function () => {

    })
});
