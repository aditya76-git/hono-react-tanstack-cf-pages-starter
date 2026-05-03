import { createFileRoute, Link } from '@tanstack/react-router'

interface Post {
    id: number
    title: string
    body: string
}

export const Route = createFileRoute('/posts')({
    loader: async (): Promise<Post[]> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) throw new Error('Failed to fetch posts')
        const posts: Post[] = await response.json()
        return posts || []
    },
    component: PostsComponent,
    head: () => ({
        meta: [{ title: "Hono + React + TanStack Router - Posts" }],
    }),
})

function PostsComponent() {
    const posts = Route.useLoaderData()

    return (
        <div className="h-full overflow-y-auto">
            <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">

                <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                        SSR Loader Demo
                    </p>
                    <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
                    <p className="text-gray-500 text-sm">
                        // fetched server-side via TanStack loader
                    </p>
                </div>

                <div className="space-y-4">
                    {posts.slice(0, 2).map((post: Post) => (
                        <div key={post.id} className="border rounded-lg p-5 bg-white shadow-sm space-y-3">
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                                    #{post.id}
                                </p>
                                <h2 className="text-base font-bold text-gray-900 capitalize">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                    {post.body}
                                </p>
                            </div>
                            <Link
                                to="/post/$id"
                                params={{ id: post.id.toString() }}
                                className="inline-block px-3 py-1.5 border border-gray-900 text-gray-900 text-sm rounded hover:bg-gray-900 hover:text-white transition-colors"
                            >
                                View Details →
                            </Link>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}