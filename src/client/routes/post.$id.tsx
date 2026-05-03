import { createFileRoute, Link } from '@tanstack/react-router'

interface Post {
    id: number
    title: string
    body: string
}

export const Route = createFileRoute('/post/$id')({
    loader: async ({ params }): Promise<Post> => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        )
        if (!response.ok) throw new Error(`Post with ID ${params.id} not found`)
        return response.json()
    },
    component: PostComponent,
    head: () => ({
        meta: [{ title: "Hono + React + TanStack Router - Posts" }],
    }),
})

function PostComponent() {
    const post = Route.useLoaderData()

    return (
        <div className="h-full overflow-y-auto">
            <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">

                <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                        Post #{post.id}
                    </p>
                    <h1 className="text-3xl font-bold text-gray-900 capitalize">
                        {post.title}
                    </h1>
                    <p className="text-gray-500 text-sm">
                        // server-rendered detail page
                    </p>
                </div>

                <div className="border rounded-lg p-5 bg-white shadow-sm">
                    <p className="text-gray-600 leading-relaxed">{post.body}</p>
                </div>

                <Link
                    to="/posts"
                    className="inline-block text-sm text-gray-400 hover:text-gray-900 transition-colors"
                >
                    ← Back to Posts
                </Link>

            </div>
        </div>
    )
}