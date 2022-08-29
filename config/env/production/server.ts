export default ({ env }) => ({
  host: env("PROD_HOST", "0.0.0.0"),
  port: env.int("PROD_PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
