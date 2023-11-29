import { NextSeo } from "next-seo";
import { EventsForm } from "@/components/EventsForm";

export default function Events() {
  return (
    <>
      <NextSeo
        title="Events - Antonino's Pizza"
        canonical="https://www.antoninospizza.co.uk/events"
      />
      <div className="container-small">
        <h2 className="h2">Events</h2>
        <p>Let us know if you have any queries regarding a private event.</p>

        <EventsForm />
      </div>
    </>
  );
}
