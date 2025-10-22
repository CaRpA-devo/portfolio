export function GridWrapper({ children }) {
  return (
    <div
      className="grid
                    grid-cols-3
                    sm:grid-cols-5
                    md:grid-cols-5
                   
                    gap-4 
                    p-8
                    md:px-32
                    px-0"
    >
      {children}
    </div>
  );
}
