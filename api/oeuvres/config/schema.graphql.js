module.exports = {
  query: `randomOeuvres(limit: Int): [Oeuvres]`,
  resolver: {
    Query: {
      randomOeuvres: {
        description: "Return x random arts",
        resolver: "application::oeuvres.oeuvres.findByRandom",
      },
    },
  },
};
