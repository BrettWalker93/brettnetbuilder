import React, { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = forwardRef(({ name, index, isEditing, onEdit, onDragStart }, ref) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'ITEM',
    item: { name, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [editedName, setEditedName] = useState(name);

  const handleDoubleClick = () => {
    onEdit(); // Handle the double click event for editing.
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleBlur = () => {
    onEdit(); // Handle the blur event for editing.
  };

  useImperativeHandle(ref, () => ({
    // Expose any custom functions or properties if needed.
  }));

  return (
    <div
      className={`draggable-item ${isEditing ? 'editing' : ''}`}
      ref={(node) => {
        dragRef(node); // Attach the dragRef to the DOM element.
        ref.current = node; // Store the DOM element in the ref.
      }}
      draggable="true"
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      onDragStart={onDragStart}
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
});

export default DraggableItem;
