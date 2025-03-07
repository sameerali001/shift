import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Navbar1 from "components/Navbars/Navbar1";  // Assuming Navbar1 is the alternative navbar
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (path.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  // List of routes that should not appear in the sidebar
  const hideFromSidebar = ["/admin/support", "/admin/enterprise", "/admin/partners", "/auth/login","/auth/signup"];

  // Filter out the routes that should not appear in the sidebar
  const filteredRoutes = routes.filter(
    (route) => !hideFromSidebar.includes(route.layout + route.path)
  );

  // List of routes where navbar1 should be displayed
  const navbar1Routes = ["/admin/index", "/admin/enterprise", "/admin/partners", "/admin/support"];

  // Check if the current route matches any of the navbar1 routes
  const isNavbar1Route = navbar1Routes.includes(location.pathname);

  return (
    <>
      {/* Conditional Rendering of Navbar */}
      {isNavbar1Route ? (
        <Navbar1 {...props} />
      ) : (
        <Sidebar
          {...props}
          routes={filteredRoutes} 
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("../assets/img/brand/argon-react.png"),
            imgAlt: "...",
          }}
        />
      )}

      <div className="main-content" ref={mainContent}>
        {/* Display AdminNavbar only for routes not in navbar1Routes */}
        {!isNavbar1Route && (
          <AdminNavbar
            {...props}
            brandText={getBrandText(location.pathname)}
          />
        )}
        
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/admin/index" replace />} />
        </Routes>
        
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default Admin;
