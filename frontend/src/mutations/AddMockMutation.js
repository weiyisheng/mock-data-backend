import { graphql } from "react-relay";
import commitMutation from "./commitMutation";

const mutation = graphql`
  mutation AddMockMutation($input: AddMockInput!) {
    addMock(input: $input) {
      addedMockEdge {
        node {
          id
          name
          path
          product {
            path
          }
        }
      }
    }
  }
`;

function commit({ input, parentID, onCompleted, onError }) {
  commitMutation({
    mutation,
    variables: {
      input
    },
    configs: [
      {
        type: "RANGE_ADD",
        parentID,
        connectionInfo: [
          {
            key: "ProductDetail_mocks",
            rangeBehavior: "prepend"
          }
        ],
        edgeName: "addedMockEdge"
      }
    ],
    onCompleted,
    onError
  });
}

export default { commit };
