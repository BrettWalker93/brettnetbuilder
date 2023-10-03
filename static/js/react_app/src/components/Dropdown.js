import LayerMenuItems from './LayerMenuItems';
const Dropdown = ({ submenus, dropdown, depthLevel, updateLayerType }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
      <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenus.map((submenu, index) => (
            <LayerMenuItems
                items={submenu}
                key={index}
                updateLayerType={updateLayerType}
            />
        ))}
      </ul>
    );
  };
  
  export default Dropdown;