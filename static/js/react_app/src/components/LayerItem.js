import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import LayerMenu from './LayerMenu';
import * as lp from './layerParameters';
import { useLayer } from './LayerContext';

export const LayerItem = ({ name }) => {
    
    const [layerType, setLayerType] = useState('default');
    const [editedName, setEditedName] = useState(name || 'New Hidden Layer');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLayerDropdownOpen, setIsLayerDdOpen] = useState(false);
    const { layerParams, updateLayerParameters } = useLayer();

    const handleNameChange = (newName) => {
        console.log(newName);
        setLayerType(newName.toLowerCase());
        setEditedName(newName+' Layer');
        setIsLayerDdOpen(false);
        updateLayerParameters('cleartype', newName);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleLayerDd = () => {
        setIsLayerDdOpen(!isLayerDropdownOpen);
    }

    const ddText = isDropdownOpen ? '▲' : '▼';
    const layerDdText = isLayerDropdownOpen ? '▲' : '▼';

    const renderLayerParameters = () => {
        switch (layerType) {
            case 'dense':
                return <lp.DenseLayerParameters />;
            // Add more cases for other layer types
            case 'conv2d':
                return <lp.Conv2DLayerParameters />;
            // ... and so on for other layer types
            default:
                return null;
        }
    };

    return (
        <div className="layer-item">
            <div>
                <div
                    className="layer-name"
                >
                    {isDropdownOpen && (
                        <>{editedName}</>
                    )}
                    {!isDropdownOpen && (
                        <>{editedName[0]}</>
                    )}
                </div>
                <div className = "layer-dropdown-button">
                    <div>
                        {isDropdownOpen && (
                            <button onClick={toggleLayerDd}>{'Layer Type '+layerDdText}</button>
                        )}                  
                    </div>
                </div>
                <div className="dropdown-content">
                    <div className="layer-type">
                        {isDropdownOpen && (
                            <>
                                {isLayerDropdownOpen && (                                
                                    <LayerMenu 
                                        name={editedName}
                                        handleNameChange={(name) => handleNameChange(name)}
                                    />
                                )}                            
                                {renderLayerParameters()}
                            </>                            
                        )}                        
                    </div>
                
        </div>
            </div>           
            <div className="dropdown-button">
                <button onClick={toggleDropdown}>{ddText}</button>               
            </div>
        </div>             
        
    );
};

export default LayerItem;