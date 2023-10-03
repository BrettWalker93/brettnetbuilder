import React from 'react';
import { useDrop } from 'react-dnd';

export const DropZone = ({ onDrop }) => {
  const [, dropRef] = useDrop({
    accept: 'ITEM',
    drop: (item) => {
      onDrop(item.name);
    },
  });

  return <div ref={dropRef}>Drop items here</div>;
};

export default DropZone;
