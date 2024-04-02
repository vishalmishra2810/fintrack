"use client";

import React, { useState } from "react";
import InputField from "./input-field";
import Reflection from "./reflection";
import { shortsFormService } from "@/src/service/shorts.service";

const ShortsAdmin = () => {
    const [inputValues, setInputValues] = useState({
        value1: "",
        value2: ""
    });

    const handleInputChange = (e: any) => {
        setInputValues({
            ...inputValues,
            value1: e.target.value
        });
    };

    const handleInputChange2 = (e: any) => {
        setInputValues({
            ...inputValues,
            value2: e.target.value
        });
    };

    const handleOnSubmit = async(e: any) => {
        e.preventDefault();
        try {
            if (inputValues.value1.length > 0 && inputValues.value2.length > 0) {
                const shortsFormResponse = await shortsFormService.shortsFormData(JSON.stringify(inputValues));
                console.log('true', shortsFormResponse);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="m-10">
            <form onSubmit={handleOnSubmit}>
                <InputField value={inputValues.value1} onChange={handleInputChange} />
                <InputField value={inputValues.value2} onChange={handleInputChange2} />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
            </form>
            <Reflection value={inputValues.value1} />
            <Reflection value={inputValues.value2} />
        </div>
    );
};

export default ShortsAdmin;
