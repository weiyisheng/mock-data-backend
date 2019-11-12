const SG = require("simple-graphql").default;

export default SG.schema("Mock", {
  plugin: {
    pluralQuery: true, //内置插件，用于生成 Mock(id: MockId): Mock 接口
    singularQuery: true, //内置插件，用于生成 Mocks(...): MockConnection 接口
    addMutation: true, //内置插件，用于生成 addMock(...) 接口
    updateMutation: true, //内置插件，用于生成 updateMock(...) 接口
    deleteMutation: true //内置插件，用于生成 deleteMock(...) 接口
  }
}).fields({
  name: "String",
  path: "String",
  remark: "String",
  template: "JSON",
  product: "Product"
});
