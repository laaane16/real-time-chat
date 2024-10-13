import { Button, Form, Input, Layout, Card } from "antd";
import {  useState } from "react";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { selectStatus } from "../redux/slices/auth/selectors";
import { Status } from "../@types/types";
import { useInput } from "../hooks/useInput";

const Login = () => {
  const { login } = useAppDispatch();
  const status = useSelector(selectStatus);

  const [name, changeName] = useInput('')
  const [password, changePassword] = useInput('')
  console.log(name)

  const onFinish = () => {
    login([name, password]);
  };

  const onFinishFailed = () => {
    console.log("error");
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card>
        {status === Status.ERROR && (
          <p style={{ color: "red", textAlign: "center" }}>
            Некорректный логин или пароль
          </p>
        )}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Необходимо ввести имя пользователя",
              },
            ]}
          >
            <Input
              value={name}
              onChange={changeName}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Необходимо ввести пароль",
              },
            ]}
          >
            <Input.Password
              value={password}
              onChange={changePassword}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={status === Status.LOADING}
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};

export default Login;
