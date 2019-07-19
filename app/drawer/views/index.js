import React from 'react';
import TopBar from '@fay-react/material/drawer/top-bar';
import Button from '@fay-react/material/button';

class Drawer extends React.Component{

    list = [
        {
            subheader: 'components',
            sublist: [
                {graphic: 'polymorphic', text: 'Polymorphic 多态', href: '/polymorphic'},
                {graphic: 'encapsulation', text: 'Encapsulation 封装', href: '/encapsulation'},
                {graphic: 'prototype-extends', text: 'proto_extends 原型继承', href: '/prototype-extends'},
            ],
        }

    ];

    toGithub = () => {
        window.location.href = 'https://github.com/love-fay/fay-js-design-pattern';
    };

    render(){
        const {children} = this.props;
        return (
            <TopBar list={this.list} topBarTitle='Fay Js Design Pattern - JS设计模式' topBarRight={<Button onClick={this.toGithub} iconType='github' style={{color: '#FFFFFF'}}>GitHub</Button>} open header={{title: 'Fay', subtitle:'869770665@qq.com'}}>
                {children}
            </TopBar>
        )
    }
}

export default Drawer;