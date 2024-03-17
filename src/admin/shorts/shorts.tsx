"use client";

import React, { useState } from 'react';
import InputField from './input-field';
import Reflection from './reflection';

const ShortsAdmin = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="w-96 bg-white shadow-lg p-6 rounded-lg flex justify-between items-center">
                <InputField value={inputValue} onChange={handleInputChange} />
                <Reflection value={inputValue} />
            </div>
        </div>
    );
};

export default ShortsAdmin
