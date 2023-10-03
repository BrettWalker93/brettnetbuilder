import React, { useState, useRef, useContext } from 'react';
import { generateKerasCode } from '../utils/api';
import LayerItem from './LayerItem';
import { LayerProvider, useLayer } from './LayerContext';
import '../styles.css';

function dumpState(state) {
  console.log("State Dump:", JSON.stringify(state, null, 2));
}

export const NetworkBuilder = () => {
  const [kerasCode, setKerasCode] = useState('');

  const globalLayerStates= useRef([]);

  const handleLayerStateChange = (index, newState) => {
      console.log('changing global layer states');
      globalLayerStates.current[index] = newState;
  };
  
  const [architecture, setArchitecture] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  
  const handleClearArchitecture = () => {
    setArchitecture([]);
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
  };

  const addLayerItem = () => {
    setArchitecture([...architecture, 'New Hidden Layer']);
  };
  
  const handleGenerateCode = async () => {
    const generatedCode = await generateKerasCode(architecture);
    if (generatedCode) {
      setKerasCode(generatedCode);
    }
  };

  const buildNet = () => {
    dumpState(globalLayerStates.current);
  }
  
  return (
    <div>
      <div>
        <button onClick={addLayerItem}>Add Hidden Layer</button>
      </div>
      <div>               
        <ul>
          <div>
            <p className="layer-item">Input Layer</p>
          {architecture.map((item, index) => (
            <LayerProvider 
              key={index}
              onStateChange={(newState) => handleLayerStateChange(index, newState)}
            >
                <LayerItem
                    name={item}
                    key={index}
                    index={index}
                />    
            </LayerProvider>
            ))}
            <p className="layer-item">Output Layer</p>
          </div>
        </ul>
        <button onClick={handleClearArchitecture}>Clear Architecture</button>
      </div>
      <div>
        <button onClick={buildNet}>Build Network</button>
      </div>
    </div>
  );
};

export default NetworkBuilder.js;