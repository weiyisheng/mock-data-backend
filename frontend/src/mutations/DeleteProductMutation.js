import { graphql } from "react-relay";
import commitMutation from "./commitMutation";

const mutation = graphql`
  mutation DeleteProductMutation($input: DeleteProductInput!) {
    deleteProduct(input: $input) {
      deletedProduct {
        id
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
        type: "RANGE_DELETE",
        parentID: viewerID,
        connectionKeys: [
          {
            key: "ProductList_products"
          }
        ],
        pathToConnection: ["viewer", "products"],
        deletedIDFieldName: ["deletedProduct"]
      }
    ],
    onCompleted,
    onError
  });
}

export default { commit };
