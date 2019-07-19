/**
 * Create by fay on 2018-11-02 16:43
 */
import React from 'react';
import Name from './name';
import Demo from '../../demo';
import {encapsulationName_github} from '../../../github';
import '../style/index.scss';

class App extends React.Component{

    demo1 = `
\`\`\`js
import React,{useState} from 'react';
import Button from '@fay-react/material/button';

const myObject = (function () {
    let name = 'fay';
    return {
        getName: function () {
            return name;
        }
    }
})();

export default () => {

    const [callRes, setCallRes] = useState('waiting for call encapsulation function');

    return (
        <div style={{margin: '20px'}}>
            <Button onClick={() => setCallRes(myObject.name)} raised>Call Name</Button>
            <Button onClick={() => setCallRes(myObject.getName())} raised style={{marginLeft: '20px'}}>Call getName</Button>
            <hr/>
            <div>
                {callRes}
            </div>
        </div>
    )
}
\`\`\`
`;

    demos = [
        {
            component: <Name/>,
            code: this.demo1,
            path: encapsulationName_github,
            style: {width: 400},
            className: 'fay-jdp-encapsulation-name'
        },
    ];

    render(){
        return (
            <Demo demos={this.demos}/>
        )
    }
}

export default App;