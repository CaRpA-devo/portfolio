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
          className={`flex-1 ${className}`}
        />
        {/* Custom Tooltip */}
        <span className="absolute left-0 -top-6 bg-primary text-white text-sm px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity">
          {title}
        </span>
      </label>
    </>
  );
}
