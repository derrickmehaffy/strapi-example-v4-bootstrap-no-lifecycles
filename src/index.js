"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const contentType = "api::test.test";
    const data = [
      {
        test: "test1",
      },
      {
        test: "test2",
      },
    ];

    for (const item of data) {
      await strapi.entityService.create(contentType, {
        data: item,
      });
    }
  },
};
