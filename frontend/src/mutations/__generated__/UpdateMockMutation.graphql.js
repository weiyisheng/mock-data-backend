/**
 * @flow
 * @relayHash 473eea32d75048f02024231e99495f68
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateMockInput = {|
  id: any,
  values?: ?UpdateMockValuesInput,
  clientMutationId: string,
|};
export type UpdateMockValuesInput = {|
  name?: ?string,
  pathKey?: ?string,
  remark?: ?string,
  template?: ?any,
  projectId?: ?any,
|};
export type UpdateMockMutationVariables = {|
  input: UpdateMockInput
|};
export type UpdateMockMutationResponse = {|
  +updateMock: ?{|
    +changedMock: ?{|
      +id: string,
      +template: ?any,
    |}
  |}
|};
export type UpdateMockMutation = {|
  variables: UpdateMockMutationVariables,
  response: UpdateMockMutationResponse,
|};
*/


/*
mutation UpdateMockMutation(
  $input: UpdateMockInput!
) {
  updateMock(input: $input) {
    changedMock {
      id
      template
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateMockInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateMock",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateMockPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "changedMock",
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "template",
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
    "name": "UpdateMockMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateMockMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateMockMutation",
    "id": null,
    "text": "mutation UpdateMockMutation(\n  $input: UpdateMockInput!\n) {\n  updateMock(input: $input) {\n    changedMock {\n      id\n      template\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b6b27ba6fba22c4c65e77ebf5168654f';
module.exports = node;
