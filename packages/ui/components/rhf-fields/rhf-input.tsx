import { Field, FieldError, FieldLabel } from "../field";
import { Input } from "../input";
import { ComponentProps, FC, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface RHFInputProps extends ComponentProps<"input"> {
  name: string;
  label?: string;
  required?: boolean;
  disableErrorLabel?: boolean;
  icon?: ReactNode;
  description?: string;
  descriptionInLabel?: boolean;
  transformValue?: (value: string) => string;
}

const RHFInput: FC<RHFInputProps> = ({
  name,
  label,
  required,
  transformValue,
  ...props
}) => {
  const form = useFormContext();
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>
            {label} {required && <span>*</span>}
          </FieldLabel>
          <Input
            {...field}
            {...props}
            id={name}
            aria-invalid={fieldState.invalid}
            required={required}
            value={field.value ?? ""}
            onChange={(e) => {
              let value = e.target.value || "";

              if (transformValue && typeof value === "string") {
                value = transformValue(value);
              }

              if (props.type === "number") {
                const numValue = value ? Number(value) : "";
                if (value !== null && Number.isNaN(numValue as number)) {
                  field.onChange(value);
                } else {
                  field.onChange(numValue);
                }
              } else {
                field.onChange(value);
              }

              props.onChange?.(e);
            }}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};

export default RHFInput;
