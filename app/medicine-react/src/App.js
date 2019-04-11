import React, { Component, Switch } from 'react';
import { Route, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import Home from './containers/Home/Home';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class App extends Component {
    render() {
        let routes = (
            <Switch>
                {/* <Route path="/medicines" /> */}
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        );

        return (
            <Layout className='layout'>
                <Header>
                    <div className='logo' />
                    <Menu
                        theme='dark'
                        mode='horizontal'
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key='1'>nav 1</Menu.Item>
                        <Menu.Item key='2'>nav 2</Menu.Item>
                        <Menu.Item key='3'>nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div
                        style={{
                            background: '#fff',
                            padding: 24,
                            minHeight: 1000
                        }}
                    >
                        <Home />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Google A Medicine :)
                </Footer>
            </Layout>
        );
    }
} // end of Component

export default App;
