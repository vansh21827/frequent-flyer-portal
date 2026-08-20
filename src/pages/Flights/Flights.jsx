import { useState } from "react";
import { Search } from "lucide-react";
import Card from "../../components/ui/Card";
import EmptyState from "../../components/ui/EmptyState";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { sanitizeText } from "../../utils/sanitize";
import { trackPrimaryAction } from "../../utils/analytics";
import { availableFlights } from "./flightsData";
import "./flights.css";

const initialForm = {
  from: "",
  to: "",
  date: "",
};

function Flights() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    const sanitizedValue =
      name === "date"
        ? value
        : sanitizeText(value);

    setForm((current) => ({
      ...current,
      [name]: sanitizedValue,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  }

  function validateForm() {
    const nextErrors = {};

    if (!form.from.trim()) {
      nextErrors.from = "Departure airport is required.";
    } else if (form.from.trim().length !== 3) {
      nextErrors.from = "Use a valid 3-letter airport code.";
    }

    if (!form.to.trim()) {
      nextErrors.to = "Destination airport is required.";
    } else if (form.to.trim().length !== 3) {
      nextErrors.to = "Use a valid 3-letter airport code.";
    }

    if (
      form.from &&
      form.to &&
      form.from.toUpperCase() === form.to.toUpperCase()
    ) {
      nextErrors.to =
        "Departure and destination cannot be the same.";
    }

    if (!form.date) {
      nextErrors.date = "Travel date is required.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setHasSearched(true);

    setTimeout(() => {
      const filteredFlights = availableFlights.filter(
        (flight) =>
          flight.from === form.from.toUpperCase() &&
          flight.to === form.to.toUpperCase() &&
          flight.date === form.date,
      );

      setResults(filteredFlights);
      setLoading(false);

      trackPrimaryAction();
    }, 800);
  }

  return (
    <section
      className="flights-page"
      aria-labelledby="flights-heading"
    >
      <header className="page-intro">
        <p className="page-eyebrow">Travel</p>

        <h2 id="flights-heading">Find a Flight</h2>

        <p>
          Search available flights using your departure airport,
          destination, and travel date.
        </p>
      </header>

      <Card>
        <form
          className="flight-search-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <Input
            id="flight-from"
            name="from"
            label="From"
            placeholder="DEL"
            maxLength={3}
            autoComplete="off"
            required
            value={form.from}
            error={errors.from}
            onChange={handleChange}
          />

          <Input
            id="flight-to"
            name="to"
            label="To"
            placeholder="LHR"
            maxLength={3}
            autoComplete="off"
            required
            value={form.to}
            error={errors.to}
            onChange={handleChange}
          />

          <Input
            id="flight-date"
            name="date"
            type="date"
            label="Travel date"
            required
            value={form.date}
            error={errors.date}
            onChange={handleChange}
          />

          <div className="search-action">
            <Button
              type="submit"
              loading={loading}
              aria-label="Search for available flights"
            >
              <Search size={18} aria-hidden="true" />
              Search Flights
            </Button>
          </div>
        </form>
      </Card>

      {loading && (
        <div className="loading-state" role="status" aria-live="polite">
          Searching available flights...
        </div>
      )}

      {!loading && hasSearched && results.length === 0 && (
        <EmptyState
          title="No flights found"
          description="Try another route or travel date."
        />
      )}

      {!loading && results.length > 0 && (
        <section
          aria-labelledby="flight-results-heading"
          className="flight-results"
        >
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">Search results</p>
              <h2 id="flight-results-heading">
                Available Flights
              </h2>
            </div>
          </div>

          <div className="flight-results-list">
            {results.map((flight) => (
              <Card key={flight.id}>
                <article className="flight-result">
                  <div>
                    <p className="flight-airline">
                      {flight.airline}
                    </p>

                    <h3>{flight.flightNumber}</h3>
                  </div>

                  <div className="flight-route">
                    <strong>{flight.from}</strong>

                    <span aria-hidden="true">→</span>

                    <strong>{flight.to}</strong>
                  </div>

                  <div className="flight-time">
                    <span>
                      {flight.departure} – {flight.arrival}
                    </span>

                    <span>{flight.duration}</span>
                  </div>

                  <div className="flight-date">
                    {flight.date}
                  </div>
                </article>
              </Card>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

export default Flights;