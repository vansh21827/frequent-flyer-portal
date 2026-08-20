import Card from "../../components/ui/Card";
import "../../components/ui/ui.css";
function SummaryCards({ summary }) {
  const cards = [
    {
      label: "Total Miles",
      value: summary.totalMiles.toLocaleString(),
      description: "Lifetime qualifying miles",
    },
    {
      label: "Membership Status",
      value: summary.status,
      description: "Current membership tier",
    },
    {
      label: "Reward Points",
      value: summary.rewardPoints.toLocaleString(),
      description: "Available reward points",
    },
  ];

  return (
    <div className="summary-grid">
      {cards.map((card) => (
        <Card key={card.label}>
          <p className="summary-label">{card.label}</p>
          <p className="summary-value">{card.value}</p>
          <p className="summary-description">{card.description}</p>
        </Card>
      ))}
    </div>
  );
}

export default SummaryCards;