/**
 * FormInput - Wiederverwendbare Input-Komponente für Formulare
 * Features: Icon-Support, Validierung, responsive Design
 */
export function FormInput({
  type = "text",
  placeholder,
  pattern,
  minLength,
  maxLength,
  title,
  icon,
  className = "",
  name,
  id,
  ariaLabel,
  ...rest
}) {
  return (
    <>
      <label
        className="input validator input-primary flex items-center gap-2"
        htmlFor={id || name}
      >
        {/* Optionales Icon */}
        {icon && <span className="text-gray-400">{icon}</span>}
        <input
          type={type}
          required
          placeholder={placeholder}
          pattern={pattern}
          minLength={minLength}
          maxLength={maxLength}
          title={title}
          className={`flex-1 text-lg ${className}`}
          name={name}
          id={id || name}
          aria-label={ariaLabel}
          {...rest}
        />
      </label>
    </>
  );
}
