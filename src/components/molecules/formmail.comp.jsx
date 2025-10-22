import { Icon } from "@iconify/react";
import { FormInput } from "../atoms/forminput.comp";
import { Button } from "../atoms/button.comp";

FormInput;
export function FormMail() {
  return (
    <>
      <form
        action="https://formspree.io/f/deinFormId"
        method="POST"
        className="flex flex-col items-center justify-center max-w-md mx-auto gap-4 w-full  "
      >
        <FormInput
          type="email"
          placeholder="Deine E-Mail"
          title="Bitte gib eine gültige E-Mail ein"
          icon={
            <Icon
              icon="material-symbols-light:mark-email-read-outline-rounded"
              width="12"
              height="12"
            />
          }
        />

        <FormInput
          placeholder="Betreff"
          title="Betreff deiner Nachricht"
          icon={
            <Icon
              icon="material-symbols-light:subject"
              width="12"
              height="12"
            />
          }
        />

        <label className="input validator input-primary h-32 flex flex-col relative">
          {/* Icon über oder neben der Textarea */}
          <Icon
            icon="material-symbols-light:text-ad-outline-sharp"
            width="12"
            height="12"
            className="absolute top-2 left-4 "
          />
          <textarea
            name="message"
            placeholder="Deine Nachricht ..."
            rows="20"
            required
            className=" text-lime-100 p-1 pl-6 w-full rounded "
          ></textarea>
        </label>

        <Button className="px-6 py-2" type="submit">
          Senden
        </Button>
      </form>
    </>
  );
}
