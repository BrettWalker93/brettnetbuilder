import Dropdown from './Dropdown';
import { useState } from 'react';

const LayerMenuItems = ({ items, depthLevel, updateLayerType }) => {
    const [dropdown, setDropdown] = useState(false);

    const handleTerminalClick = () => {
        if (items.type) {updateLayerType(items.type);}
        else {updateLayerType(items.title);}
        setDropdown((prev) => !prev)
    }

    return (
        <div className="layer-menu-items">
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu" 
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow"/>}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                        updateLayerType={updateLayerType}
                    />
                </>
            ) : (
                <button
                    type="button"                    
                    onClick={() => {
                        handleTerminalClick();
                    }}
                >
                    {items.title}
                </button>
            )}
        </div>
    );
};

export default LayerMenuItems;