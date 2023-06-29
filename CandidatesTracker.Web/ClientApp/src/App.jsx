import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { StatusCountContextComponent } from './StatusCountContext';
import Layout from './Layout';
import Home from './Home';
import AddCandidate from './AddCandidate';
import Pending from './Pending';
import Confirmed from './Confirmed';
import Refused from './Refused';
import ViewDetails from './ViewDetails';




const App = () => {


    return (
        <StatusCountContextComponent>
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
    </StatusCountContextComponent>


    )
}

export default App;