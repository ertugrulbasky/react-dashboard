import React, { useEffect } from "react";
import { Button, Form, Input, Image } from "antd";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import './styles/login.scss'

const Login = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("islogin");

  const onFinish = () => {
    localStorage.setItem("isLogin", true);
    navigate("/dashboard");
  };
  useEffect(() => {
    if (localStorage.getItem("isLogin")) {
      navigate("/dashboard");
    }
  }, [isLogin]);
  return (
    <Form
      className="formStyle"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item name="logo">
        <Image
          preview={false}
          className="logo"
          width={300}
          src={logo}
        />
      </Form.Item>

      <Form.Item
        label="Kullanıcı Adı"
        name="username"
        rules={[
          {
            required: true,
            message: "Lütfen kullanıcı adınızı giriniz..",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Parola"
        name="password"
        rules={[
          {
            required: true,
            message: "Lütfen parolanızı giriniz..",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Giriş Yap
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
