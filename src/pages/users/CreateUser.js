import React from "react";
import { Button, Form, Input, InputNumber, Modal, Space, message } from "antd";
import { users } from "../../constants/users";
import "./styles/createUser.scss";
import { layout, validateMessages } from "../../constants/formSettings";

const CreateUser = ({ isModalOpen, setIsModalOpen, setUsersList }) => {
  const [form] = Form.useForm();
  const onCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const onFinish = (values) => {
    values.phone = "+90 " + values.phone;
    users.push(values);
    setUsersList([...users]);
    form.resetFields();
    message.success({
      type: "success",
      content: "Kullanıcı başarıyla eklendi",
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        onCancel={onCancel}
        title="Kullanıcı Ekleme"
        open={isModalOpen}
        footer={null}
      >
        <Form
          {...layout}
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          className="modalFormStyle "
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["name"]}
            label="Ad"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["surname"]}
            label="Soyad"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["email"]}
            label="E-Posta"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["phone"]}
            label="Telefon"
            rules={[
              {
                pattern: new RegExp(
                  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
                ),
                message: "Geçerli bir telefon giriniz..",
                required: true,
              },
            ]}
          >
            <Space.Compact>
              <Input disabled className="phoneCode" defaultValue="+90" />
              <Input className="phoneInput" />
            </Space.Compact>
          </Form.Item>

          <Form.Item
            name={["age"]}
            label="Yaş"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name={["adress"]} label="Adres">
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 18,
            }}
          >
            <Button type="primary" htmlType="submit">
              Kaydet
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default CreateUser;
