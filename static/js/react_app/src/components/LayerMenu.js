import { layerMenuItems } from '../layerMenuItems';
import LayerMenuItems from './LayerMenuItems';
import { useState } from 'react';

const LayerMenu = ({ name, handleNameChange }) => {
    
    const updateLayerType = (newType) => {
        handleNameChange(newType);
    }
    return (
        <nav>
            <ul className="layer-menu">
                {layerMenuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <LayerMenuItems 
                        items={menu} 
                        key={index} 
                        depthLevel={depthLevel}
                        updateLayerType={updateLayerType}
                    />;
                })}
            </ul>
        </nav>
    );
};

export default LayerMenu;