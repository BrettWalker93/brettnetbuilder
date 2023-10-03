import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Navigation } from './components/Navigation'; 
import { HomePage } from './components/HomePage'; 
import { BlockBuilder } from './components/BlockBuilder'; 

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/brettnetbuilder" element={<BlockBuilder />} />
          </Routes>
        </div>
      </Router>
    </DndProvider>
  );
}

export default App;