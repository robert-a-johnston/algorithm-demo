import React, {Fragment} from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import SortDisplay from './components/sort-display/SortDisplay';


function App() {
  return (
    <div className="App">
      <Fragment>
        <Header/>
        <main>
        <Routes>
          <Route
          path='/sort'
            element={<SortDisplay/>}/>
        </Routes>
        </main>
      </Fragment>
    </div>
  );
}

export default App;
