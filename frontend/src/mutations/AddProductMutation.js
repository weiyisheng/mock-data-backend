import { graphql } from "react-relay";
import commitMutation from "./commitMutation";

const mutation = graphql`
  mutation AddProductMutation($input: AddProductInput!) {
    addProduct(input: $input) {
      addedProductEdge {
        node {
          id
          name
          mocks {
            count
          }
        }
      }
    }
  }
`;

function commit({ input, viewerID, onCompleted, onError }) {
  commitMutation({
    mutation,
    variables: {
      input
    },
    configs: [
      {
        type: "RANGE_ADD",
        parentID: viewerID,
        connectionInfo: [
          {
            key: "ProductList_products",
            rangeBehavior: "prepend"
          }
        ],
        edgeName: "addedProductEdge"
      }
    ],
    onCompleted,
    onError
  });
}

export default { commit };
