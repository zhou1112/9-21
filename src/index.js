import React from 'react';
import {render} from 'react-dom';

import Routers from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'highlight.js/styles/arduino-light.css';

import './Main.css'

render(<Routers />,document.getElementById('root'));
