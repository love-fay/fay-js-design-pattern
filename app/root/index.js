import React from 'react';
import {withRouter} from 'react-router-dom';
import Common from './common';
import Home from '../home';
import Polymorphic from '../example/polymorphic';
import Encapsulation from '../example/encapsulation';
import PrototypeExtends from '../example/prototype-extends';
import Drawer from '../drawer';
import './style/index.scss';

class Root extends React.Component{

    render(){
        const {location} = this.props;
        const {pathname} = location;
        const pathPrefix = pathname.split('/')[1];
        const router = {
            'polymorphic': <Drawer><Polymorphic/></Drawer>,
            'encapsulation': <Drawer><Encapsulation/></Drawer>,
            'prototype-extends': <Drawer><PrototypeExtends/></Drawer>,
            'comingSoon': <Drawer>敬请期待</Drawer>,
            '': <Drawer><Home/></Drawer>,
        };
        return (
            <div style={{height: '100%'}}>
                {router[pathPrefix] || router['comingSoon']}
                <Common/>
            </div>
        )
    }
}


export default withRouter(Root);