import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth' 

const app = new Hono()

app.use('/admin', basicAuth({
  username: '',
  password: '',
}))

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
