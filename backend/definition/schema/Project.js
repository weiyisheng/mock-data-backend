const SG = require("simple-graphql").default;

export default SG.schema("Product", {
  plugin: {
    pluralQuery: true,
    singularQuery: true,
    addMutation: true,
    updateMutation: true,
    deleteMutation: true
  }
})
  .fields({
    name: "String",
    path: "String",
    remark: "String"
  })
  .hasMany({
    mocks: {
      target: "Mock",
      foreignField: "product",
      order: [["id", "DESC"]]
    }
  });
