export const sendEamil = async <T>(data: T) =>
  await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_SENDGRID_API_KEY,
    },
    body: JSON.stringify(data),
  });
