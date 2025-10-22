/**
 * ProjectsHeader - Header für die Projekte-Sektion
 * Features: Titel, Beschreibung, responsive Design
 */
export function ProjectsHeader() {
  return (
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold text-cyan-600 mb-4">Meine Projekte</h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Hier sind einige meiner neuesten Projekte, die ich mit modernen
        Technologien entwickelt habe.
      </p>
    </div>
  );
}
