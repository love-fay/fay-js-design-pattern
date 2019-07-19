/**
 * Create by fay on 2018-11-11 22:47
 */
import React from 'react';
import LayoutGrid from '@fay-react/material/layout-grid';
import Markdown from '@fay-react/material/markdown';
import Card from './card';

class Demo extends React.Component{

    content = (component) => {
        return (
            <div style={{width: '100%', height: '100%', overflow: 'auto'}}>
                {component}
            </div>
        )
    };

    loopDemos = () => {
        const {demos} = this.props;
        return demos.map((item, i) => {
            const {component, code, path} = item;
            const codeMd = `
                \`\`\`js
                ${code}
                \`\`\`
            `;
            return {
                cell: <Card content={this.content(component)} code={<div style={{width: '100%', height: '100%', overflow: 'auto'}}><Markdown md={code}/></div>} path={path}/>
            }
        })
    };

    render(){
        return (
            <LayoutGrid cells={this.loopDemos()}/>
        )
    }
}

export default Demo;