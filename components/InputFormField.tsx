interface FormFieldProps {
  name: string;
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "date" | "time" | "textarea";
  size?: "small" | "medium";
  min?: string;
  register: any;
}

export const InputFormField = (props: FormFieldProps) => {
  const { name, id, label, min, type = "text", register } = props;
  const inputProps = {
    id,
    required: true,
    ...register(name, {
      required: true,
    }),
  };

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" && (
        <textarea {...inputProps} rows="5" columns="33" />
      )}
      {type === "date" && <input {...inputProps} type={type} min={min} />}
      {type !== "textarea" && type !== "date" && (
        <input {...inputProps} type={type} />
      )}
    </div>
  );
};
