/**
 * Create by fay on 2018-11-02 16:43
 */
import React from 'react';
import AnimalSound from './animal-sound';
import Map from './map';
import Demo from '../../demo';
import {polymorphicAnimalSound_github, polymorphicMap_github} from '../../../github';
import '../style/index.scss';

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
            <Button onClick={() => animalSound.makeSound(duck)} raised>Duck Sound</Button>
            <Button onClick={() => animalSound.makeSound(chicken)} raised style={{marginLeft: '20px'}}>Chicken Sound</Button>
            <hr/>
            <div>
                {sound}
            </div>
        </div>
    )
}
\`\`\`
`;

    demo2 = `
\`\`\`js
import React,{useState} from 'react';
import Button from '@fay-react/material/button';

export default () => {

    const [map, setMap] = useState('waiting for map render');

    const googleMap = {
        show: function () {
            setMap('开始渲染谷歌地图');
        }
    };

    const baiduMap = {
        show: function () {
            setMap('开始渲染百度地图');
        }
    };

    const gdMap = {
        show: function () {
            setMap('开始渲染高德地图');
        }
    };

    const renderMap = function(map){
        if(map && typeof map.show === 'function')
            map.show();
    };

    return (
        <div style={{margin: '20px'}}>
            <Button onClick={() => renderMap(googleMap)} raised>谷歌地图</Button>
            <Button onClick={() => renderMap(baiduMap)} raised style={{marginLeft: '20px'}}>百度地图</Button>
            <Button onClick={() => renderMap(gdMap)} raised style={{marginLeft: '20px'}}>高德地图</Button>
            <hr/>
            <div>
                {map}
            </div>
        </div>
    )
}
\`\`\`
`;

    demos = [
        {
            component: <AnimalSound/>,
            code: this.demo1,
            path: polymorphicAnimalSound_github,
            style: {width: 400},
            className: 'fay-jdp-polymorphic-as'
        },
        {
            component: <Map/>,
            code: this.demo2,
            path: polymorphicMap_github,
            style: {width: 400},
            className: 'fay-jdp-polymorphic-map'
        }
    ];

    render(){
        return (
            <Demo demos={this.demos}/>
        )
    }
}

export default App;