import axios from 'axios';
import { FC, useEffect } from 'react';
import { environment } from '../../../../../environments/environment';

const HomeAdmin: FC = () => {
  const getAdminData = async () => {
    try {
      const response = await axios.post(
        environment.BASE_URL + '/user/get-admin-info-by-id',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  useEffect(() => {
    getAdminData();
  });
  return <div>home</div>;
};

export default HomeAdmin;
