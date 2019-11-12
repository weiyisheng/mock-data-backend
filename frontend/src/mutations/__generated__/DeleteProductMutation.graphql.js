/**
 * @flow
 * @relayHash f89713b7d104b2369b797fc453c5d6e9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProductInput = {|
  id: any,
  clientMutationId: string,
|};
export type DeleteProductMutationVariables = {|
  input: DeleteProductInput
|};
export type DeleteProductMutationResponse = {|
  +deleteProduct: ?{|
    +deletedProduct: ?{|
      +id: string
    |}
  |}
|};
export type DeleteProductMutation = {|
  variables: DeleteProductMutationVariables,
  response: DeleteProductMutationResponse,
|};
*/


/*
mutation DeleteProductMutation(
  $input: DeleteProductInput!
) {
  deleteProduct(input: $input) {
    deletedProduct {
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
    "type": "DeleteProductInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteProductPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deletedProduct",
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
    "name": "DeleteProductMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteProductMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteProductMutation",
    "id": null,
    "text": "mutation DeleteProductMutation(\n  $input: DeleteProductInput!\n) {\n  deleteProduct(input: $input) {\n    deletedProduct {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8769449323d6e4c5254270fb75340a3e';
module.exports = node;
