import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Menu, Button, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PictureOutlined,
  HomeOutlined,
  BookOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { Bio } from './components/Bio';
import { Pictures } from './components/Pictures';
import { Gallery } from './components/Gallery';
import Login from './components/Login';
import Clock from './components/Clock'; 

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <Link to="/">{React.createElement(HomeOutlined)}</Link>,
              label: 'Home',
            },
            {
              key: '2',
              icon: <Link to="/gallery">{React.createElement(PictureOutlined)}</Link>,
              label: 'Gallery',
            },
            {
              key: '3',
              icon: <Link to="/pictures">{React.createElement(BookOutlined)}</Link>,
              label: 'Pictures',
            },
            {
              key: '4',
              icon: <Link to="/login">{React.createElement(BookOutlined)}</Link>,
              label: 'Login',
            },
            {
              key: '5',
              icon: <Link to="/clock">{React.createElement(ClockCircleOutlined)}</Link>,
              label: 'Clock', 
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/pictures" element={<Pictures />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/clock" element={<Clock />} /> 
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
