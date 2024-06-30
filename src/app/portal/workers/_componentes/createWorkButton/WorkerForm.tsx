import { FormInputProps } from "@/app/types/components";
import { cn } from "@/lib/utils";
import React from "react";
import { FormSubmit } from "@/components/form/FormSubmitButton";
import FormInput from "@/components/form/FormInput";

const formInputFields: FormInputProps[] = [
  {
    label: "Name",
    id: "name",
    type: "text",
    className: "rounded-xl",
    required: true,
  },
  {
    label: "Phone",
    id: "phone",
    type: "tel",
    className: "rounded-xl",
    required: true,
  },
  {
    label: "Email",
    id: "email",
    type: "email",
    className: "rounded-xl",
    required: true,
  },
  {
    label: "Password",
    id: "password",
    type: "password",
    className: "rounded-xl",
    required: true,
  },
];

const WorkForm = ({ className }: React.ComponentProps<"form">) => {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      {formInputFields.map((field) => (
        <FormInput key={field.id} {...field} />
      ))}
      <FormSubmit className="mt-4">Save</FormSubmit>
    </form>
  );
};

export default WorkForm;
