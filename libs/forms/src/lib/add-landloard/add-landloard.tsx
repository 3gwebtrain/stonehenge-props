import { Button, Form, FormInstance, Input } from 'antd';
import { createRef, ReactElement } from 'react';
import styles from './add-landloard.module.scss';

export function AddLandLoard(): ReactElement {
  const formRef = createRef<FormInstance>();
  const addLandLord = (values: any) => {
    console.log(values);
  };
  const restForm = () => {
    formRef.current?.resetFields();
  };
  return (
    <div className={styles['container']}>
      <h1>Welcome to AddLandLoard! </h1>
      <Form layout="vertical" ref={formRef} onFinish={addLandLord} autoComplete="off">
        <Form.Item label="Name" name="name">
          <Input placeholder="name" required />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="email" required />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input placeholder="phone" required />
        </Form.Item>
        <Form.Item label="Address">
          <Input.Group compact>
            <Form.Item name={['address', 'street']} noStyle rules={[{ required: true, message: 'Street is required' }]}>
              <Input placeholder="Input street" />
            </Form.Item>
            <Form.Item name={['address', 'door']} noStyle rules={[{ required: true, message: 'Door number is required' }]}>
              <Input placeholder="Door number" />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item className={styles['register-footer']}>
          <Button type="primary" htmlType="submit">
            Form Regiter
          </Button>
          &nbsp;
          <Button type="primary" onClick={() => restForm()}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
