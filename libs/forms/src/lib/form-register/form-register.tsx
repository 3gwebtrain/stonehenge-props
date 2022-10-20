import { RegisterFormFuncProps } from '@stonehenge/prop-types';
import { Button, Form, Input } from 'antd';
import { ReactElement } from 'react';
import styles from './form-register.module.scss';

export function FormRegister({ closePop, registerSubmit }: RegisterFormFuncProps): ReactElement {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormRegister! </h1>
      <Form layout="vertical" onFinish={registerSubmit} autoComplete="off">
        <Form.Item label="Name" name="name">
          <Input placeholder="name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password placeholder="password" />
        </Form.Item>
        <Form.Item className={styles['register-footer']}>
          <Button type="primary" htmlType="submit">
            Form Regiter
          </Button>
          <Button type="primary" onClick={() => closePop()}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
      &nbsp;
    </div>
  );
}
