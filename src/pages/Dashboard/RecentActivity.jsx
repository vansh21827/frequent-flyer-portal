import Card from "../../components/ui/Card";
import EmptyState from "../../components/ui/EmptyState";
import "../../components/ui/ui.css";

function RecentActivity({ activities }) {
  return (
    <section aria-labelledby="recent-activity-heading">
      <div className="section-heading">
        <div>
          <p className="section-eyebrow">Account activity</p>

          <h2 id="recent-activity-heading">
            Recent Activity
          </h2>
        </div>
      </div>

      {activities.length === 0 ? (
        <EmptyState
          title="No recent activity"
          description="Your recent account activity will appear here."
        />
      ) : (
        <div className="activity-list">
          {activities.map((activity) => (
            <Card key={activity.id}>
              <article className="activity-item">
                <div>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>

                <span
                  className={`activity-value ${activity.type}`}
                >
                  {activity.value}
                </span>
              </article>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentActivity;