if (process.env.NODE_ENV === "production") {
  module.exports = ({ env }) => ({
    upload: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  });
} else {
  module.exports = {};
}
