import React from 'react';

const Conv2DLayerParameters = ({ onChange }) => (
    <div>
        <div>
            <label>
                Dim: 
                <input type="number" onChange={e => onChange('units', e.target.value)} />
            </label>
        </div>
        <div>
            <label>
                Humb:
            </label>
        </div>

        {/* ... add other parameters in similar fashion */}
    </div>
); 

export default Conv2DLayerParameters;