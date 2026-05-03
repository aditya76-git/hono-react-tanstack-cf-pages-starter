import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
    component: Home,
});

type TimestampResponse = {
    error: boolean;
    message: string;
    data: {
        timestamp: number;
        iso: string;
    };
};

function Home() {
    const [count, setCount] = useState(0);
    const [timestamp, setTimestamp] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchTimestamp = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/timestamp");
            const data: TimestampResponse = await res.json();
            setTimestamp(data.data.iso);
        } catch (err) {
            console.error(err);
            setTimestamp("Failed to fetch");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-full overflow-y-auto">
            <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">

                {/* Hero */}
                <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                        Stack Demo
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

                    {/* Card: Navigation */}
                    <div className="border rounded-lg p-5 space-y-3 bg-white shadow-sm">
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                                01 — Routing
                            </p>
                            <h2 className="text-base font-bold text-gray-900">
                                TanStack File-based Routes
                            </h2>

                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <Link
                                to="/about"
                                className="px-3 py-1.5 border border-gray-900 text-gray-900 text-sm rounded hover:bg-gray-900 hover:text-white transition-colors"
                            >
                                About →
                            </Link>
                            <Link
                                to="/posts"
                                className="px-3 py-1.5 border border-gray-900 text-gray-900 text-sm rounded hover:bg-gray-900 hover:text-white transition-colors"
                            >
                                Posts →
                            </Link>
                        </div>
                    </div>

                    {/* Card: Counter */}
                    <div className="border rounded-lg p-5 space-y-3 bg-white shadow-sm">
                        <div>
                            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                                02 — Client State
                            </p>
                            <h2 className="text-base font-bold text-gray-900">
                                React useState
                            </h2>

                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded text-lg leading-none hover:bg-gray-700 transition-colors"
                                onClick={() => setCount((c) => c - 1)}
                            >
                                −
                            </button>
                            <span className="text-2xl font-bold w-12 text-center tabular-nums">
                                {count}
                            </span>
                            <button
                                className="w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded text-lg leading-none hover:bg-gray-700 transition-colors"
                                onClick={() => setCount((c) => c + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                </div>
                {/* Card: API Fetch */}
                <div className="border rounded-lg p-5 space-y-3 bg-white shadow-sm">
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                            03 — Hono API
                        </p>
                        <h2 className="text-base font-bold text-gray-900">
                            Client-side Fetch → /api/timestamp
                        </h2>

                    </div>
                    <button
                        onClick={fetchTimestamp}
                        disabled={loading}
                        className="px-3 py-1.5 bg-gray-900 text-white text-sm rounded hover:bg-gray-700 disabled:opacity-50 transition-colors"
                    >
                        Get Timestamp
                    </button>
                    {timestamp && (
                        <div className="text-sm font-mono bg-gray-50 border rounded px-3 py-2 text-gray-700 break-all">
                            {timestamp}
                        </div>
                    )}
                    {!timestamp && (
                        <p className="text-sm text-gray-400 italic">
                            Hit the button to call the API.
                        </p>
                    )}
                </div>

            </div>
        </div>
    );
}