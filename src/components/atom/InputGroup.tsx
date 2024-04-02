import clsx from "clsx";
import * as React from "react";
import { Input } from "../ui/input";

interface InputGroupType {
  label: string;
  placeholder?: string;
  error?: string;
  type: "text" | "password";
  variant?: "light" | "dark";
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupType>(
  ({ label, placeholder, error, type, variant = "light", ...props }, ref) => {
    return (
      <div>
        <p
          className={clsx("text-2xl ", {
            "text-white": variant === "light",
            "text-[#898B9F]": variant === "dark",
          })}>
          {label}
        </p>
        <Input
          ref={ref}
          {...props}
          style={{
            borderRadius: "1% 1% 1% 1% / 22% 22% 22% 22%",
          }}
          type={type}
          className="bg-[#FEC4BF] h-[50px] text-2xl border-none text-[#5D476C] px-5 !placeholder-[#ae95bd]"
          placeholder={placeholder}
        />
        {error && <p className="text-red-300 text-lg">{error}</p>}
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
