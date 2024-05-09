module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    const ctx = strapi.requestContext.get();

    if (!ctx) {
      console.log("this was executed during manual creation");
    } else {
      console.log("this creation was executed during bootstrap");
    }
  },

  beforeUpdate(event) {
    const { data, where, select, populate } = event.params;
    const ctx = strapi.requestContext.get();

    if (!ctx) {
      console.log("this was executed during manual update");
    } else {
      console.log("this update was executed during bootstrap");
    }
  },
};
