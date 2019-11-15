import React, { useState } from "react";

import { Modal, Form, Input } from "antd";

//mutations
import AddProjectMutation from "/src/mutations/AddProjectMutation";

function AddProject(props) {
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
      AddProjectMutation.commit({
        viewerID,
        input: {
          name: values.name,
          pathKey: values.pathKey
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
          <Form.Item label="pathKey">
            {getFieldDecorator("pathKey", {
              rules: [{ required: true, message: "pathKey不能为空" }]
            })(<Input placeholder="输入pathKey" />)}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Form.create({ name: "add_project_modal" })(AddProject);
