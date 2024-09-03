import { Block } from "payload";

export const Presentation: Block = {
  slug: "presentation",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "text",
      required: true,
    },
    {
      name: "text",
      label: "Description",
      type: "textarea",
      required: true,
    },
  ],
};
