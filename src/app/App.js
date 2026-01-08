import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor  from "../hooks/AnimatedCursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="0, 255, 220"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
          innerStyle={{
            boxShadow: "0 0 10px rgba(0, 255, 220, 0.8), 0 0 20px rgba(0, 255, 220, 0.5)"
          }}
          outerStyle={{
            boxShadow: "0 0 25px rgba(0, 255, 220, 0.35), 0 0 50px rgba(0, 255, 220, 0.2)"
          }}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
