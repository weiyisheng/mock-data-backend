import { graphql } from "react-relay";
import commitMutation from "./commitMutation";

const mutation = graphql`
  mutation UpdateMockMutation($input: UpdateMockInput!) {
    updateMock(input: $input) {
      changedMock {
        id
        template
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
