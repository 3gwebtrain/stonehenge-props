import { Button } from 'antd';
import styles from './form-register.module.scss';

/* eslint-disable-next-line */
export interface FormRegisterProps {}

export function FormRegister({ onSubmit }: { onSubmit: () => void }) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormRegister!</h1>
      <Button type="primary" onClick={onSubmit}>
        Open Modal
      </Button>
      &nbsp;
      <Button type="primary">Cancel Modal</Button>
    </div>
  );
}

export default FormRegister;
