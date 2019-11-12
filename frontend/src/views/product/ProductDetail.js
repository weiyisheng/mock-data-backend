import React, { useState } from "react";
import { graphql, QueryRenderer } from "react-relay";

import environment from "/src/environment";

import { get } from "lodash";

import { Table, Button, message, Modal } from "antd";

const { confirm } = Modal;

import mockColumns from "./mockColumns";

import AddMockModal from "./components/AddMockModal";

import DeleteMockMutation from "/src/mutations/DeleteMockMutation";

function ProductDetail(props) {
  //props
  const { viewer } = props;

  //state
  const [addModalVisible, setAddModalVisible] = useState(false);

  const product = viewer.product;

  const mocks = (get(viewer, "product.mocks.edges") || []).map(({ node }) => ({
    key: node.id,
    ...node
  }));

  const parentID = product.id;

  function deleteMock(mock) {
    confirm({
      title: `是否删除 “${mock.name}” 模拟数据?`,
      okText: "删除",
      okType: "danger",
      cancelText: "取消",
      onOk() {
        DeleteMockMutation.commit({
          input: {
            id: mock.id
          },
          parentID,
          onCompleted() {
            message.success("删除模拟数据成功");
          }
        });
      },
      onCancel() {
        setAddModalVisible(false);
      }
    });
  }

  return (
    <div className="product-detail">
      <div style={{ padding: 20 }}>
        <p className="product-name">项目名称：{product.name}</p>
        <p className="product-name">项目路径：{product.path}</p>
      </div>
      <Button
        type="primary"
        onClick={() => setAddModalVisible(true)}
        style={{ marginBottom: 20 }}
      >
        添加数据
      </Button>
      <AddMockModal
        parentID={parentID}
        visible={addModalVisible}
        close={() => setAddModalVisible(false)}
      />
      <Table columns={mockColumns(deleteMock)} dataSource={mocks} />
    </div>
  );
}
// eslint-disable-next-line react/display-name
export default outerProps => {
  const { params } = outerProps.match;
  const { productId } = params;

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ProductDetailQuery($productId: ProductId!) {
          viewer {
            id
            product(id: $productId) {
              id
              name
              path
              mocks(first: 100) @connection(key: "ProductDetail_mocks") {
                edges {
                  node {
                    id
                    name
                    path
                    product {
                      path
                    }
                  }
                }
              }
            }
          }
        }
      `}
      variables={{
        productId
      }}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <ProductDetail {...props} />;
      }}
    />
  );
};
