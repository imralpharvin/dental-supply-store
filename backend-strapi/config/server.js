module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8082),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "dbedbee0c6792d8f4825298d13dcf022"),
    },
  },
});
