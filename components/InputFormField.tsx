interface FormFieldProps {
  name: string;
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "date" | "time" | "textarea";
  size?: "small" | "medium";
  register: any;
}

export const InputFormField = (props: FormFieldProps) => {
  const { name, id, label, type = "text", register } = props;
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
      {type === "textarea" ? (
        <textarea {...inputProps} rows="5" columns="33" />
      ) : (
        <input {...inputProps} type={type} />
      )}
    </div>
  );
};
