import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Params, useParams } from 'react-router-dom';
import { environment } from '../../../environments/environment';
import styles from './user-login.module.scss';

export function UserLogin() {
  const param = useParams();

  const getUserEmail = async (param: Params<string>) => {
    console.log('param', param);
    try {
      const response = (await axios.post<string>(environment.BASE_URL + '/landloard/activate', param)) as AxiosResponse;
      if (response.data.success) {
        toast.error(response.data.message);
        return response.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      throw new Error(error as string);
    }
  };

  useEffect(() => {
    console.log('param', param);
    getUserEmail(param).then((data) => console.log('token data', data));
  });

  return (
    <div className={styles['container']}>
      <h1>Welcome to UserLogin!</h1>
    </div>
  );
}

export default UserLogin;
