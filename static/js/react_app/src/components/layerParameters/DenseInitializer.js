import React from 'react';
import { useState } from 'react';
import { useLayer } from '../LayerContext';

const DenseInitializer = ({ }) => {
    const { layerParameters, updateLayerParameters } = useLayer();

    const [kval1, setkVal1] = useState(0);
    const [kval2, setkVal2] = useState(1);
    const [bval1, setbVal1] = useState(0);
    const [bval2, setbVal2] = useState(1);



    const handlekVal1Change = (e) => {
        setkVal1(e.target.value);
        updateLayerParameters(kValue, kval1.toString+kval2.toString);
    };

    const handlekVal2Change = (e) => {
        setkVal2(e.target.value);
        updateLayerParameters(kValue, kval1.toString+kval2.toString);
    };

    const handlebVal1Change = (e) => {
        setbVal1(e.target.value);
        updateLayerParameters(bValue, bval1.toString+bval2.toString);
    };

    const handlebVal2Change = (e) => {
        setbVal2(e.target.value);
        updateLayerParameters(bValue, bval1.toString+bval2.toString);
    };

    const [kValue, setKValue] = useState('rand-norm');
    const handleKChange = (e) => {
        setKValue(e.target.value);
        updateLayerParameters(kValue, bval1.toString+bval2.toString);
    };
    const [bValue, setBValue] = useState('rand-norm');
    const handleBChange = (e) => {
        setBValue(e.target.value);
        updateLayerParameters(bValue, bval1.toString+bval2.toString);
    };

    /*
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLayerDropdownOpen, setIsLayerDdOpen] = useState(false);

    const ddText = isDropdownOpen ? '▲' : '▼';
    const layerDdText = isLayerDropdownOpen ? '▲' : '▼';
    */

    return (
        <div className='initializer'>
            <label>Kernel Initializer</label>
            <select value={kValue} onChange={handleKChange}>
                <option value='rand-norm'>Random Normal</option>
                <option value='zeros'>Zeros</option>
                <option value='ones'>Ones</option>
                <option value='rand-unif'>Random Uniform</option>
                <option value='glorot-norm'>Glorot Normal</option>
                <option value='glorot-unif'>Glorot Uniform</option>
                <option value='other'>Other</option>
                {/*<option value=''></option>*/}
            </select>
            {kValue === 'rand-norm' && (
                <div>
                    <label onChange={handlekVal1Change}>Mean: <input type='number' /></label>
                    <label onChange={handlekVal2Change}>Std Dev: <input type='number' /></label>
                </div>
            )}    
            {kValue === 'rand-unif' && (
                <div>
                    <label onChange={handlekVal1Change}>Min: <input type='number' /></label>
                    <label onChange={handlekVal2Change}>Max: <input type='number' /></label>
                </div>
            )}
            <div></div>
            <label>Bias Initializer</label>
            <select value={bValue} onChange={handleBChange}>
                <option value='rand-norm'>Random Normal</option>
                <option value='zeros'>Zeros</option>
                <option value='ones'>Ones</option>
                <option value='rand-unif'>Random Uniform</option>
                <option value='glorot-norm'>Glorot Normal</option>
                <option value='glorot-unif'>Glorot Uniform</option>
                <option value='other'>Other</option>
                {/*<option value=''></option>*/}
            </select>
            {bValue === 'rand-norm' && (
                <div>
                    <label onChange={handlebVal1Change}>Mean: <input type='text' /></label>
                    <label onChange={handlebVal2Change}>Std Dev: <input type='text' /></label>
                </div>
            )}
            
            {bValue === 'rand-unif' && (
                <div>
                    <label onChange={handlebVal1Change}>Min: <input type='text' /></label>
                    <label onChange={handlebVal2Change}>Max: <input type='text' /></label>
                </div>
            )}
        </div>
    );
};

export default DenseInitializer;