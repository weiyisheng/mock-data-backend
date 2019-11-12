import React from "react";

import { Link } from "react-router-dom";

export default deleteFunc => [
  {
    title: "名称",
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
    key: "path",
    render: (text, record) => {
      return `${record.product.path}${record.path}`;
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
