import { Hono } from "hono";
import { HandlerResponse } from "hono/types";
import { Feed } from "./feeds";

const app = new Hono<{ Bindings: Env }>();

// app.get("/admin", (c) => c.text('Admin'))

app.get("/api/feeds", async (c): Promise<HandlerResponse<Feed[]>> => {
  // const { max_entries, duration } = c.req.query()
  // const response = await app.fetch(`route?${max_entries}&${duration}`)
  return c.json([
    {
      name: "Test",
      category: "Test",
      entries: [
        {
          title: "Test",
          url: "test",
          created_date: new Date().toString(),
        }
      ]
    }    
  ]);
})

export default app;
