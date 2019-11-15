/**
 * @flow
 * @relayHash 288dcd4f614f96e41bb3615f47e1e81f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddMockInput = {|
  name?: ?string,
  pathKey?: ?string,
  remark?: ?string,
  template?: ?any,
  projectId: any,
  clientMutationId: string,
|};
export type AddMockMutationVariables = {|
  input: AddMockInput
|};
export type AddMockMutationResponse = {|
  +addMock: ?{|
    +addedMockEdge: ?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +pathKey: ?string,
        +project: {|
          +pathKey: ?string
        |},
      |}
    |}
  |}
|};
export type AddMockMutation = {|
  variables: AddMockMutationVariables,
  response: AddMockMutationResponse,
|};
*/


/*
mutation AddMockMutation(
  $input: AddMockInput!
) {
  addMock(input: $input) {
    addedMockEdge {
      node {
        id
        name
        pathKey
        project {
          pathKey
          id
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
    "type": "AddMockInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pathKey",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddMockMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addMock",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AddMockPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "addedMockEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "MockEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Mock",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "project",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Project",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddMockMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addMock",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AddMockPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "addedMockEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "MockEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Mock",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "project",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Project",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v2/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddMockMutation",
    "id": null,
    "text": "mutation AddMockMutation(\n  $input: AddMockInput!\n) {\n  addMock(input: $input) {\n    addedMockEdge {\n      node {\n        id\n        name\n        pathKey\n        project {\n          pathKey\n          id\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aac9a75fd18d7343659ed05129b2143f';
module.exports = node;
