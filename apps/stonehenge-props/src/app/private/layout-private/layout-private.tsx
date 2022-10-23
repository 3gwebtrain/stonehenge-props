import axios from 'axios';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { hideAlert, showAlert } from '../../public/storePublic';
import { AppDispatch, AppState } from '../../storeApp/appStore';
import { setUser } from '../storePrivate';
import { environment } from './../../../environments/environment';
import layoutStyle from './layout-private.module.scss';

const LayoutPrivate: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { adminUser } = useSelector((state: AppState) => state.adminUserSlice);
  const getAdminUser = async () => {
    try {
      dispatch(showAlert());
      const response = await axios.post(
        environment.BASE_URL + '/user/get-admin-info-by-id',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );
      dispatch(hideAlert());
      if (response.data.success) {
        console.log('response', response);
        dispatch(setUser(response.data.data));
      } else {
        localStorage.clear();
        navigate('/admin');
      }
    } catch (error) {
      dispatch(hideAlert());
      localStorage.clear();
      navigate('/admin');
    }
  };

  useEffect(() => {
    if (!adminUser) {
      console.log('admin user', adminUser);
      getAdminUser();
    }
    return;
  }, []);
  const logOut = () => {
    dispatch(setUser(null));
    localStorage.clear();
    navigate('/');
  };

  return (
    <section className={layoutStyle['app-wrapper']}>
      <header className="app-header">
        <nav>
          <h1>
            Private Header welcomes you! <Link to="profie">{adminUser?.name}</Link>
          </h1>
          <button onClick={() => logOut()}>Logout</button>
        </nav>
      </header>
      <main className="app-main">
        <h1>Hi </h1>
        <Outlet />
      </main>
      <footer className="app-footer"></footer>
    </section>
  );
};

export default LayoutPrivate;
