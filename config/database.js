module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0.m1a7z.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'dental-supply-store'),
        username: env('DATABASE_USERNAME', 'dbUser'),
        password: env('DATABASE_PASSWORD', 'dbUserPassword'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
