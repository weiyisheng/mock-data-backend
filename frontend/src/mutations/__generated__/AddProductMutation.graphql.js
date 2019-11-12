/**
 * @flow
 * @relayHash efdc2cdfdadb196b92c3dc3fb96faea4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddProductInput = {|
  name?: ?string,
  path?: ?string,
  remark?: ?string,
  clientMutationId: string,
|};
export type AddProductMutationVariables = {|
  input: AddProductInput
|};
export type AddProductMutationResponse = {|
  +addProduct: ?{|
    +addedProductEdge: ?{|
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
export type AddProductMutation = {|
  variables: AddProductMutationVariables,
  response: AddProductMutationResponse,
|};
*/


/*
mutation AddProductMutation(
  $input: AddProductInput!
) {
  addProduct(input: $input) {
    addedProductEdge {
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
    "type": "AddProductInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AddProductPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addedProductEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "ProductEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Product",
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
    "name": "AddProductMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddProductMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddProductMutation",
    "id": null,
    "text": "mutation AddProductMutation(\n  $input: AddProductInput!\n) {\n  addProduct(input: $input) {\n    addedProductEdge {\n      node {\n        id\n        name\n        mocks {\n          count\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5b999bd80f2b06b2fb8d343b6b285842';
module.exports = node;
