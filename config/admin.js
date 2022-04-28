module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'da9f8f5e004fa1b8e685e9d5d73f222e'),
  },
});
