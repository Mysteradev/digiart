import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="main-content">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
