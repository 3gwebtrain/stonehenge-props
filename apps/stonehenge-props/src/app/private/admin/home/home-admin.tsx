import { AddLandLoard } from '@stonehenge/forms';
import { LandLordRegisterProps } from '@stonehenge/prop-types';
import { Tabs } from 'antd';
import { FC } from 'react';

const HomeAdmin: FC = () => {
  const registerSubmit = (values: LandLordRegisterProps) => {
    console.log(values);
  };

  const items = [
    { label: 'Add Landlord', key: 'item-1', children: <AddLandLoard /> }, // remember to pass the key prop
    { label: 'Add Builder', key: 'item-2', children: 'Content 2' },
  ];
  return (
    <Tabs items={items}>
      <Tabs.TabPane tab="Tab 1" key="item-1"></Tabs.TabPane>
      <Tabs.TabPane tab="Tab 2" key="item-2">
        Content xx
      </Tabs.TabPane>
    </Tabs>
  );
};

export default HomeAdmin;
