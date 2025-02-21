import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, OpenAIOutlined, SlidersOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './index.css'
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Agent Test',
    key: 'agentTest',
    icon: <OpenAIOutlined />,
  },
  {
    label: 'Agent Config',
    key: 'config',
    icon: <SlidersOutlined />,
  },
  // {
  //   label: 'Navigation Three - Submenu',
  //   key: 'SubMenu',
  //   icon: <SettingOutlined />,
  //   children: [
  //     {
  //       type: 'group',
  //       label: 'Item 1',
  //       children: [
  //         { label: 'Option 1', key: 'setting:1' },
  //         { label: 'Option 2', key: 'setting:2' },
  //       ],
  //     },
  //     {
  //       type: 'group',
  //       label: 'Item 2',
  //       children: [
  //         { label: 'Option 3', key: 'setting:3' },
  //         { label: 'Option 4', key: 'setting:4' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   key: 'alipay',
  //   label: (
  //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //       Navigation Four - Link
  //     </a>
  //   ),
  // },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('agentTest');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className='header-menu'>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </div>
  );
};

export default App;