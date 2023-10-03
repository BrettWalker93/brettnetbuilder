import React from 'react';

const _LayerParameters = ({ onChange }) => {
    return (
        <div>
            <div>
                <label>
                    : 
                    <input type="number" onChange={e => onChange('parameter1', e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    :
                    <select onChange={e => onChange('parameter2', e.target.value)}>
                        <option value="option">option</option>
                    </select>
                </label>
            </div>

            {/* ... add other parameters in similar fashion */}
        </div>
    ); 
}
export default _LayerParameters;s