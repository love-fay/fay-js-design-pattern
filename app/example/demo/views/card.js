/**
 * Create by fay on 2018-11-11 22:51
 */
import React from 'react';
import Card from '@fay-react/material/card';

class Demo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        }
    }

    iconButtons = [
        {
            type: 'code',
            onClick: () => {
                this.changeDrawerOpen();
            }
        },
        {
            type: 'github',
            onClick: () => {
                this.props.path && window.open(this.props.path);
            }
        }
    ];


    changeDrawerOpen = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    };

    render(){
        return (
            <div style={{width: '500px', ...this.props.style}} className={this.props.className}>
                <Card style={{height: '300'}} content={this.props.content} iconButtons={this.iconButtons} drawer={{open: this.state.drawerOpen, content: this.props.code}}/>
            </div>
        )
    }
}

export default Demo;