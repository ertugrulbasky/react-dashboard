import React from "react";
import { Button, Form, Input, InputNumber, Modal, Space } from "antd";
import { users } from "../../constants/users";
import './styles/createUser.scss'

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "Geçerli bir mail adresi giriniz..",
    number: "Geçerli bir sayı giriniz..",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const CreateUser = ({ isModalOpen, setIsModalOpen, setUsersList }) => {
  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    users.push(values);
    setUsersList([...users]);
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
