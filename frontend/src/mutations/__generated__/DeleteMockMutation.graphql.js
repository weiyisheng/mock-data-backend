/**
 * @flow
 * @relayHash e4e6c13074bbcf9a6126dd267e00191d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteMockInput = {|
  id: any,
  clientMutationId: string,
|};
export type DeleteMockMutationVariables = {|
  input: DeleteMockInput
|};
export type DeleteMockMutationResponse = {|
  +deleteMock: ?{|
    +deletedMock: ?{|
      +id: string
    |}
  |}
|};
export type DeleteMockMutation = {|
  variables: DeleteMockMutationVariables,
  response: DeleteMockMutationResponse,
|};
*/


/*
mutation DeleteMockMutation(
  $input: DeleteMockInput!
) {
  deleteMock(input: $input) {
    deletedMock {
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
    "type": "DeleteMockInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteMock",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteMockPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deletedMock",
        "storageKey": null,
        "args": null,
        "concreteType": "Mock",
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
    "name": "DeleteMockMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteMockMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteMockMutation",
    "id": null,
    "text": "mutation DeleteMockMutation(\n  $input: DeleteMockInput!\n) {\n  deleteMock(input: $input) {\n    deletedMock {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1fa7526ef111a23c6f7957d7139f7238';
module.exports = node;
