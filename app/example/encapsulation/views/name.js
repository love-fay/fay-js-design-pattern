/**
 * Create by fay on 2019-07-12 09:56
 */
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