import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth' 
import home from './home'

const app = new Hono()

app.use('/admin', basicAuth({
  username: '',
  password: '',
}))

app.route('/', home)

export default app
