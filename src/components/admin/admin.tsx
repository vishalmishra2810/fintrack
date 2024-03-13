"use client"; // This is a client component

import { useState } from 'react';
import FormComponent from './formComponent';
import PreviewComponent from './previewComponent';

const Admin = () => {

    const [formResult, setFormResult] = useState({
        name: '',
        email: '',
      });
    
      const handleFormSubmit = (formData: any) => {
        setFormResult(formData);
      };
  return (
    <div className="flex justify-center space-x-8">
      <div className="w-1/2">
        <FormComponent onFormSubmit={handleFormSubmit} />
      </div>
      <div className="w-1/2">
        <PreviewComponent formData={formResult} />
      </div>
    </div>
  );
};

export default Admin
