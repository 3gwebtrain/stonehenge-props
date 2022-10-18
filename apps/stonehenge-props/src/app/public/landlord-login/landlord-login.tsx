import styles from './landlord-login.module.scss';

/* eslint-disable-next-line */
export interface LandlordLoginProps {}

export function LandlordLogin(props: LandlordLoginProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LandlordLogin!</h1>
    </div>
  );
}

export default LandlordLogin;
