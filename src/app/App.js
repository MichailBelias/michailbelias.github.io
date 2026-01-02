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
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
(function() {
  const STORAGE_KEY = "site-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("theme-dark", theme === "dark");
    document.documentElement.classList.toggle("theme-light", theme === "light");
  }

  function createSelector(initial) {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "12px";
    container.style.right = "12px";
    container.style.zIndex = 99999;
    container.style.background = "rgba(0,0,0,0.5)";
    container.style.color = "#fff";
    container.style.padding = "6px 8px";
    container.style.borderRadius = "8px";
    container.style.fontFamily = "Arial, sans-serif";
    container.style.fontSize = "13px";
    container.style.backdropFilter = "blur(6px)";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.gap = "8px";

    const label = document.createElement("span");
    label.textContent = "Theme:";
    label.style.marginRight = "4px";
    container.appendChild(label);

    const select = document.createElement("select");
    select.style.background = "transparent";
    select.style.color = "inherit";
    select.style.border = "1px solid rgba(255,255,255,0.2)";
    select.style.padding = "4px 6px";
    select.style.borderRadius = "6px";
    select.style.outline = "none";

    const optLight = document.createElement("option");
    optLight.value = "light";
    optLight.text = "Light";
    const optDark = document.createElement("option");
    optDark.value = "dark";
    optDark.text = "Dark";

    select.add(optLight);
    select.add(optDark);

    select.value = initial;
    select.addEventListener("change", (e) => {
      const t = e.target.value;
      applyTheme(t);
      try {
        localStorage.setItem(STORAGE_KEY, t);
      } catch (err) {}
    });

    container.appendChild(select);
    document.body.appendChild(container);
  }

  function init() {
    let theme = null;
    try {
      theme = localStorage.getItem(STORAGE_KEY);
    } catch (err) {}
    if (!theme) {
      theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    applyTheme(theme);
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => createSelector(theme));
    } else {
      createSelector(theme);
    }
  }

  init();
})();