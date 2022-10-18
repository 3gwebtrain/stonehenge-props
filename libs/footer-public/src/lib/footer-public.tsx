import styles from './footer-public.module.scss';

/* eslint-disable-next-line */
export interface FooterPublicProps {}

export function FooterPublic(props: FooterPublicProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FooterPublic!</h1>
    </div>
  );
}

export default FooterPublic;
