import React, { useState } from "react";

import { graphql, QueryRenderer } from "react-relay";
import environment from "/src/environment";
import { get } from "lodash";

//components
import { Table, Button, Modal, message } from "antd";
const { confirm } = Modal;

import AddProductModal from "/src/views/product/components/AddProductModal";

// mutations
import DeleteProductMutation from "/src/mutations/DeleteProductMutation";

import productColumns from "/src/views/product/productColumns";

function ProductList(props) {
  //props
  const { viewer } = props;

  //state
  const [addModalVisible, setAddModalVisible] = useState(false);

  function handleDelete(product) {
    confirm({
      title: `确认删除 “${product.name}” 项目?`,
      okText: "删除",
      okType: "danger",
      cancelText: "取消",
      onOk() {
        DeleteProductMutation.commit({
          input: {
            id: product.id
          },
          viewerID: viewer.id,
          onCompleted() {
            message.success("删除项目成功");
          }
        });
      },
      onCancel() {
        setAddModalVisible(false);
      }
    });
  }

  const products = (get(viewer, "products.edges") || []).map(e => ({
    key: e.node.id,
    ...e.node
  }));

  return (
    <div className="products-container">
      <Button
        onClick={() => setAddModalVisible(!addModalVisible)}
        style={{ marginBottom: 20 }}
        type="primary"
      >
        添加项目
      </Button>
      <Table columns={productColumns(handleDelete)} dataSource={products} />
      <AddProductModal
        viewerID={viewer.id}
        visible={addModalVisible}
        close={() => setAddModalVisible(false)}
      />
    </div>
  );
}

// export default createFragmentContainer(ProductList, {
//   viewer: graphql`
//     fragment ProductList_viewer on Viewer {
//       id
//       products(first: 100)
//         @connection(key: "ProductList_products") {
//         edges {
//           node {
//             id
//             name
//             mocks {
//               count
//             }
//           }
//         }
//       }
//     }
//   `
// });

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ProductListQuery {
          viewer {
            id
            products(first: 100) @connection(key: "ProductList_products") {
              edges {
                node {
                  id
                  name
                  path
                  mocks {
                    count
                  }
                }
              }
            }
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <ProductList {...props} />;
      }}
    />
  );
};
