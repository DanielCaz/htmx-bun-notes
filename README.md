# Bun + HTMX + Elysia + MongoDB + TailwindCSS example app

Heavily inspired by/based on [bun-htmx](https://github.com/danawoodman/bun-htmx)

A simple notes app made with Bun and HTMX. Uses Elysia for content serving/API and MongoDB for storage. Also uses TailwindCSS and DaisyUI for styling.

I made this to learn Bun and ElysiaJS, and to have a simple example app to refer to in the future. If you have any suggestions for improvements, please let me know!

## Technologies

- [Bun](https://bun.sh/)
- [ElysiaJS](https://elysiajs.com/)
- [HTMX](https://htmx.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [MongoDB](https://www.mongodb.com/)

## Getting started

1. Clone this repo

```bash
git clone https://github.com/DanielCaz/htmx-bun-notes.git
```

2. Install dependencies

```bash
bun install
```

3. Create a `.env` file in the root of the project and add the following:

```bash
MONGO_URI=<your-mongodb-uri>
```

4. Start the server

```bash
bun dev:tailwind
bun dev:server
```

5. Open the app in your browser

```bash
http://localhost:3000
```

## Docker

You can also run this app using Docker. To do so, run the following commands:

```bash
docker-compose build
docker-compose up
```

## License

MIT

I hope this is useful to someone. Do whatever you want with it :D
