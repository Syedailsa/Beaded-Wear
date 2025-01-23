export default {
    name: "contactForm",
    title: "Contact Form",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "message",
        title: "Message",
        type: "text",
      },
      {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
    ],
  };
  