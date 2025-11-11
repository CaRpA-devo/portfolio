import { Icon } from "@iconify/react";
import { useForm, ValidationError } from "@formspree/react";
import { FormInput } from "../atoms/forminput.comp";
import { Button } from "../atoms/button.comp";
import { useState } from "react";

/**
 * FormMail - Kontaktformular mit Formspree-Integration
 * Features: E-Mail, Betreff, Nachricht, Validierung, Success-State, Datenschutz-Checkbox
 */
export function FormMail() {
  const [state, handleSubmit] = useForm("mldpydok");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [showPrivacyError, setShowPrivacyError] = useState(false);

  const handleFormSubmit = (e) => {
    if (!privacyAccepted) {
      e.preventDefault();
      setShowPrivacyError(true);
      return;
    }
    setShowPrivacyError(false);
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div className="flex items-center  justify-center">
        <p
          className="text-center flex gap-2 text-lime-100 mt-6 font-semibold"
          role="status"
          aria-live="polite"
        >
          <Icon
            icon="material-symbols:check-box-outline"
            width="24"
            height="24"
            className="text-cyan-500"
          />
          Nachricht erfolgreich gesendet! Ich melde mich bald bei dir.
        </p>
      </div>
    );
  }
  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center justify-center max-w-md mx-auto gap-4 w-full  "
        aria-live="polite"
      >
        {/* 📧 E-Mail */}
        <FormInput
          type="email"
          placeholder="Deine E-Mail"
          title="Bitte gib eine gültige E-Mail ein"
          name="email"
          id="contact-email"
          ariaLabel="E-Mail Adresse"
          autoComplete="email"
          icon={
            <Icon
              icon="material-symbols-light:mark-email-read-outline-rounded"
              width="12"
              height="12"
              className="text-cyan-500"
            />
          }
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* 📝 Betreff */}
        <FormInput
          placeholder="Betreff"
          title="Betreff deiner Nachricht"
          className="text-lg"
          name="subject"
          id="contact-subject"
          ariaLabel="Betreff deiner Nachricht"
          autoComplete="off"
          icon={
            <Icon
              icon="material-symbols-light:subject"
              width="12"
              height="12"
              className="text-cyan-500 "
            />
          }
        />
        <ValidationError
          prefix="Betreff"
          field="subject"
          errors={state.errors}
        />

        {/* 💬 Nachricht */}
        <label
          className="input validator input-primary h-32 flex flex-col relative"
          htmlFor="contact-message"
        >
          {/* Icon über oder neben der Textarea */}
          <Icon
            icon="material-symbols-light:text-ad-outline-sharp"
            width="12"
            height="12"
            className="absolute top-3 left-3 text-cyan-500"
          />
          <textarea
            name="message"
            placeholder="Deine Nachricht ..."
            rows="20"
            required
            id="contact-message"
            className=" text-lime-100 p-1 pl-6 w-full border-none outline-none rounded text-lg "
            aria-label="Nachrichtentext"
          ></textarea>
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        {/* 🔒 Datenschutz-Checkbox */}
        <div className="flex items-start gap-3 ">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            checked={privacyAccepted}
            onChange={(e) => {
              setPrivacyAccepted(e.target.checked);
              if (e.target.checked && showPrivacyError) {
                setShowPrivacyError(false);
              }
            }}
            required
            className="mt-1 w-5 h-5 text-cyan-700 bg-gray-800 border-gray-600 rounded"
            aria-describedby="privacy-hint"
            aria-invalid={showPrivacyError}
          />
          <label
            htmlFor="privacy"
            className="text-sm text-lime-100 leading-relaxed w-2xs"
            id="privacy-hint"
          >
            Ich stimme zu, dass meine Daten vertraulich behandelt werden und nur
            zur Beantwortung meiner Anfrage verwendet werden.
            <span className="text-cyan-600 font-semibold">*</span>
          </label>
        </div>

        {/* Fehlermeldung für Datenschutz-Checkbox */}
        {showPrivacyError && (
          <div
            className="flex items-center gap-2 text-red-400 text-sm"
            role="alert"
          >
            <Icon
              icon="material-symbols:error-outline"
              width="16"
              height="16"
              className="text-red-400"
            />
            Bitte akzeptiere die Datenschutzbestimmungen, um das Formular zu
            senden.
          </div>
        )}

        {/* ✉️ Button */}
        <Button className="px-6 py-2" type="submit" disabled={state.submitting}>
          {state.submitting ? "Sendet ..." : "Senden"}
        </Button>
      </form>
    </>
  );
}
