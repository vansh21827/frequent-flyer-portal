function EmptyState({
  title = "No data found",
  description = "There is nothing to display here yet.",
}) {
  return (
    <div className="empty-state" role="status">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default EmptyState;