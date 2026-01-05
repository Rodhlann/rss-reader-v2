import { FC } from "hono/jsx";

const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{props.children}</body>
    </html>
  )
}

export const Top: FC = (props) => {
  return (
    <Layout>
      <h1>Hello World!</h1>
    </Layout>
  )
}
