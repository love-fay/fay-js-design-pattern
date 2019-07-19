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
            toggleTypes: [
                'code', 'code'
            ],
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
        console.log(this.props.code);
        return (
            <div>
                <div style={{width: '500px'}}>
                    <Card content={this.props.content} iconButtons={this.iconButtons} drawer={{open: this.state.drawerOpen, content: this.props.code}}/>
                </div>
                <br/>
            </div>
        )
    }
}

export default Demo;