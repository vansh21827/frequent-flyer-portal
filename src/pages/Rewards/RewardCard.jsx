import { Gift } from "lucide-react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import "../../components/ui/ui.css";

function RewardCard({
  reward,
  canRedeem,
  onRedeem,
  loading,
}) {
  return (
    <Card>
      <article className="reward-card">
        <div className="reward-icon" aria-hidden="true">
          <Gift size={22} />
        </div>

        <div className="reward-content">
          <p className="reward-category">
            {reward.category}
          </p>

          <h3>{reward.name}</h3>

          <p>{reward.description}</p>

          <div className="reward-footer">
            <strong>
              {reward.points.toLocaleString()} points
            </strong>

            <div>
              <Button
                type="button"
                disabled={!canRedeem}
                loading={loading}
                onClick={() => onRedeem(reward)}
                aria-label={
                  canRedeem
                    ? `Redeem ${reward.name} for ${reward.points.toLocaleString()} points`
                    : `${reward.name} requires ${reward.points.toLocaleString()} points`
                }
              >
                Redeem
              </Button>

              {!canRedeem && (
                <p className="reward-unavailable">
                  Not enough points
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
    </Card>
  );
}

export default RewardCard;