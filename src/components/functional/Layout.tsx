import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div style={{ margin: "0 auto", maxWidth: "960px", padding: "0 1rem", boxSizing: "border-box" }}>
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
