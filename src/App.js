import React, { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

const App = () => {
    useEffect(() => {
        M.AutoInit(); // Init Materialize JS
    });

    return (
        <Provider store={store}>
            <>
                <SearchBar />
                <div className='container'>
                    <AddBtn />
                    <AddLogModal />
                    <AddTechModal />
                    <EditLogModal />
                    <TechListModal />
                    <Logs />
                </div>
            </>
        </Provider>
    );
};

export default App;
