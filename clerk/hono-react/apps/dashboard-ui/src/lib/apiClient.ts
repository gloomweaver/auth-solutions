import { hc } from "hono/client";
import { App } from "gateway-dashboard";

export const apiClient = hc<App>("/");
