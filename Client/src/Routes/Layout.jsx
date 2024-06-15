import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";

const Layout = ({ children,user,handleLogout }) => {
  return (
    <>
      <Header user={user} handleLogout={handleLogout}/>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;