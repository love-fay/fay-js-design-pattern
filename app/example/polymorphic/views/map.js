/**
 * Create by fay on 2019-07-12 09:56
 */
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