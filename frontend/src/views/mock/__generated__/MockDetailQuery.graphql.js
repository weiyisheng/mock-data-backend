/**
 * @flow
 * @relayHash 8db7e14bf18518e0986310fc19f4be6b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MockDetailQueryVariables = {|
  mockId: any
|};
export type MockDetailQueryResponse = {|
  +viewer: {|
    +id: string,
    +mock: ?{|
      +id: string,
      +name: ?string,
      +pathKey: ?string,
      +template: ?any,
      +project: {|
        +id: string,
        +name: ?string,
        +pathKey: ?string,
      |},
    |},
  |}
|};
export type MockDetailQuery = {|
  variables: MockDetailQueryVariables,
  response: MockDetailQueryResponse,
|};
*/


/*
query MockDetailQuery(
  $mockId: MockId!
) {
  viewer {
    id
    mock(id: $mockId) {
      id
      name
      pathKey
      template
      project {
        id
        name
        pathKey
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "mockId",
    "type": "MockId!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pathKey",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "Viewer",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "mock",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "mockId"
          }
        ],
        "concreteType": "Mock",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "template",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "project",
            "storageKey": null,
            "args": null,
            "concreteType": "Project",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
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
    "name": "MockDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v4/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MockDetailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v4/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "MockDetailQuery",
    "id": null,
    "text": "query MockDetailQuery(\n  $mockId: MockId!\n) {\n  viewer {\n    id\n    mock(id: $mockId) {\n      id\n      name\n      pathKey\n      template\n      project {\n        id\n        name\n        pathKey\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd4d30a3f57b430b18219f09d10373b3e';
module.exports = node;
