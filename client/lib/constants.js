export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://digiart-strapi.herokuapp.com"
    : "http://localhost:1337";
