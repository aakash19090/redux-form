import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store'
import Myform from './Form'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App(props) {

    // console.log(props);
    return (
        <Provider store={store}>
            <Myform/>
        </Provider>
    );
}

export default App;