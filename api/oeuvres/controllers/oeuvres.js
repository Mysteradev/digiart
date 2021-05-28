"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findByRandom(ctx) {
    const { _limit } = ctx.request.query;
    const result = await strapi
      .query("oeuvres")
      .model.query((qb) => {
        qb.orderByRaw("RANDOM()");
        qb.limit(_limit);
      })
      .fetchAll();

    const fields = result.toJSON();
    ctx.send(fields);
  },
};
