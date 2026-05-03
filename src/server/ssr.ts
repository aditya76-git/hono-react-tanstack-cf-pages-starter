import {
    createRequestHandler,
    defaultStreamHandler,
} from "@tanstack/react-router/ssr/server";

import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/client/routeTree.gen";
import { Context } from "hono";

export function ssrHandler(c: Context) {
    const pathname = new URL(c.req.url).pathname;
    const request = c.req.raw;

    // API guard
    if (pathname.startsWith("/api")) {
        return c.notFound();
    }

    // Static assets
    if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
        return c.env.ASSETS?.fetch(request).then((res: any) => {
            if (res && res.status !== 404) return res;
            return c.notFound();
        });
    }

    // Everything elsee SSR
    const createSsrRouter = () =>
        createRouter({
            routeTree,
            isServer: true,
        });

    return createRequestHandler({
        request,
        createRouter: createSsrRouter,
    })(defaultStreamHandler);
}