# Welcome to Remix!

This example I've put together is to show shared API and UI data for exposing a web app and also a REST API for CRUD operations too. This simple example doesn't go far (It doesn't even use a database) and is based on the Remix tutorial, augmented with a few API routes.

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
