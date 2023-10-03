import React from 'react';
import { useState } from 'react';
import { useLayer } from '../LayerContext';

const DenseRegularization = ({ }) => {
    
    const { layerParameters, updateLayerParameters } = useLayer();

    const [reg, setReg] = useState('l1'); 
    const [checkboxState, setCheckboxState] = useState({
        regularization: false,
        kernel: false,
        bias: false,
        activity: false,        
    });

    const [bias, setBias] = useState({
        pen: 0.1,
        type: 'l1'
    })

    const [kernel, setKernel] = useState({
        pen: 0.1,
        type: 'l1'
    })

    const [activity, setActivity] = useState({
        pen: 0.1,
        type: 'l1'
    })

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckboxState(prevState => ({
            ...prevState,
            [name]: checked
        }));

        checkboxChange(e, name+'Toggle');

    };

    const checkboxChange = (e, item) => {
        let up1 = '';
        let up2 = '';
        switch (item) {
            case 'biasToggle':
                up1 = 'bias-reg';
                if (!checkboxState.bias) {
                    up2 = String(bias.pen)+' '+bias.type;
                } else {
                    up2 = 'none';
                }
                break;
            case 'kernelToggle':
                up1 = 'kernel-reg';
                if (!checkboxState.kernel) {
                    up2 = String(kernel.pen)+' '+kernel.type;
                } else {
                    up2 = 'none';
                }
                break;
            case 'activityToggle':
                up1 = 'activity-reg';
                if (!checkboxState.activity) {
                    up2 = String(activity.pen)+' '+activity.type;
                } else {
                    up2 = 'none';
                }
                break;
            case 'regularizationToggle':
                if (!checkboxState.regularization) {
                    updateLayerParameters('activity-reg', String(activity.pen)+' '+activity.type);
                    updateLayerParameters('kernel-reg', String(kernel.pen)+' '+kernel.type);
                    updateLayerParameters('bias-reg', String(bias.pen)+' '+bias.type);
                } else {
                    updateLayerParameters('activity-reg', 'none');
                    updateLayerParameters('kernel-reg', 'none');
                    updateLayerParameters('bias-reg', 'none');
                }
                return;

        }

        updateLayerParameters(up1, up2);
    };

    const handleParamChange = (e, type) => {

        console.log(type);
        console.log(e.target.value);

    };

    return (
        <div className="regularization-check">
            <input 
                type="checkbox" 
                name="regularization" 
                checked={checkboxState.regularization} 
                onChange={handleCheckboxChange} 
            />
            <label>Regularization</label>
            {checkboxState.regularization && (
                <div>
                    <div className="reg-child">
                        <input
                            type="checkbox"
                            name="kernel"
                            checked={checkboxState.kernel}
                            onChange={handleCheckboxChange}
                        />
                        <label>Kernel</label>
                        {checkboxState.kernel && (
                            <div className="reg-child-child">
                                <div>
                                    <select onChange={(e) => handleParamChange(e, 'kernel')}>
                                        <option value="l1">L1</option>
                                        <option value="l2">L2</option>
                                        <option value="l1l2">L1L2</option>
                                    </select>
                                </div>
                                <div>
                                    <label>
                                        Penalty:
                                        <input type="number" defaultValue="0.1" onChange={(e) => handleParamChange(e, 'kernel')} />
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="reg-child">
                        <input
                            type="checkbox"
                            name="bias"
                            checked={checkboxState.bias}
                            onChange={handleCheckboxChange}
                        />
                        <label>Bias</label>
                        {checkboxState.bias && (
                            <div className="reg-child-child">
                                <div >
                                    <select onChange={(e) => handleParamChange(e, 'bias')}>
                                        <option value="l1">L1</option>
                                        <option value="l2">L2</option>
                                        <option value="l1l2">L1L2</option>
                                    </select>
                                </div>
                                <div>
                                    <label>
                                        Penalty:
                                        <input type="number" defaultValue="0.1" onChange={(e) => handleParamChange(e, 'bias')} />
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="reg-child">
                        <input
                            type="checkbox"
                            name="activity"
                            checked={checkboxState.activity}
                            onChange={handleCheckboxChange}
                        />
                        <label>Activity</label>
                        {checkboxState.activity && (
                            <div className="reg-child-child">
                                <div>
                                    <select onChange={(e) => handleParamChange(e, 'activity')}>
                                        <option value="l1">L1</option>
                                        <option value="l2">L2</option>
                                        <option value="l1l2">L1L2</option>
                                    </select>
                                </div>
                                <div>
                                    <label>
                                        Penalty:
                                        <input type="number" defaultValue="0.1" onChange={(e) => handleParamChange(e, 'activity')} />
                                    </label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>                
            )}
        </div>
    );
}

export default DenseRegularization;