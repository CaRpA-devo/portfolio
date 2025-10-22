/**
 * GridWrapper - Responsive Grid-Container für Skills
 * Features: 3 Spalten Mobile, 5 Spalten Desktop, responsive Padding
 */
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
