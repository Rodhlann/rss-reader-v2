import { Hono } from "hono"
import { Top } from "./client"

const app = new Hono()

app.get('/', (c) => c.html(<Top />))

export default app
