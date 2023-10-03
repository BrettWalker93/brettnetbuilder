import React from 'react';
import { useState } from 'react';
import { useLayer } from '../LayerContext';

const DenseConstraint = ({ }) => {
    const { layerParameters, updateLayerParameters } = useLayer();

    const [kval1, setkVal1] = useState(0);
    const [kval2, setkVal2] = useState(1);
    const [kval3, setkVal3] = useState(1);
    const [kval4, setkVal4] = useState(0);

    const [kValue, setKValue] = useState('max-norm');
    const handleKChange = (e) => {
        setKValue(e.target.value);
        updateK();
    };

    const handlekVal1Change = (e) => {
        setkVal1(e.target.value);
        updateK();
    };

    const handlekVal2Change = (e) => {
        setkVal2(e.target.value);
        updateK();        
    };

    const handlekVal3Change = (e) => {
        setkVal3(e.target.value);
        updateK();        
    };

    const handlekVal4Change = (e) => {
        setkVal4(e.target.value);
        updateK();        
    };

    const updateK = () => {
        updateLayerParameters(kValue, kval1.toString+' '+kval2.toString+' '+kval3.toString+' '+kval4.toString);
    };

    const [bval1, setbVal1] = useState(0);
    const [bval2, setbVal2] = useState(1);
    const [bval3, setbVal3] = useState(1);
    const [bval4, setbVal4] = useState(0);

    const [bValue, setBValue] = useState('max-norm');

    const handleBChange = (e) => {
        setBValue(e.target.value);
        updateB();
    };

    const handlebVal1Change = (e) => {
        setbVal1(e.target.value);
        updateB();
    };

    const handlebVal2Change = (e) => {
        setbVal2(e.target.value);
        updateB();
    };

    const handlebVal3Change = (e) => {
        setbVal3(e.target.value);
        updateB();
    };

    const handlebVal4Change = (e) => {
        setbVal4(e.target.value);
        updateB();
    };

    const updateB = () => {
        updateLayerParameters(bValue, bval1.toString+' '+bval2.toString+' '+bval3.toString+' '+bval4.toString);
    };

    /*
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLayerDropdownOpen, setIsLayerDdOpen] = useState(false);

    const ddText = isDropdownOpen ? '▲' : '▼';
    const layerDdText = isLayerDropdownOpen ? '▲' : '▼';
    */

    return (
        <div className='initializer'>
            <label>Kernel Constraint</label>
            <select value={kValue} onChange={handleKChange}>
                <option value='max-norm'>Max Norm</option>
                <option value='min-max-norm'>Min/Max Norm</option>
                <option value='non-neg'>Non-Neg</option>
                <option value='unit-norm'>Unit Norm</option>
                <option value='radial-constraint'>Radial Constraint</option>
                {/*<option value=''></option>*/}
            </select>
            {kValue === 'max-norm' && (
                <div>
                    <label onChange={handlekVal1Change}>Max: <input type='number' /></label>
                    <label onChange={handlekVal2Change}>Axis: <input type='number' /></label>
                </div>
            )}    
            {kValue === 'min-max-norm' && (
                <div>
                    <label onChange={handlekVal1Change}>Min: <input type='number' /></label>
                    <label onChange={handlekVal2Change}>Max: <input type='number' /></label>
                    <label onChange={handlekVal3Change}>Axis:<input type='number'/></label>
                    <label onChange={handlekVal4Change}>Rate:<input type='number'/></label>                    
                </div>
            )}
            {kValue === 'unit-norm' && (
                <div>
                    <label onChange={handlekVal1Change}>Axis: <input type='number' /></label>
                </div>
            )}    
            <div></div>
            <label>Bias Constraint</label>
            <select value={bValue} onChange={handleBChange}>
                <option value='max-norm'>Max Norm</option>
                <option value='min-max-norm'>Min/Max Norm</option>
                <option value='non-neg'>Non-Neg</option>
                <option value='unit-norm'>Unit Norm</option>
                <option value='radial-constraint'>Radial Constraint</option>
                {/*<option value=''></option>*/}
            </select>
            {kValue === 'max-norm' && (
                <div>
                    <label onChange={handlebVal1Change}>Max: <input type='number' /></label>
                    <label onChange={handlebVal2Change}>Axis: <input type='number' /></label>
                </div>
            )}    
            {kValue === 'min-max-norm' && (
                <div>
                    <label onChange={handlebVal1Change}>Min: <input type='number' /></label>
                    <label onChange={handlebVal2Change}>Max: <input type='number' /></label>
                    <label onChange={handlebVal3Change}>Axis:<input type='number'/></label>
                    <label onChange={handlebVal4Change}>Rate:<input type='number'/></label>                    
                </div>
            )}
            {kValue === 'unit-norm' && (
                <div>
                    <label onChange={handlebVal1Change}>Axis: <input type='number' /></label>
                </div>
            )}    
        </div>
    );
};

export default DenseConstraint;