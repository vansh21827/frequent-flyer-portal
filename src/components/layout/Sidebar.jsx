import {
  LayoutDashboard,
  Plane,
  Gift,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationItems = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Flights",
    path: "/flights",
    icon: Plane,
  },
  {
    label: "Rewards",
    path: "/rewards",
    icon: Gift,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: User,
  },
];

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <div className="sidebar-brand">
        <span className="brand-mark" aria-hidden="true">
          FF
        </span>

        <span>Frequent Flyer</span>
      </div>

      <nav>
        <ul className="sidebar-navigation">
          {navigationItems.map(({ label, path, icon: Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={20} aria-hidden="true" />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;