import React, { useState, useRef } from 'react';
import { useDrop } from 'react-dnd';
import { generateKerasCode } from '../utils/api';
import DraggableItem from './DraggableItem';
import DropZone from './DropZone';
import '../styles.css';

export const NetworkBuilder = () => {
  const [kerasCode, setKerasCode] = useState('');
  const layerRefs = useRef([]);
  const [architecture, setArchitecture] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDropItem = (itemName, dropIndex) => {
    const updatedArchitecture = [...architecture];
    updatedArchitecture.splice(draggedIndex, 1);
    updatedArchitecture.splice(dropIndex, 0, itemName);
    setArchitecture(updatedArchitecture);
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

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
  
  const getDropIndex = (mouseX) => {

    var dropIndex = 0;
    for (let i = 0; i < layerRefs.length; i++) {
      
      if (i == layerRefs.length - 1) {
        dropIndex = i;
        break;
      }

      const itx = layerRefs[i].getBoundingClientRect().left;

      const nextx = layerRefs[i+1].getBoundingClientRect().left;

      if (mouseX > itx && mouseX < nextx) {
        dropIndex = i;
        break;
      }
      
    }

    return dropIndex;
  };

  const [{ canDrop, isOver}, dropRef] = useDrop({
    accept: 'ITEM',
    drop: (item, monitor) => {
      handleDropItem(item.name, getDropIndex(monitor.getClientOffset().x));
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div>
      <div>
        <button onClick={addLayerItem}>Add Hidden Layer</button>
      </div>
      <div>               
        <ul>
          <div ref={dropRef} className={`drop-zone ${canDrop && isOver ? 'active' : ''}`}>
            {architecture.map((item, index) => (
              <DraggableItem
                name={item}
                index={index}
                isEditing={draggedIndex === index}
                onEdit={() => handleEditItem(index)}
                ref={(ref) => {
                  layerRefs.current[index] = ref;
                  dropRef(ref, { index });
                }}
                className="draggable-item"
                draggable
                onDragStart={() => handleDragStart(index)}
              />
            ))}
          </div>
        </ul>
        <button onClick={handleClearArchitecture}>Clear Architecture</button>
      </div>
    </div>
  );
};

export default NetworkBuilder.js;