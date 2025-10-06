export function GridWrapper({ children }) {
  return (
    <div
      className="grid
                    grid-cols-2 
                    sm:grid-cols-3
                    md:grid-cols-4
                   
                    gap-4 
                    p-8
                    md:px-32
                    px-0"
    >
      {children}
    </div>
  );
}
