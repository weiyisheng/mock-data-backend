/**
 * @flow
 * @relayHash 67a2dd9fbb4e777451c370604d7e3884
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProductInput = {|
  id: any,
  values?: ?UpdateProductValuesInput,
  clientMutationId: string,
|};
export type UpdateProductValuesInput = {|
  name?: ?string,
  path?: ?string,
  remark?: ?string,
|};
export type UpdateProductMutationVariables = {|
  input: UpdateProductInput
|};
export type UpdateProductMutationResponse = {|
  +updateProduct: ?{|
    +changedProduct: ?{|
      +id: string,
      +name: ?string,
    |}
  |}
|};
export type UpdateProductMutation = {|
  variables: UpdateProductMutationVariables,
  response: UpdateProductMutationResponse,
|};
*/


/*
mutation UpdateProductMutation(
  $input: UpdateProductInput!
) {
  updateProduct(input: $input) {
    changedProduct {
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
    "type": "UpdateProductInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateProductPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "changedProduct",
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
    "name": "UpdateProductMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateProductMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateProductMutation",
    "id": null,
    "text": "mutation UpdateProductMutation(\n  $input: UpdateProductInput!\n) {\n  updateProduct(input: $input) {\n    changedProduct {\n      id\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2798e203d22c85cae9111365311afb65';
module.exports = node;
