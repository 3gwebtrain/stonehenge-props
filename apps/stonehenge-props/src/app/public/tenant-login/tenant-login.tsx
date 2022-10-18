import styles from './tenant-login.module.scss';

/* eslint-disable-next-line */
export interface TenantLoginProps {}

export function TenantLogin(props: TenantLoginProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TenantLogin!</h1>
    </div>
  );
}

export default TenantLogin;
