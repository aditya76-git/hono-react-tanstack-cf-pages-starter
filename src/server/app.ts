import api from "@/api";
import { Hono } from "hono";
import { ssrHandler } from "@/server/ssr";

type PagesBindings = CloudflareBindings & { ASSETS?: Fetcher };

const app = new Hono<{ Bindings: PagesBindings }>();

app.route("/api", api);

app.get("*", (c) => ssrHandler(c));

export default app;
