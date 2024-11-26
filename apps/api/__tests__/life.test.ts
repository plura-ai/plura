import { GET } from "../app/api/[[...route]]/route";
import { describe, it, expect, vi } from "vitest";

vi.mock("@repo/db", () => ({
  prisma: {
    user: {
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  },
}));

describe("Health API", () => {
  it("GET /api/health should return health status", async () => {
    const req = new Request("http://localhost:3000/api/health", {
      method: "GET",
    });
    const res = await GET(req);

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({
      message: "i am alive",
      status: 200,
    });
  });
});

describe("Mail API", () => {
  it("GET /api/mail should return health status", async () => {
    const req = new Request("http://localhost:3000/api/mail/send", {
      method: "GET",
    });
    const res = await GET(req);

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({
      message: "Mail api is alive",
      status: 200,
    });
  });
});

describe("Mail Batch API", () => {
  it("GET /api/mail should return health status", async () => {
    const req = new Request("http://localhost:3000/api/mail/send-batch", {
      method: "GET",
    });
    const res = await GET(req);

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({
      message: "Batch mail api is alive",
      status: 200,
    });
  });
});
