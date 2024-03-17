import ShortsAdmin from "@/src/admin/shorts/shorts";
import AdminHeader from "@/src/common/admin-header";
import Footer from "@/src/common/footer";
import Admin from "@/src/components/admin/admin";
import ShortTrending from "@/src/components/short-trending/shortTrending";
import React from "react";

const AdminPage = () => {
  return (
    <React.Fragment>
      <AdminHeader />
      <ShortsAdmin />
      <Footer />
    </React.Fragment>
  );
};

export default AdminPage;
