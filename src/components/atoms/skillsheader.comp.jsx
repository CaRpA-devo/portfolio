export function SkillsHeader({
  title,
  emoji,
  className,
  emojiSize = "text-4xl",
}) {
  return (
    <>
      <div
        className={`flex text-center  justify-center  text-6xl font-bold text-cyan-600 ${className} border-b border-purple-500/50 `}
      >
        <h2>
          {title} <span className={emojiSize}>{emoji}</span>
        </h2>
      </div>
    </>
  );
}
