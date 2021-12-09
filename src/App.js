import React, {Fragment} from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header'
import SortDisplay from './components/sort-display/SortDisplay';
import Graph from './components/path-finder/graph/Graph'
import Home from './components/home/Home';


function App() {
  return (
    <div className="App">
      <Fragment>
        <Header/>
        <main>
        <Routes>
          <Route
            path='/'
            element={<Home/>}/>
            
          <Route
            path='/sort'
            element={<SortDisplay/>}/>
        
          <Route
            path='/path'
            element={<Graph/>}/>
          </Routes>
        </main>
      </Fragment>
    </div>
  );
}

export default App;
