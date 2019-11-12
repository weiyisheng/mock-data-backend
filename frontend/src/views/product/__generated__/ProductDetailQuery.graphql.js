/**
 * @flow
 * @relayHash c5afb4303e17decefb52c13e0edf56f7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ProductDetailQueryVariables = {|
  productId: any
|};
export type ProductDetailQueryResponse = {|
  +viewer: {|
    +id: string,
    +product: ?{|
      +id: string,
      +name: ?string,
      +path: ?string,
      +mocks: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: ?{|
            +id: string,
            +name: ?string,
            +path: ?string,
            +product: ?{|
              +path: ?string
            |},
          |}
        |}>
      |},
    |},
  |}
|};
export type ProductDetailQuery = {|
  variables: ProductDetailQueryVariables,
  response: ProductDetailQueryResponse,
|};
*/


/*
query ProductDetailQuery(
  $productId: ProductId!
) {
  viewer {
    id
    product(id: $productId) {
      id
      name
      path
      mocks(first: 100) {
        edges {
          node {
            id
            name
            path
            product {
              path
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
    "name": "productId",
    "type": "ProductId!",
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
    "variableName": "productId"
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
  "name": "path",
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
    "name": "ProductDetailQuery",
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
            "name": "product",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "Product",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": "mocks",
                "name": "__ProductDetail_mocks_connection",
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
                            "name": "product",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Product",
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
    "name": "ProductDetailQuery",
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
            "name": "product",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "Product",
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
                            "name": "product",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Product",
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
                "key": "ProductDetail_mocks",
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
    "name": "ProductDetailQuery",
    "id": null,
    "text": "query ProductDetailQuery(\n  $productId: ProductId!\n) {\n  viewer {\n    id\n    product(id: $productId) {\n      id\n      name\n      path\n      mocks(first: 100) {\n        edges {\n          node {\n            id\n            name\n            path\n            product {\n              path\n              id\n            }\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "viewer",
            "product",
            "mocks"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '90a406a480853d8bc4e500532d77496f';
module.exports = node;
