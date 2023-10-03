import React from 'react';
import { useState } from 'react';
import { useLayer } from '../LayerContext';
import DenseRegularization from './DenseRegularization';
import DenseInitializer from './DenseInitializer';
import DenseConstraint from './DenseConstraint';

const DenseLayerParameters = ({ }) => {

    const { layerParameters, updateLayerParameters } = useLayer();
    const [checkboxState, setCheckboxState] = useState(false);

    const handleCheckboxChange = (e) => {
        updateLayerParameters(e.target.name, 'toggle');
    };

    return (
        <div>
            <div>
                <label>
                    Units: 
                    <input type="number" onChange={e => updateLayerParameters('units', e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Activation: 
                    <select onChange={e => updateLayerParameters('activation', e.target.value)}>
                        <option value="identity">Identity</option>
                        <option value="relu">ReLU</option>
                    </select>
                </label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    name="use-bias" 
                    checked={checkboxState.regularization} 
                    onChange={handleCheckboxChange} 
                />
                <label>Use Bias</label>
            </div>
            <div>
                <DenseRegularization />
            </div>
            <div>
                <DenseInitializer />
            </div>
            <div>
                <DenseConstraint />
            </div>
        </div>
    );
}

export default DenseLayerParameters;