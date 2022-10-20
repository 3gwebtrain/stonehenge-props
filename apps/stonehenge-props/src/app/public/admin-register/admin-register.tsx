import { Button } from 'antd';
import { useOutletContext } from 'react-router-dom';
import styles from './admin-register.module.scss';
export function AdminRegister() {
  const openPop = useOutletContext<() => void>();
  return (
    <div className={styles['container']}>
      <h1>Welcome to Admin Register!</h1>
      <Button onClick={() => openPop()}>Register</Button>
    </div>
  );
}

export default AdminRegister;
