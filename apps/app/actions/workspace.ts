"use server";
import { headers } from "next/headers";
import { getSession } from "./session";
import { betterFetch } from "@better-fetch/fetch";

const API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://api.plura.pro/"
    : "http://localhost:3001";

export const createWorkspace = async (workspaceName: string) => {
  const user = await getSession();
  if (!user) {
    return;
  }
  try {
    console.log("workspaceName", workspaceName);
    const workspace = await betterFetch(`${API_ENDPOINT}/v1/workspace`, {
      method: "POST",
      body: {
        name: workspaceName,
      },
      headers: {
        cookie: (await headers()).get("cookie") || "",
      },
    });
    console.log(workspace);
    return workspace;
  } catch (error) {
    console.log("error", error);
  }
};

export const getFirstWorkspaceOfUser = async () => {
  const user = await getSession();
  if (!user) {
    return;
  }

  try {
    const workspace: any = await betterFetch(
      `${API_ENDPOINT}/v1/workspace/user/` + user.session.userId,
      {
        method: "GET",
        headers: {
          cookie: (await headers()).get("cookie") || "",
        },
      },
    );
    if (!workspace || !workspace?.data?.firstWorkspace) {
      return null;
    }
    console.log("workspace", workspace);
    return workspace;
  } catch (error) {}
};
