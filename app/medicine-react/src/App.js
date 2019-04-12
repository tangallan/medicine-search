import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import { Layout } from 'antd';

import { HeaderMenu, SiteRoutes } from './components/HeaderMenu/HeaderMenu';



const { Header, Content, Footer } = Layout;
class App extends Component {
    render() {
        let routes = (
            <Switch>
                {SiteRoutes.map(m => {
                    return (
                        <Route
                            name={m.path}
                            breadcrumbName={m.breadcrumbName}
                            key={m}
                            path={`/${m.path}`}
                            component={m.component}
                        />
                    );
                })}
                <Redirect to='/home' />
            </Switch>
        );

        return (
            <Layout className='layout'>
                <Header>
                    <div className='logo' />
                    <Route path='/' component={HeaderMenu} />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div
                        style={{
                            background: '#fff',
                            padding: 24,
                            minHeight: 1000
                        }}
                    >
                        {routes}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Google A Medicine :)
                </Footer>
            </Layout>
        );
    }
} // end of Component

export default withRouter(App);
