import { useMemo, useState } from "react";
import Card from "../../components/ui/Card";
import EmptyState from "../../components/ui/EmptyState";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import RewardCard from "./RewardCard";
import { rewardsData } from "./rewardsData";
import { sanitizeText } from "../../utils/sanitize";
import { trackPrimaryAction } from "../../utils/analytics";
import "./rewards.css";

const INITIAL_POINTS = 12840;

function Rewards() {
  const [points, setPoints] = useState(INITIAL_POINTS);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loadingRewardId, setLoadingRewardId] = useState(null);
  const [message, setMessage] = useState("");

  const categories = [
    "All",
    ...new Set(rewardsData.map((reward) => reward.category)),
  ];

  const filteredRewards = useMemo(() => {
    const sanitizedSearch = sanitizeText(search).toLowerCase();

    return rewardsData.filter((reward) => {
      const matchesSearch =
        reward.name.toLowerCase().includes(sanitizedSearch) ||
        reward.description.toLowerCase().includes(sanitizedSearch);

      const matchesCategory =
        category === "All" || reward.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  function handleSearchChange(event) {
    setSearch(sanitizeText(event.target.value));
  }

  function handleRedeem(reward) {
    setMessage("");

    if (reward.points > points) {
      setMessage(
        `You need ${
          reward.points - points
        } more points to redeem this reward.`,
      );

      return;
    }

    setLoadingRewardId(reward.id);

    setTimeout(() => {
      setPoints((current) => current - reward.points);

      setMessage(
        `${reward.name} was successfully redeemed.`,
      );

      setLoadingRewardId(null);

      trackPrimaryAction();
    }, 800);
  }

  return (
    <section
      className="rewards-page"
      aria-labelledby="rewards-heading"
    >
      <header className="page-intro">
        <p className="page-eyebrow">Rewards</p>

        <h2 id="rewards-heading">
          Make the most of your points
        </h2>

        <p>
          Explore available rewards and redeem them using your
          frequent flyer points.
        </p>
      </header>

      <Card>
        <div className="points-summary">
          <div>
            <p className="summary-label">
              Available points
            </p>

            <p className="summary-value">
              {points.toLocaleString()}
            </p>
          </div>

          <span>Reward Points</span>
        </div>
      </Card>

      <Card>
        <div className="reward-filters">
          <Input
            id="reward-search"
            label="Search rewards"
            placeholder="Search by reward name"
            value={search}
            onChange={handleSearchChange}
            autoComplete="off"
          />

          <div className="form-field">
            <label htmlFor="reward-category">
              Category
            </label>

            <select
              id="reward-category"
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {message && (
        <div
          className="reward-message"
          role="status"
          aria-live="polite"
        >
          {message}
        </div>
      )}

      {filteredRewards.length === 0 ? (
        <EmptyState
          title="No rewards found"
          description="Try a different search term or category."
        />
      ) : (
        <div className="rewards-grid">
          {filteredRewards.map((reward) => (
            <RewardCard
              key={reward.id}
              reward={reward}
              canRedeem={reward.points <= points}
              loading={loadingRewardId === reward.id}
              onRedeem={handleRedeem}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Rewards;