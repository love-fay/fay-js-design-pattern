/**
 * Create by fay on 2018-11-02 16:43
 */
import React from 'react';
import Animal from './animal';
import Demo from '../../demo';
import {protoExtendsAnimal_github} from '../../../github';
import '../style/index.scss';

class App extends React.Component{

    demo1 = `
\`\`\`js
import React,{useState} from 'react';
import Button from '@fay-react/material/button';

class Animal {
    constructor(name) {
        this.name = name;
    }

    getName = function () {
        return this.name;
    }
}

class Dog extends Animal{
    constructor(name) {
        super(name);
    }

    speak = function () {
        return 'wang wang wang';
    }
}

export default () => {
    const [action, setAction] = useState('waiting for your action.');

    const handleAction = () => {
        const dog = new Dog('9527');
        setAction(dog.getName() + ' says '+ dog.speak());
    };

    return (
        <div style={{margin: '20px'}}>
            <Button onClick={handleAction} raised>Dog Action</Button>
            <hr/>
            <div>
                {action}
            </div>
        </div>
    )
}
\`\`\`
`;

    demos = [
        {
            component: <Animal/>,
            code: this.demo1,
            path: protoExtendsAnimal_github,
            style: {width: 400},
            className: 'fay-jdp-prototype-extends-animal'
        },
    ];

    render(){
        return (
            <Demo demos={this.demos}/>
        )
    }
}

export default App;