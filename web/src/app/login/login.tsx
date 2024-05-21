'use client'

import React, { useState } from 'react';
import POST from '../router/login';
import { Alert } from 'antd';

import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/navigation'

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null); // 用于存储错误信息的状态
    const onFinish = async (values: FieldType) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    try {
      const response = await POST({
        url: "http://localhost:8080/v1/iam/login",
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ username: values.username, password: values.password }),
      });
      console.log("resp:", response.status);

      if(response.status === 200){
        document.cookie = 'logined:true';
        router.push('/dashboard');
      }else{
        const data = await response.json();
        setError(data.message || '登录失败');
      }

    } catch (error) {
      // 如果发生错误，将错误信息存储到状态中，以便渲染到页面上
      setError(error.message);
    }
  };

  return (
    <div>
      {/* 如果存在错误信息，则显示 Alert 组件 */}
      {error && (
        <Alert
          message="登录失败"
          description={error}
          type="error"
          closable
          onClose={() => setError(null)} // 关闭时清除错误状态
        />
      )}

      {/* 登录表单 */}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>记住账号</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
