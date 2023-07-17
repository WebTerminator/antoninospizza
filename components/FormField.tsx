import { useForm } from "react-hook-form";

interface FormFieldProps {
  name: string;
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "date" | "time";
  size?: "small" | "medium";
  register: any;
}

export const FormField = (props: FormFieldProps) => {
  const { name, id, label, type = "text", size = "medium", register } = props;

  const className = `form-field ${size === "small" ? "flex-1" : "flex-3"}`;

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        required
        type={type}
        {...register(name, {
          required: true,
        })}
      />
    </div>
  );
};
