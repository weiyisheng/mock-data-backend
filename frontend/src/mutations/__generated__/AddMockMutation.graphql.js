/**
 * @flow
 * @relayHash 59a58b5737da0f04d7f7f25c29762cad
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddMockInput = {|
  name?: ?string,
  path?: ?string,
  remark?: ?string,
  template?: ?any,
  productId?: ?any,
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
        +path: ?string,
        +product: ?{|
          +path: ?string
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
        path
        product {
          path
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
  "name": "path",
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
                    "name": "product",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Product",
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
                    "name": "product",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Product",
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
    "text": "mutation AddMockMutation(\n  $input: AddMockInput!\n) {\n  addMock(input: $input) {\n    addedMockEdge {\n      node {\n        id\n        name\n        path\n        product {\n          path\n          id\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8408f3065975aceffbbfc296f05bddc';
module.exports = node;
