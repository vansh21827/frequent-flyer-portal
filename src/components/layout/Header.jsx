import { useEffect, useRef, useState } from "react";
import { Bell, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Dashboard",
  "/flights": "Flights",
  "/rewards": "Rewards",
  "/profile": "Profile",
};

function Header() {
  const location = useLocation();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notificationRef = useRef(null);

  const title =
    pageTitles[location.pathname] || "Frequent Flyer Portal";

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick,
      );
    };
  }, []);

  function toggleNotifications() {
    setNotificationsOpen((current) => !current);
  }

  function closeNotifications() {
    setNotificationsOpen(false);
  }

  return (
    <header className="app-header">
      <div>
        <p className="header-eyebrow">Frequent Flyer Portal</p>

        <h1 className="header-title">{title}</h1>
      </div>

      <div className="notification-wrapper" ref={notificationRef}>
        <button
          type="button"
          className="icon-button"
          aria-label={
            notificationsOpen
              ? "Close notifications"
              : "Open notifications"
          }
          aria-expanded={notificationsOpen}
          aria-controls="notification-panel"
          onClick={toggleNotifications}
        >
          {notificationsOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Bell size={20} aria-hidden="true" />
          )}
        </button>

        {notificationsOpen && (
          <section
            id="notification-panel"
            className="notification-panel"
            aria-label="Notifications"
          >
            <div className="notification-header">
              <h2>Notifications</h2>

              <button
                type="button"
                className="notification-close"
                aria-label="Close notifications"
                onClick={closeNotifications}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div
              className="notification-content"
              role="status"
            >
              <p>No new notifications.</p>
            </div>
          </section>
        )}
      </div>
    </header>
  );
}

export default Header;