/**
 * @flow
 * @relayHash 2b9d3a1c3d5849f4f906d2a7a98efc9b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddProjectInput = {|
  name?: ?string,
  pathKey?: ?string,
  remark?: ?string,
  clientMutationId: string,
|};
export type AddProjectMutationVariables = {|
  input: AddProjectInput
|};
export type AddProjectMutationResponse = {|
  +addProject: ?{|
    +addedProjectEdge: ?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +mocks: ?{|
          +count: ?number
        |},
      |}
    |}
  |}
|};
export type AddProjectMutation = {|
  variables: AddProjectMutationVariables,
  response: AddProjectMutationResponse,
|};
*/


/*
mutation AddProjectMutation(
  $input: AddProjectInput!
) {
  addProject(input: $input) {
    addedProjectEdge {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddProjectInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addProject",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddProjectPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addedProjectEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "ProjectEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
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
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "mocks",
                "storageKey": null,
                "args": null,
                "concreteType": "MockConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "count",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
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
    "name": "AddProjectMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddProjectMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddProjectMutation",
    "id": null,
    "text": "mutation AddProjectMutation(\n  $input: AddProjectInput!\n) {\n  addProject(input: $input) {\n    addedProjectEdge {\n      node {\n        id\n        name\n        mocks {\n          count\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '35109e09fb6782235116d1d3f0a73bc0';
module.exports = node;
