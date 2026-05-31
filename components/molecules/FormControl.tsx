import { ReactNode } from "react";
import { Input } from "../atoms/input";
import { Label } from "../atoms/label";

interface FormControlProps {
  children?: ReactNode;
  label: string;
}

export const FormControl = ({ children, label }: FormControlProps) => {
  return (
    <div className="w-full space-y-3">
      <Label>{label}</Label>
      {children}
    </div>
  );
};
