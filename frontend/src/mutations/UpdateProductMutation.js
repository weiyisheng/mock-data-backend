import { graphql } from "react-relay";
import commitMutation from "./commitMutation";

const mutation = graphql`
  mutation UpdateProductMutation($input: UpdateProductInput!) {
    updateProduct(input: $input) {
      changedProduct {
        id
        name
      }
    }
  }
`;

function commit({ input, onCompleted, onError }) {
  commitMutation({
    mutation,
    variables: {
      input
    },
    onCompleted,
    onError
  });
}

export default { commit };
