import { FormMail } from "../molecules/formmail.comp";

/**
 * Kontakt - Kontaktsektion mit Formular
 * Features: FormMail-Komponente, responsive Design, Scroll-Target
 */
export function Kontakt() {
  return (
    <section
      id="kontakt"
      className="pt-16 pb-16 text-center items-center justify-center  bg-[#01061a] flex flex-col gap-8"
    >
      <h2 className="text-6xl font-bold text-cyan-600">Kontakt</h2>
      <FormMail />
    </section>
  );
}
