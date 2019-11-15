/**
 * @flow
 * @relayHash 5027e55e84bc63f490ca02acd529d1b9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProjectInput = {|
  id: any,
  clientMutationId: string,
|};
export type DeleteProjectMutationVariables = {|
  input: DeleteProjectInput
|};
export type DeleteProjectMutationResponse = {|
  +deleteProject: ?{|
    +deletedProject: ?{|
      +id: string
    |}
  |}
|};
export type DeleteProjectMutation = {|
  variables: DeleteProjectMutationVariables,
  response: DeleteProjectMutationResponse,
|};
*/


/*
mutation DeleteProjectMutation(
  $input: DeleteProjectInput!
) {
  deleteProject(input: $input) {
    deletedProject {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteProject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteProjectPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deletedProject",
        "storageKey": null,
        "args": null,
        "concreteType": "Project",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteProjectMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteProjectMutation",
    "id": null,
    "text": "mutation DeleteProjectMutation(\n  $input: DeleteProjectInput!\n) {\n  deleteProject(input: $input) {\n    deletedProject {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c5047b2ba8f4e386304962877d37dcf5';
module.exports = node;
