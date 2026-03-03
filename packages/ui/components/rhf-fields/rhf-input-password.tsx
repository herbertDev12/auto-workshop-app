"use client";

import { Field, FieldError, FieldLabel } from "../field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { ComponentProps, FC, ReactNode, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export interface RHFInputProps extends ComponentProps<"input"> {
  name: string;
  label?: string;
  required?: boolean;
  disableErrorLabel?: boolean;
  icon?: ReactNode;
  description?: string;
  descriptionInLabel?: boolean;
}

const RHFInputPassword: FC<RHFInputProps> = ({
  name,
  label,
  required,
  ...props
}) => {
  const form = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Controller
        name={name}
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={name}>{label}</FieldLabel>
            <InputGroup>
              <InputGroupInput
                {...field}
                {...props}
                id={name}
                type={showPassword ? "text" : "password"}
                aria-invalid={fieldState.invalid}
                required={required}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  props.onChange?.(e);
                }}
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  variant="ghost"
                  size="icon-xs"
                  className="cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="size-4" />
                  ) : (
                    <EyeIcon className="size-4" />
                  )}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </>
  );
};

export default RHFInputPassword;
