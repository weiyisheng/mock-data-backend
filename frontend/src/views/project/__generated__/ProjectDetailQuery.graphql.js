/**
 * @flow
 * @relayHash a7678bb564196237374b399b73f0552e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProjectDetailQueryVariables = {|
  projectId: any
|};
export type ProjectDetailQueryResponse = {|
  +viewer: {|
    +id: string,
    +project: ?{|
      +id: string,
      +name: ?string,
      +pathKey: ?string,
      +mocks: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +name: ?string,
            +pathKey: ?string,
            +project: {|
              +pathKey: ?string
            |},
          |}
        |}>
      |},
    |},
  |}
|};
export type ProjectDetailQuery = {|
  variables: ProjectDetailQueryVariables,
  response: ProjectDetailQueryResponse,
|};
*/


/*
query ProjectDetailQuery(
  $projectId: ProjectId!
) {
  viewer {
    id
    project(id: $projectId) {
      id
      name
      pathKey
      mocks(first: 100) {
        edges {
          node {
            id
            name
            pathKey
            project {
              pathKey
              id
            }
            __typename
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
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
    "name": "projectId",
    "type": "ProjectId!",
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
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "projectId"
  }
],
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
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v8 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProjectDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
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
            "name": "project",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "Project",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": "mocks",
                "name": "__ProjectDetail_mocks_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "MockConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MockEdge",
                    "plural": true,
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
                          (v1/*: any*/),
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
                          },
                          (v5/*: any*/)
                        ]
                      },
                      (v6/*: any*/)
                    ]
                  },
                  (v7/*: any*/)
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
    "name": "ProjectDetailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
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
            "name": "project",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "Project",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "mocks",
                "storageKey": "mocks(first:100)",
                "args": (v8/*: any*/),
                "concreteType": "MockConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MockEdge",
                    "plural": true,
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
                          (v1/*: any*/),
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
                              (v1/*: any*/)
                            ]
                          },
                          (v5/*: any*/)
                        ]
                      },
                      (v6/*: any*/)
                    ]
                  },
                  (v7/*: any*/)
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "mocks",
                "args": (v8/*: any*/),
                "handle": "connection",
                "key": "ProjectDetail_mocks",
                "filters": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProjectDetailQuery",
    "id": null,
    "text": "query ProjectDetailQuery(\n  $projectId: ProjectId!\n) {\n  viewer {\n    id\n    project(id: $projectId) {\n      id\n      name\n      pathKey\n      mocks(first: 100) {\n        edges {\n          node {\n            id\n            name\n            pathKey\n            project {\n              pathKey\n              id\n            }\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "viewer",
            "project",
            "mocks"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2f9cdfcec90ca57c56ce1bc9999d7c42';
module.exports = node;
