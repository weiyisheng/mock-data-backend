import React, { useState } from "react";

import { graphql, QueryRenderer } from "react-relay";
import environment from "/src/environment";
import { get } from "lodash";

//components
import { Card, Row, Col, Icon } from "antd";

import AddProjectModal from "/src/views/project/components/AddProjectModal";

function ProjectList(props) {
  //props
  const { viewer, history } = props;

  //state
  const [addModalVisible, setAddModalVisible] = useState(false);

  const projects = (get(viewer, "projects.edges") || []).map(e => ({
    key: e.node.id,
    ...e.node
  }));

  return (
    <div className="projects-container">
      <Row gutter={16} style={{ margin: "24px 0" }}>
        {projects.map(project => {
          const { name, pathKey, key, id } = project;
          return (
            <Col span={8} key={key} style={{ margin: "16px 0" }}>
              <Card
                title={name}
                style={{ height: 200 }}
                hoverable
                onClick={() => history.push(`/project/detail/${id}`)}
              >
                <p>项目名称：{name}</p>
                <p>pathKey：{pathKey}</p>
              </Card>
            </Col>
          );
        })}
        <Col span={8} style={{ margin: "16px 0" }}>
          <Card
            onClick={() => setAddModalVisible(true)}
            style={{ height: 200 }}
            hoverable
            bodyStyle={{ textAlign: "center" }}
          >
            <Icon
              type="plus"
              style={{
                fontSize: 30,
                fontWeight: 200,
                color: "rgba(0,0,0,.32)",
                marginTop: 58
              }}
            />
          </Card>
        </Col>
      </Row>
      <AddProjectModal
        viewerID={viewer.id}
        visible={addModalVisible}
        close={() => setAddModalVisible(false)}
      />
    </div>
  );
}

// export default createFragmentContainer(ProjectList, {
//   viewer: graphql`
//     fragment ProjectList_viewer on Viewer {
//       id
//       projects(first: 100)
//         @connection(key: "ProjectList_projects") {
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
export default outerProps => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ProjectListQuery {
          viewer {
            id
            projects(first: 100) @connection(key: "ProjectList_projects") {
              edges {
                node {
                  id
                  name
                  pathKey
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
        return <ProjectList {...props} {...outerProps} />;
      }}
    />
  );
};
