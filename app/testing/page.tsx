import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import Testing from "@/src/components/admin/previewComponent";
import React from "react";

const TestingPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Testing jsonData={undefined} />
      <Footer />
    </React.Fragment>
  );
};

export default TestingPage;
