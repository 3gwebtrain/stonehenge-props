import styles from './form-login.module.scss';

/* eslint-disable-next-line */
export interface FormLoginProps {}

export function FormLogin(props: FormLoginProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FormLogin!</h1>
    </div>
  );
}

export default FormLogin;
