import React from "react";

import { Link } from "react-router-dom";

export default deleteFunc => [
  {
    title: "项目",
    dataIndex: "name",
    key: "name",
    // eslint-disable-next-line react/display-name
    render: (text, record) => (
      <Link to={`/product/detail/${record.id}`}>{text}</Link>
    )
  },
  {
    title: "路径",
    dataIndex: "path",
    key: "path"
  },
  {
    title: "mock数量",
    dataIndex: "mocks",
    key: "mocks",
    // eslint-disable-next-line react/display-name
    render: (text, record) => (
      <span>{record.mocks ? record.mocks.count : 0}</span>
    )
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
