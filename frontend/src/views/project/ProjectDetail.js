import React, { useState } from "react";
import { graphql, QueryRenderer } from "react-relay";

import environment from "/src/environment";

import { get } from "lodash";

import { Table, Button, message, Modal, Col, Row } from "antd";

const { confirm } = Modal;

import mockColumns from "./mockColumns";

import AddMockModal from "./components/AddMockModal";

import DeleteMockMutation from "/src/mutations/DeleteMockMutation";

function ProjectDetail(props) {
  //props
  const { viewer } = props;

  //state
  const [addModalVisible, setAddModalVisible] = useState(false);

  const project = viewer.project;

  const mocks = (get(viewer, "project.mocks.edges") || []).map(({ node }) => ({
    key: node.id,
    ...node
  }));

  const parentID = project.id;

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
  const { name, pathKey } = project;

  return (
    <div className="project-detail">
      <p
        style={{
          padding: "24px 0",
          borderBottom: "1px solid #dcdcdc",
          fontSize: 28
        }}
      >
        {name}
      </p>
      <Row style={{ margin: "16px 0" }}>
        <Col span={6}>
          <p className="project-name">项目名称：{name}</p>
        </Col>
        <Col span={6}>
          <p className="project-name">pathKey：{pathKey}</p>
        </Col>
      </Row>
      <Row type="flex" align="bottom" style={{ marginBottom: 20 }}>
        <Button type="primary" onClick={() => setAddModalVisible(true)}>
          添加接口
        </Button>
        <p
          style={{
            margin: "0 0 0 16px",
            fontSize: 12,
            color: "rgba(0, 0, 0, 0.4)"
          }}
        >{`接口访问路径规则："/v1/${pathKey}/\${接口.pathKey}`}</p>
      </Row>

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
  const { projectId } = params;

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ProjectDetailQuery($projectId: ProjectId!) {
          viewer {
            id
            project(id: $projectId) {
              id
              name
              pathKey
              mocks(first: 100) @connection(key: "ProjectDetail_mocks") {
                edges {
                  node {
                    id
                    name
                    pathKey
                    project {
                      pathKey
                    }
                  }
                }
              }
            }
          }
        }
      `}
      variables={{
        projectId
      }}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <ProjectDetail {...props} />;
      }}
    />
  );
};
