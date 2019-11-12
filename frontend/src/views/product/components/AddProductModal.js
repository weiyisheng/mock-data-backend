import React, { useState } from "react";

import { Modal, Form, Input } from "antd";

//mutations
import AddProductMutation from "/src/mutations/AddProductMutation";

function AddProduct(props) {
  //props
  const { visible, close, form, viewerID } = props;
  const { getFieldDecorator, validateFields, resetFields } = form;

  //state
  const [loading, setLoading] = useState(false);

  function handleOk() {
    validateFields((err, values) => {
      if (err) {
        return;
      }
      setLoading(true);
      AddProductMutation.commit({
        viewerID,
        input: {
          name: values.name,
          path: values.path
        },
        onCompleted() {
          setLoading(false);
          resetFields();
          close();
        }
      });
    });
  }

  return (
    <div>
      <Modal
        title="添加项目"
        visible={visible}
        onOk={handleOk}
        confirmLoading={loading}
        onCancel={close}
      >
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
          <Form.Item label="项目名称">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "项目名不能为空" }]
            })(<Input placeholder="输入项目名称" />)}
          </Form.Item>
          <Form.Item label="项目路径">
            {getFieldDecorator("path", {
              rules: [{ required: true, message: "项目路径不能为空" }]
            })(<Input placeholder="输入项目路径" />)}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Form.create({ name: "add_product_modal" })(AddProduct);
