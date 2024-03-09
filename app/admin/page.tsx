import Footer from "@/src/common/footer";
import Header from "@/src/common/header";
import Admin from "@/src/components/admin/admin";
import React from "react";

const AdminPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Admin />
      <Footer />
    </React.Fragment>
  );
};

export default AdminPage;
