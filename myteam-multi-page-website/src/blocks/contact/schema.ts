import { Block } from "payload";

export const Contact: Block = {
  slug: "contact",
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
              name: "elements",
              label: "Elements",
              type: "array",
              admin: {
                width: "50%",
              },
              fields: [
                {
                  name: "image",
                  label: "Image",
                  type: "upload",
                  relationTo: "media",
                },
                {
                  name: "elementTitle",
                  label: "Title",
                  type: "text",
                },
              ],
            },
            {
              name: "form",
              type: "relationship",
              relationTo: "forms",
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
