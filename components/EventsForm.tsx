import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { InputFormField } from "./InputFormField";
import { SelectFormField } from "./SelectFormField";
import { type FormValues } from "@/shared/";

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
        <div className="flex-1">
          <InputFormField
            register={register}
            label="First Name"
            name="firstName"
            id="firstName"
          />
        </div>

        <div className="flex-1">
          <InputFormField
            register={register}
            label="Last Name"
            name="lastName"
            id="lastName"
          />
        </div>
      </div>

      <div className="flex-row">
        <div className="flex-1">
          <InputFormField
            register={register}
            label="Company"
            name="company"
            id="company"
          />
        </div>
        <div className="flex-1">
          <InputFormField
            register={register}
            label="Email"
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div className="flex-1">
          <InputFormField
            register={register}
            label="Phone"
            name="phone"
            id="phone"
            type="tel"
          />
        </div>
      </div>

      <div className="flex-row">
        <div className="flex-3">
          <InputFormField
            register={register}
            label="Postcode"
            name="postcode"
            id="postcode"
          />
        </div>

        <div className="flex-3">
          <SelectFormField
            register={register}
            label="Event type"
            name="eventType"
            id="eventType"
            options={[
              { label: "wedding", value: "wedding" },
              { label: "birthday", value: "birthday" },
              { label: "corporate", value: "corporate" },
              { label: "other", value: "other" },
            ]}
          />
        </div>

        <div className="flex-1">
          <InputFormField
            register={register}
            label="Number of guests"
            name="guests"
            id="guests"
            type="number"
            size="small"
          />
        </div>
      </div>

      <div className="flex-row">
        <div className="flex-1">
          <InputFormField
            register={register}
            label="Date of event"
            name="eventDate"
            id="eventDate"
            type="date"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div className="flex-1">
          <InputFormField
            register={register}
            label="Serving time"
            name="servingTime"
            id="servingTime"
            type="time"
          />
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-1">
          <InputFormField
            register={register}
            label="Additional information"
            name="additionalInfo"
            id="additionalInfo"
            type="textarea"
          />
        </div>
      </div>

      <button className="button" type="submit" value="Submit">
        Send
      </button>
      <ToastContainer position="bottom-center" />
    </form>
  );
};
