import { Block } from "payload";

export const PresentationAbout: Block = {
  slug: "presentation-about",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
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
        },
        {
          label: "Shapes",
          fields: [
            {
              name: "rightShape",
              label: "Right Shape",
              type: "upload",
              relationTo: "media",
            },
          ],
        },
      ],
    },
  ],
};
