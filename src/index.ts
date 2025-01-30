const port = Bun.env.PORT;
const hostname = Bun.env.HOSTNAME;

Bun.serve({
  port,
  hostname,
  fetch(req) {
    return new Response('Bun!');
  },
});
