import { Icon } from "@iconify/react";
import { useForm, ValidationError } from "@formspree/react";
import { FormInput } from "../atoms/forminput.comp";
import { Button } from "../atoms/button.comp";
export function FormMail() {
  const [state, handleSubmit] = useForm("mldpydok");
  if (state.succeeded) {
    return (
      <div className="flex items-center  justify-center">
        <p className="text-center flex gap-2 text-lime-100 mt-6 font-semibold">
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
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center max-w-md mx-auto gap-4 w-full  "
      >
        {/* 📧 E-Mail */}
        <FormInput
          type="email"
          placeholder="Deine E-Mail"
          title="Bitte gib eine gültige E-Mail ein"
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
          field="Betreff"
          errors={state.errors}
        />

        {/* 💬 Nachricht */}
        <label className="input validator input-primary h-32 flex flex-col relative">
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
            className=" text-lime-100 p-1 pl-6 w-full rounded text-lg "
          ></textarea>
        </label>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        {/* ✉️ Button */}
        <Button className="px-6 py-2" type="submit" disabled={state.submitting}>
          {state.submitting ? "Sendet ..." : "Senden"}
        </Button>
      </form>
    </>
  );
}
