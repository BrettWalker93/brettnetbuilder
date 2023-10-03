import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { useDrag } from 'react-dnd';

export const DraggableItem = ({ name, index }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'ITEM',
    item: { name, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  return (
    <div 
      class={`draggable-item ${isEditing ? 'editing' : ''}`}
      ref={(node) => {
        dragRef(node); // Attach the dragRef to the DOM element.
        ref.current = node; // Store the DOM element in the ref.
      }}
      draggable="true"
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      onDragStart={() => handleDragStart(index)}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={handleNameChange}
          autoFocus
          onBlur={handleBlur}
        />
      ) : (
        editedName
      )}
    </div>
  );
};

export default DraggableItem;