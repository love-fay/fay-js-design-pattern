/**
 * Create by fay on 2018-11-02 16:43
 */
import React from 'react';
import Polymorphic from './polymorphic';
import Demo from '../../demo';

class App extends React.Component{

    demo1 = `
\`\`\`js
import React,{useState} from 'react';
import Button from '@fay-react/material/button';

export default () => {

    const [sound, setSound] = useState('waiting for animal sound');

    const duck = {
      makeSound: function () {
          setSound('Ga Ga Ga...');
      }
    };

    const chicken = {
        makeSound: function () {
            setSound('Ge Ge Ge...');
        }
    };

    const animalSound = {
        makeSound: function(animal){
            if(animal && typeof animal.makeSound === 'function')
            animal.makeSound();
        }
    };

    return (
        <div style={{margin: '20px'}}>
            <Button onClick={() => animalSound.makeSound(duck)}>Duck Sound</Button>
            <Button onClick={() => animalSound.makeSound(chicken)}>Chicken Sound</Button>
            <div>
                {sound}
            </div>
        </div>
    )
}
\`\`\`
`;

    demos = [
        {
            component: <Polymorphic/>,
            code: this.demo1
        }
    ];

    render(){
        return (
            <Demo demos={this.demos}/>
        )
    }
}

export default App;