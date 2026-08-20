import Card from "../../components/ui/Card";
import EmptyState from "../../components/ui/EmptyState";
import "../../components/ui/ui.css";

function UpcomingFlights({ flights }) {
  return (
    <section aria-labelledby="upcoming-flights-heading">
      <div className="section-heading">
        <div>
          <p className="section-eyebrow">Travel plans</p>

          <h2 id="upcoming-flights-heading">
            Upcoming Flights
          </h2>
        </div>
      </div>

      {flights.length === 0 ? (
        <EmptyState
          title="No upcoming flights"
          description="Your scheduled flights will appear here."
        />
      ) : (
        <div className="flight-list">
          {flights.map((flight) => (
            <Card key={flight.id}>
              <article className="flight-item">
                <div className="flight-main">
                  <div>
                    <p className="flight-airline">
                      {flight.airline}
                    </p>

                    <p className="flight-number">
                      {flight.flightNumber}
                    </p>
                  </div>

                  <div className="flight-route">
                    <strong>{flight.from}</strong>

                    <span aria-hidden="true">→</span>

                    <strong>{flight.to}</strong>
                  </div>
                </div>

                <div className="flight-meta">
                  <span>{flight.date}</span>

                  <span className="status-badge">
                    {flight.status}
                  </span>
                </div>
              </article>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}

export default UpcomingFlights;