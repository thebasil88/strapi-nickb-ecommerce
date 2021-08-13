module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'ec2-44-196-132-15.compute-1.amazonaws.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'da3vt4uhl1q4bd'),
        username: env('DATABASE_USERNAME', 'tgzmjupqpdtddh'),
        password: env('DATABASE_PASSWORD', '6ea245dbb94c109a4e41ab0a0edb70d8d93fb4d2791b3b256d0f5660a7489371'),
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
