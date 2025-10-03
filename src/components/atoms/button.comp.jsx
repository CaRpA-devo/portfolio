export function Button({ children, scrollToId, className = "", ...props }) {
  const handleClick = () => {
    if (scrollToId) {
      const section = document.getElementById(scrollToId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* TODO villeicht farbe tauschen */}
      <button
        onClick={handleClick}
        className={`  bg-secondary  text-lime-100  rounded-2xl text-3xl font-semibold px-8 py-4  cursor-pointer z-10 transition-all  transform hover:scale-105 hover:shadow-xl hover:bg-primary  ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
