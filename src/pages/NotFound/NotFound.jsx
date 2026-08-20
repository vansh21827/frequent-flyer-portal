import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import "./notFound.css";

function NotFound() {
  return (
    <section
      className="not-found"
      aria-labelledby="not-found-heading"
    >
      <Card>
        <div className="not-found-content">
          <p className="page-eyebrow">404</p>

          <h2 id="not-found-heading">
            Page not found
          </h2>

          <p>
            The page you're looking for doesn't exist or may
            have been moved.
          </p>

          <Link className="not-found-link" to="/">
            Return to Dashboard
          </Link>
        </div>
      </Card>
    </section>
  );
}

export default NotFound;