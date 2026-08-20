import { LoaderCircle } from "lucide-react";

function Button({
  children,
  loading = false,
  disabled = false,
  type = "button",
  ...props
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <LoaderCircle
          size={18}
          aria-hidden="true"
          className="button-spinner"
        />
      )}

      <span>{loading ? "Processing..." : children}</span>
    </button>
  );
}

export default Button;