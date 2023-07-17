import { useForm, SubmitHandler } from "react-hook-form";
import { FormField } from "./FormField";
import { type FormValues } from "@/shared/";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const EventsForm = () => {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const submitData = async () => {
      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (res.status === 200) {
          toast.success("Your message has been sent!");
          reset();
        }
      } catch (err) {
        toast.error("Something went wrong. Please try again later.");
      }
    };

    submitData();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <FormField
          register={register}
          label="First Name"
          name="firstName"
          id="firstName"
        />

        <FormField
          register={register}
          label="Last Name"
          name="lastName"
          id="lastName"
        />
      </div>

      <div className="flex-row">
        <FormField
          register={register}
          label="Company"
          name="company"
          id="company"
        />

        <FormField
          register={register}
          label="Email"
          name="email"
          id="email"
          type="email"
        />

        <FormField
          register={register}
          label="Phone"
          name="phone"
          id="phone"
          type="tel"
        />
      </div>

      <div className="flex-row">
        <FormField
          register={register}
          label="Postcode"
          name="postcode"
          id="postcode"
        />

        <div className="form-field flex-3">
          <label htmlFor="message">Event type</label>
          <select
            required
            {...register("eventType", {
              required: true,
            })}
          >
            <option value="">Select...</option>
            <option value="wedding">wedding</option>
            <option value="birthday">birthday</option>
            <option value="corporate">corporate</option>
          </select>
        </div>

        <FormField
          register={register}
          label="Number of guests"
          name="guests"
          id="guests"
          type="number"
          size="small"
        />
      </div>

      <div className="flex-row">
        <FormField
          register={register}
          label="Date of event"
          name="eventDate"
          id="eventDate"
          type="date"
        />

        <FormField
          register={register}
          label="Serving time"
          name="servingTime"
          id="servingTime"
          type="time"
        />
      </div>

      <button className="button" type="submit" value="Submit">
        Send
      </button>
      <ToastContainer position="bottom-center" />
    </form>
  );
};
