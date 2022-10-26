import { AddLandLoard } from '@stonehenge/forms';
import { landLordProps } from '@stonehenge/prop-types';
import { Button, Card, Col, Row, Tabs } from 'antd';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../../../storeApp/appStore';
import { addLandLord, inviteLandLord, listLandLords } from '../../storePrivate';

const HomeAdmin: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { landLords } = useSelector((state: AppState) => state.adminUserSlice);
  const registerSubmit = (values: landLordProps) => {
    dispatch(addLandLord(values));
  };

  useEffect(() => {
    if (!landLords) {
      dispatch(listLandLords());
    }
  }, []);

  const items = [
    { label: 'Add Landlord', key: 'item-1', children: <AddLandLoard regSubmit={registerSubmit} /> }, // remember to pass the key prop
    { label: 'Add Builder', key: 'item-2', children: 'Content 2' },
  ];

  const sendInviteToLandLord = (loard: landLordProps) => {
    dispatch(inviteLandLord(loard));
  };

  return (
    <Row justify="space-between">
      <Col lg={8}>
        {landLords?.length &&
          landLords.map((loard) => {
            return (
              <div className="mt-5">
                <Card title={loard.name} bordered={true}>
                  <p>
                    <a href="#">{loard.email}</a>
                  </p>
                  <div>
                    <p>{loard.address.doorNo}</p>
                    <p>{loard.address.street}</p>
                    <Button onClick={() => sendInviteToLandLord(loard)}>Send invite</Button>
                  </div>
                </Card>
              </div>
            );
          })}
      </Col>
      <Col lg={8}>
        <Tabs items={items}>
          <Tabs.TabPane tab="Tab 1" key="item-1"></Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="item-2">
            Content xx
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default HomeAdmin;
