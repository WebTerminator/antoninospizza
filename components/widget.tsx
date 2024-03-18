export const Widget = ({ source }: { source: "instagram" | "google" }) => {
    if (source === "instagram") {
      return (
        <div
          style={{
            padding: "40px 0",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Instagram</h3>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></script>
          <div
            className="elfsight-app-dbb49ae4-68fb-4d41-ac9a-221236305e49"
            data-elfsight-app-lazy
          ></div>
        </div>
      );
    }
  
    if (source === "google") {
      return (
        <>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></script>
          <div
            className="elfsight-app-6f776abc-07bc-49f1-a042-c9bccd53b8da"
            data-elfsight-app-lazy
          ></div>
        </>
      );
    }
  
    return null;
  };
  