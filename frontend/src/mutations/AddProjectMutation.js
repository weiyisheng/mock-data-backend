import { graphql } from "react-relay";
import commitMutation from "./commitMutation";

const mutation = graphql`
  mutation AddProjectMutation($input: AddProjectInput!) {
    addProject(input: $input) {
      addedProjectEdge {
        node {
          id
          name
          pathKey
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
            key: "ProjectList_projects",
            rangeBehavior: "prepend"
          }
        ],
        edgeName: "addedProjectEdge"
      }
    ],
    onCompleted,
    onError
  });
}

export default { commit };
