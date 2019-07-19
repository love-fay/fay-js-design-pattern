/**
 * Create by fay on 2019-07-12 09:56
 */
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
            <Button onClick={() => animalSound.makeSound(duck)} raised>Duck Sound</Button>
            <Button onClick={() => animalSound.makeSound(chicken)} raised style={{marginLeft: '20px'}}>Chicken Sound</Button>
            <hr/>
            <div>
                {sound}
            </div>
        </div>
    )
}