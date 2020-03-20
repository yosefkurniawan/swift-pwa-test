const port = parseInt(process.env.PORT, 10) || 5000;
const dev =  "production";
const conf = require("./next.config");
const fastify = require("fastify")();
const path = require('path');
// --------------------------------------------------------
// Next routes & rendering configuration
// --------------------------------------------------------
const nextI18NextMiddleware = require("next-i18next/middleware").default;
const nextI18next = require("./i18n");
const initNext = async () => {
  // configure next-i18next middleware in our fastify server
  fastify.register((instance, opts, next) => {
    instance.use(nextI18NextMiddleware(nextI18next));
    next();
  });

  // start and configure next.js with fastify
  fastify.register(require("fastify-nextjs"), { dev, conf }).after(() => {
    fastify.next("/");
    fastify.next("/about");
  });

  // configure static serving for assets
  fastify.register((instance, opts, next) => {
    instance.register(require("fastify-static"), {
      root: path.join(__dirname, "public"),
      prefix: "/"
    });
    next();
  });
};

// --------------------------------------------------------
// Fastify server startup
// --------------------------------------------------------
(async function() {
  await initNext();

  await fastify.listen(port, err => {
    if (err) throw err;
    console.log(`Server listenging on http://localhost:${port}`);
  });
})();
