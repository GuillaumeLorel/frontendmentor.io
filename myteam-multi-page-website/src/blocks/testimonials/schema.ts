import { Block } from "payload";

export const Testimonials: Block = {
  slug: "testimonials",
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
              name: "testimonials",
              label: "Testimonials",
              type: "array",
              fields: [
                {
                  name: "quote",
                  label: "Quote",
                  type: "textarea",
                  required: true,
                },
                {
                  name: "name",
                  label: "Name",
                  type: "text",
                  required: true,
                },
                {
                  name: "position",
                  label: "Position",
                  type: "text",
                  required: true,
                },

                {
                  name: "image",
                  label: "Image",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
              ],
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
