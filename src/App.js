import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const routes = [
  { path: "/contact", component: <Contact /> },
  { path: "/projects", component: <Projects /> },
  { path: "/", component: <Home /> },
];

function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawerClick = (show) => {
    console.log("opening drawer");
    setShowDrawer(show);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <Router>
          <SideDrawer
            show={showDrawer}
            overlayClick={() => handleDrawerClick(false)}
          />
          <Navbar handleDrawerClick={() => handleDrawerClick(true)} />
          <Switch>
            {routes.map((route, i) => {
              return (
                <Route key={i} path={route.path}>
                  {route.component}
                </Route>
              );
            })}
          </Switch>
        </Router>
      </div>
      <footer>
        <SocialNetworks />
      </footer>
    </div>
  );
}

export default App;
