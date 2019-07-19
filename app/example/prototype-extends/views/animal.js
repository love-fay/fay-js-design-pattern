/**
 * Create by fay on 2019-07-12 09:56
 */
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