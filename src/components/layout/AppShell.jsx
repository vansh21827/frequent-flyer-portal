import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import "./layout.css";

function AppShell() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Sidebar />

      <div className="app-content">
        <Header />

        <main
          id="main-content"
          className="page-content"
          tabIndex="-1"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppShell;