import React from "react";

import { Link } from "react-router-dom";

export default deleteFunc => [
  {
    title: "接口名称",
    dataIndex: "name",
    key: "name",
    // eslint-disable-next-line react/display-name
    render: (text, record) => (
      <Link to={`/mock/detail/${record.id}`}>{text}</Link>
    )
  },
  {
    title: "pathKey",
    dataIndex: "pathKey",
    key: "pathKey"
  },
  {
    title: "访问路径",
    dataIndex: "pathKey",
    key: "apiPath",
    render(text, record) {
      return `/v1/${record.project.pathKey}/${record.pathKey}`;
    }
  },
  {
    title: "操作",
    key: "action",
    // eslint-disable-next-line react/display-name
    render: (text, record) => (
      <span>
        {/* <a onClick={() => edit(record)}>Edit</a>
        <Divider type="vertical" /> */}
        <a onClick={() => deleteFunc(record)}>Delete</a>
      </span>
    )
  }
];
