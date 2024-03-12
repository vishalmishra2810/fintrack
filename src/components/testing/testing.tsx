import React from "react";

const Testing: React.FC<{
    jsonData: any
}> = ({ jsonData }) => {
  return (
    <React.Fragment>
      {jsonData}
    </React.Fragment>
  );
};

export default Testing
