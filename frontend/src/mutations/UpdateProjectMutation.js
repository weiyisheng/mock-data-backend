import { graphql } from "react-relay";
import commitMutation from "./commitMutation";

const mutation = graphql`
  mutation UpdateProjectMutation($input: UpdateProjectInput!) {
    updateProject(input: $input) {
      changedProject {
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
