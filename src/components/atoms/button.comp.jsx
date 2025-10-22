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
        className={`  bg-primary  text-lime-100  rounded-2xl md:text-3xl text-xl font-semibold md:px-8  px-6 py-2 cursor-pointer z-10 transition-all  transform hover:scale-105 hover:shadow-xl hover:bg-cyan-800  ${className}`}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
