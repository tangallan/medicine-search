import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import MedicineShops from '../../containers/MedicineShops/MedicineShops';
import Home from '../../containers/Home/Home';
import Medicines from '../../containers/Medicines/Medicines';
import Bloodbank from '../../containers/Bloodbanks/Bloodbank';

const SiteRoutes = [
    {
        path: 'home',
        breadcrumbName: 'Home',
        component: Home
    },
    {
        path: 'medicines',
        breadcrumbName: 'Medicines',
        component: Medicines
    },
    {
        path: 'medicine-shops',
        breadcrumbName: 'Medicine Shops',
        component: MedicineShops
    },
    {
        path: 'bloodbanks',
        breadcrumbName: 'Blood Banks',
        component: Bloodbank
    }
];

const HeaderMenu = props => {
    const [selectedRouteKey, setSelectedRouteKey] = useState('0');

    useEffect(() => {
        const r = SiteRoutes.findIndex(r => {
            return props.location.pathname.indexOf('/' + r.path) > -1;
        });

        if (r > -1) {
            setSelectedRouteKey(r + '');
        } else {
            setSelectedRouteKey('0');
        }
    });

    const onClickMenu = e => {
        const r = SiteRoutes[e.key];
        props.history.push('/' + r.path);
    };

    return (
        <Menu
            theme='dark'
            mode='horizontal'
            selectedKeys={[selectedRouteKey]}
            style={{ lineHeight: '64px' }}
            onClick={onClickMenu}
        >
            {SiteRoutes.map((m, index) => (
                <Menu.Item key={index.toString()}>
                    {m.breadcrumbName}
                </Menu.Item>
            ))}
        </Menu>
    );
};

export { HeaderMenu, SiteRoutes };
