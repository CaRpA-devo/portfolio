import { FormMail } from "../molecules/formmail.comp";

export function Kontakt() {
  return (
    <section
      id="kontakt"
      className="pt-16 pb-16 text-center items-center justify-center  bg-base-100 flex flex-col gap-8"
    >
      <h2 className="text-6xl font-bold text-cyan-600">Kontakt</h2>
      <FormMail />
    </section>
  );
}
