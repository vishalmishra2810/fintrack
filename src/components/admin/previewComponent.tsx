import React from "react";
import _ from "lodash";

const PreviewComponent: React.FC<{
  formData: any;
}> = ({ formData }) => {
  return (
    <React.Fragment>
      <div className="">
        <div className="text-[20px]">{formData.heading1}</div>
        <div className="text-[18px]">{formData.heading2}</div>
        <div className="text-[16px]">{formData.heading3}</div>
      </div>
    </React.Fragment>
  );
};

export default PreviewComponent;
