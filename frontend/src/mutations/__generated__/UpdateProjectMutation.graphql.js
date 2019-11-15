/**
 * @flow
 * @relayHash a00efa432c0fdad3bebd1778412dae98
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProjectInput = {|
  id: any,
  values?: ?UpdateProjectValuesInput,
  clientMutationId: string,
|};
export type UpdateProjectValuesInput = {|
  name?: ?string,
  pathKey?: ?string,
  remark?: ?string,
|};
export type UpdateProjectMutationVariables = {|
  input: UpdateProjectInput
|};
export type UpdateProjectMutationResponse = {|
  +updateProject: ?{|
    +changedProject: ?{|
      +id: string,
      +name: ?string,
    |}
  |}
|};
export type UpdateProjectMutation = {|
  variables: UpdateProjectMutationVariables,
  response: UpdateProjectMutationResponse,
|};
*/


/*
mutation UpdateProjectMutation(
  $input: UpdateProjectInput!
) {
  updateProject(input: $input) {
    changedProject {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateProject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateProjectPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "changedProject",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
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
    "name": "UpdateProjectMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateProjectMutation",
    "id": null,
    "text": "mutation UpdateProjectMutation(\n  $input: UpdateProjectInput!\n) {\n  updateProject(input: $input) {\n    changedProject {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '57232a658ae9cafcf6105b9691fa239d';
module.exports = node;
