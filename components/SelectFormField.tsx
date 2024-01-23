interface SelectFormFieldProps {
  name: string;
  id: string;
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  register: any;
}

export const SelectFormField = (props: SelectFormFieldProps) => {
  const { id, name, label, options, register } = props;

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <select
        name={name}
        required
        {...register(props.name, {
          required: true,
        })}
      >
        <option value="">Select...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
