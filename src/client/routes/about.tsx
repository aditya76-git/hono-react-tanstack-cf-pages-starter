import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
    component: About,
    head: () => ({
        meta: [{ title: "Hono + React + TanStack Router - About" }],
    }),
});

function About() {
    return (
        <div className="h-full overflow-y-auto">
            <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">

                <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                        About
                    </p>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Hono + React + TanStack Router
                    </h1>
                    <p className="text-gray-500 text-sm">
                        // with SSR on Cloudflare Pages
                    </p>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    <img src="https://img.icons8.com/?size=22&id=62856&format=png&color=000000" />
                    <a
                        href="https://github.com/aditya76-git"
                        className="hidden sm:inline text-blue-500 hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        aditya76-git
                    </a>

                    <span className="text-gray-500">/</span>

                    <a
                        href="https://github.com/aditya76-git/hono-react-tanstack-cf-pages-starter"
                        className="text-blue-500 hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        hono-react-tanstack-cf-pages-starter
                    </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-5 bg-white shadow-sm space-y-1">
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                            01 — Runtime
                        </p>
                        <p className="text-base font-bold text-gray-900">Cloudflare Pages</p>
                        <p className="text-sm text-gray-500">Edge-deployed, zero cold starts</p>
                    </div>
                    <div className="border rounded-lg p-5 bg-white shadow-sm space-y-1">
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                            02 — Server
                        </p>
                        <p className="text-base font-bold text-gray-900">Hono v4</p>
                        <p className="text-sm text-gray-500">Lightweight edge-native framework</p>
                    </div>
                    <div className="border rounded-lg p-5 bg-white shadow-sm space-y-1">
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                            03 — Router
                        </p>
                        <p className="text-base font-bold text-gray-900">TanStack Router</p>
                        <p className="text-sm text-gray-500">File-based, fully type-safe</p>
                    </div>
                    <div className="border rounded-lg p-5 bg-white shadow-sm space-y-1">
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">
                            04 — UI
                        </p>
                        <p className="text-base font-bold text-gray-900">React 19 + Tailwind 4</p>
                        <p className="text-sm text-gray-500">SSR-hydrated on the client</p>
                    </div>
                </div>

                <Link
                    to="/"
                    className="inline-block text-sm text-gray-400 hover:text-gray-900 transition-colors"
                >
                    ← Back to Home
                </Link>

            </div>
        </div>
    );
}