import React from 'react';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import CreateTruck from './Components/CreateTruck';
import CreateDriver from './Components/CreateDriver'
import ListTruck from './Components/ListTruck';
import EditTruck from './Components/EditTruck';
import ListClients from './Components/ListClients';
import ListDriver from './Components/ListDriver';
import EditDriver from './Components/EditDriver'
import EditClients from './Components/EditClients'
import CreateClient from './Components/CreateClient';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  
  return (
    <div>
  
     
      <Router>
      <Header/>
      <Navigation/>
      <Routes>

        <Route path="/CreateTruck" element={<CreateTruck />} />
        <Route path="/CreateDriver" element={<CreateDriver />} />
        <Route path="/CreateClient" element={<CreateClient />} />
        <Route path="/ListTruck" element={<ListTruck />} />
        <Route path="/ListClients" element={<ListClients />} />
        <Route path="/EditTruck/:id" element={<EditTruck />} />
        <Route path="/EditClients/:id" element={<EditClients />} />
        <Route path="/ListDriver" element={<ListDriver />} />
        <Route path="/EditDriver/:id" element={<EditDriver />} />

      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;

