function Input({
  id,
  label,
  error,
  required = false,
  ...props
}) {
  const errorId = `${id}-error`;

  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        required={required}
        {...props}
      />

      {error && (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;