// relay.config.js
module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: "./frontend/src",
  schema: "./build/schema.json",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"]
};