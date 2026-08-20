import SummaryCards from "./SummaryCards";
import UpcomingFlights from "./UpcomingFlights";
import RecentActivity from "./RecentActivity";
import {
  flyerSummary,
  upcomingFlights,
  recentActivity,
} from "./dashboardData";
import "./dashboard.css";

function Dashboard() {
  return (
    <section
      className="dashboard"
      aria-labelledby="dashboard-heading"
    >
      <header className="dashboard-intro">
        <p className="dashboard-eyebrow">
          Member ID: {flyerSummary.memberId}
        </p>

        <h2 id="dashboard-heading" className="dashboard-heading">
          Welcome to your Frequent Flyer Portal
        </h2>

        <p className="dashboard-description">
          Track your miles, manage upcoming flights, and make the
          most of your rewards.
        </p>
      </header>

      <SummaryCards summary={flyerSummary} />

      <UpcomingFlights flights={upcomingFlights} />

      <RecentActivity activities={recentActivity} />
    </section>
  );
}

export default Dashboard;