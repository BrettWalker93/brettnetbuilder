import React, { createContext, useContext, useState, useEffect } from 'react';

const LayerContext = createContext();

export const useLayer = () => {
    const context = useContext(LayerContext);
    if (!context) {
        throw new Error("useLayer must be used within a LayerProvider");
    }
    return context;
};

export const LayerProvider = ({ children, onStateChange }) => {
  const [layerParameters, setParameters] = useState({
    'bias-reg': 'none',
    'kernel-reg': 'none',
    'activity-reg': 'none'
  });

  const updateLayerParameters = (key, value) => {
    //console.log('updating layer parameters');
    //fix update logic here
    if (key === 'cleartype') {
      setParameters([]);
      setParameters(prevSettings => ({
        ...prevSettings,
        ['type']: value
      }));
    }

    else {
      setParameters(prevSettings => ({
          ...prevSettings,
          [key]: value
      }));
    }
  };

  useEffect(() => {
    if(onStateChange) {
      console.log("Calling onStateChange...");
      onStateChange(layerParameters);
    }
  }, [layerParameters, onStateChange]);

  return (
      <LayerContext.Provider value={{ layerParameters, updateLayerParameters }}>
          {children}
      </LayerContext.Provider>
  );
};