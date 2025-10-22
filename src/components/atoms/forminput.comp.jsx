export function FormInput({
  type = "text",
  placeholder,
  pattern,
  minLength,
  maxLength,
  title,
  icon,
  className,
}) {
  return (
    <>
      <label className="input validator input-primary flex items-center gap-2">
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
        />
      </label>
    </>
  );
}
