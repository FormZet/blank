import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'jquery';
import 'popper.js'
import App from './App';
import MetisMenu from 'react-metismenu';
import './assets/styles/main.scss';
require ('bootstrap');





const content=[
    {
        icon: 'icon-class-name',
        label: 'Label of Item',
        to: '#a-link',
    },
    {
        icon: 'icon-class-name',
        label: 'Second Item',
        content: [
            {
                icon: 'icon-class-name',
                label: 'Sub Menu of Second Item',
                to: '#another-link',
            },
        ],
    },
];

ReactDOM.render(
    <>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);


