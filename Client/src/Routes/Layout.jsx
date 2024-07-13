import React from "react";
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";



const Layout = ({ children, user, handleLogout }) => {
  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      <div className="layout-container">
        
        
          {children}
         
       
      </div>
      <Footer />
    </>
  );
};

export default Layout;
