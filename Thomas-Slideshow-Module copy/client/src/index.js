import React from 'react';
import ReactDOM from 'react-dom';
import SearchModule from './components/SearchModule.jsx';
import PhotoModule from './components/PhotoModule.jsx';
import './styles/style.scss';

ReactDOM.render(<SearchModule/>, document.querySelector('#search-module'));
ReactDOM.render(<PhotoModule/>, document.querySelector('#photo-module'));