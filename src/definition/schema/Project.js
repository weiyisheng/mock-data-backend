const SG = require("simple-graphql").default;

export default SG.schema("Project", {
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
    pathKey: "String",
    remark: "String"
  })
  .hasMany({
    mocks: {
      target: "Mock",
      foreignField: "project",
      order: [["id", "DESC"]]
    }
  });
