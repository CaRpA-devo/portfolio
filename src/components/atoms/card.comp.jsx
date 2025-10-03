export function SkillCards({ title, description, imageSrc }) {
  return (
    <>
      <div className=" rounded-lg shadow p-4 flex flex-col items-center text-center hover:scale-105 transition-transform">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-40 object-cover rounded mb-4"
          />
        )}
        <h3 className="text-xl font-bold text-cyan-600 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </>
  );
}
