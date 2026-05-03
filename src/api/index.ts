import { Hono } from 'hono'

const api = new Hono();

api.get('/health', (c) => {
    return c.json({ error: false, message: "OK" })
})

api.get("/timestamp", (c) => {
    return c.json({
        error: false,
        message: "Timestamp generated successfully",
        data: {
            timestamp: Date.now(),
            iso: new Date().toISOString(),
        }
    });
});

export default api;
