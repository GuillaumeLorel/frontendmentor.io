import { Block } from "payload";

export const PresentationAbout: Block = {
  slug: "presentation-about",
  fields: [
    {
      name: "title",
      label: "Title",
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
