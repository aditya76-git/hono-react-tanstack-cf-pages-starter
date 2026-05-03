import {
    createRootRoute,
    HeadContent,
    Link,
    Outlet,
    Scripts,
} from "@tanstack/react-router";
import React, { Suspense } from "react";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0",
            },
            { title: "Hono + React + TanStack Router - Starter Template" },
        ],
        links: [
            {
                rel: "stylesheet",
                href: import.meta.env.DEV
                    ? "/src/client/index.css"
                    : "/assets/main.css",
            },
            {
                rel: "icon",
                href: "/favicon.ico"
            },
        ],
    }),

    scripts: () => [
        ...(import.meta.env.DEV
            ? [
                {
                    type: "module",
                    children: `
              import RefreshRuntime from "/@react-refresh"
              RefreshRuntime.injectIntoGlobalHook(window)
              window.$RefreshReg$ = () => {}
              window.$RefreshSig$ = () => (type) => type
              window.__vite_plugin_react_preamble_installed__ = true
            `,
                },
            ]
            : []),
        {
            type: "module",
            src: import.meta.env.DEV
                ? "/src/client/main.tsx"
                : "/assets/client.js",
        },
    ],

    component: function RootDocument() {
        const Devtools =
            import.meta.env.PROD
                ? () => null
                : React.lazy(() =>
                    import("@tanstack/react-router-devtools").then((res) => ({
                        default: res.TanStackRouterDevtools,
                    }))
                );

        return (
            <html lang="en">
                <head>
                    <HeadContent />
                </head>

                <body className="h-screen overflow-hidden flex flex-col text-gray-900">

                    {/* HEADER */}
                    <header className="shrink-0 bg-white">
                        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
                            <Link to="/" className="text-sm font-bold uppercase tracking-widest text-gray-900">
                                STARTER TEMPLATE
                            </Link>

                            <nav className="flex gap-1 items-center">
                                {[
                                    { to: "/", label: "Home" },
                                    { to: "/about", label: "About" },
                                    { to: "/posts", label: "Posts" },
                                ].map(({ to, label }) => (
                                    <Link
                                        key={to}
                                        to={to}
                                        className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                                        activeProps={{ className: "px-3 py-1.5 text-sm text-gray-900 bg-gray-100 rounded font-semibold" }}
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </header>

                    {/* MAIN CONTENT */}
                    <main className="flex-1 overflow-hidden">
                        <Outlet />

                        {/* DEVTOOLS */}
                        <Suspense>
                            <Devtools position="bottom-right" />
                        </Suspense>
                    </main>

                    {/* FOOTER */}
                    <footer className="shrink-0 bg-white py-3">
                        <div className="max-w-2xl mx-auto px-4 flex justify-between items-center">
                            <span className="text-xs text-gray-400 italic font-mono ml-auto hover:underline">
                                <a href="https://github.com/aditya76-git" target="_blank"
                                    rel="noopener noreferrer">
                                    @aditya76-git</a>
                            </span>
                        </div>
                    </footer>

                    <Scripts />
                </body>
            </html>
        );
    },
});