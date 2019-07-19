import React from 'react';
import {render} from 'react-dom';
import Root from './root';
import Provider from '@fay-react/lib/provider';

document.title = 'Design Pattern    ';

render(<Provider root={Root}/>, document.getElementById('app'));