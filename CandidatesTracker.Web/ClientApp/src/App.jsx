import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import AddCandidate from './AddCandidate';
import Pending from './Pending';
import ViewDetails from './ViewDetails';
import Confirmed from './Confirmed';
import Refused from './Refused';
import { createContext } from 'react';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';


const Context = createContext();

const App = () => {


    return (
        <Context>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/addcandidate' element={<AddCandidate />} />
                <Route exact path='/pending' element={<Pending />} />
                <Route exact path='/confirmed' element={<Confirmed />} />
                <Route exact path='/refused' element={<Refused />} />
                <Route exact path='/viewDetails/:id' element={<ViewDetails />} />

            </Routes>
        </Layout>
    </Context>


    )
}

export default App;