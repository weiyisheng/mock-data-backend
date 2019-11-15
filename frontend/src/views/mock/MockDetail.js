import React, { useState } from "react";
import { graphql, QueryRenderer } from "react-relay";
import { Link } from "react-router-dom";

import environment from "/src/environment";

import { get } from "lodash";
import Mock from "mockjs";

// code prettier
import prettier from "prettier/standalone";
import parserBabylon from "prettier/parser-babylon";

//code highlight
import "highlight.js/styles/github.css";
import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import { Row, Col, Button, message } from "antd";

import CodeMirror from "react-codemirror";

import { arrayTemplate } from "./templates";

const HIGHT = 400;

import UpdateMockMutation from "/src/mutations/UpdateMockMutation";

function saveMockTemplate(mock, template) {
  UpdateMockMutation.commit({
    input: {
      id: mock.id,
      values: { template }
    },
    onCompleted: () => {
      message.success("更新成功");
    }
  });
}

function MockDetail(props) {
  //props
  const { viewer } = props;

  //state
  const [template, setTemplate] = useState(
    get(viewer, "mock.template", "") || arrayTemplate
  );

  const mock = viewer.mock;

  let tempObj = template;

  try {
    tempObj = Mock.mock(JSON.parse(tempObj));

    const parsed = prettier.format(JSON.stringify(tempObj), {
      parser: "json",
      plugins: [parserBabylon]
    });

    tempObj = tempObj ? hljs.highlight("JavaScript", parsed).value : "";
  } catch (err) {
    console.error(" error : ", err);
    tempObj = "";
  }

  const { name, pathKey, project } = mock;

  return (
    <div className="mock-detail">
      <Row style={{ padding: "20px 0", borderBottom: "1px solid #dcdcdc" }}>
        <Col className="mock-name" span={6}>
          接口名称：{name}
        </Col>
        <Col className="mock-name" span={6}>
          pathKey：{pathKey}
        </Col>
        <Col className="mock-name" span={6}>
          访问路径：{`/v1/${project.pathKey}/${pathKey}`}
        </Col>
        <Col className="mock-name" span={6}>
          所属项目：
          <Link to={`/project/detail/${project.id}`}>{project.name}</Link>
        </Col>
      </Row>
      <Row
        style={{ margin: "20px" }}
        type="flex"
        justify="space-between"
        align="bottom"
      >
        <Button onClick={() => saveMockTemplate(mock, template)} type="primary">
          保存
        </Button>
        <a
          href="http://mockjs.com/examples.html"
          rel="noreferrer noopener"
          target="_blank"
        >
          MockJS文档 >>>{" "}
        </a>
      </Row>
      <Row>
        <Col
          span={11}
          style={{ border: "1px solid #dcdcdc", padding: 10, height: HIGHT }}
        >
          <CodeMirror
            key="0"
            value={template}
            onChange={setTemplate}
            options={{
              lineNumbers: true,
              mode: { name: "javascript", json: true }
            }}
          />
        </Col>
        <Col span={2} style={{ height: HIGHT }}>
          <Row
            align="middle"
            justify="center"
            style={{ height: HIGHT }}
            type="flex"
          >
            <Button
              onClick={() => {
                setTemplate(`${template} `);
              }}
            >
              Run
            </Button>
          </Row>
        </Col>
        <Col
          span={11}
          style={{ border: "1px solid #dcdcdc", padding: 10, minHeight: HIGHT }}
        >
          <pre>
            <code
              className="JavaScript"
              dangerouslySetInnerHTML={{
                __html: tempObj
              }}
            ></code>
          </pre>
        </Col>
      </Row>
    </div>
  );
}
// eslint-disable-next-line react/display-name
export default outerProps => {
  const { params } = outerProps.match;
  const { mockId } = params;

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query MockDetailQuery($mockId: MockId!) {
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
      `}
      variables={{
        mockId
      }}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return <MockDetail {...props} />;
      }}
    />
  );
};
