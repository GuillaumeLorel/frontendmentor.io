import { Block } from "payload";

export const Presentation: Block = {
  slug: "presentation",
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
        },
        {
          label: "Shapes",
          fields: [
            {
              name: "leftShape",
              label: "Left Shape",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "bottomShape",
              label: "Bottom Shape",
              type: "upload",
              relationTo: "media",
            },
          ],
        },
      ],
    },
  ],
};
