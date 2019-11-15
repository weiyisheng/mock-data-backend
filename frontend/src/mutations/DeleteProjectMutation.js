import { graphql } from "react-relay";
import commitMutation from "./commitMutation";

const mutation = graphql`
  mutation DeleteProjectMutation($input: DeleteProjectInput!) {
    deleteProject(input: $input) {
      deletedProject {
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
            key: "ProjectList_projects"
          }
        ],
        pathToConnection: ["viewer", "projects"],
        deletedIDFieldName: ["deletedProject"]
      }
    ],
    onCompleted,
    onError
  });
}

export default { commit };
