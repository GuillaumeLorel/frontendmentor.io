import { Block } from "payload"

export const Build: Block = {
  slug: "build",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "title",
                  label: "Title",
                  type: "text",
                  required: true,
                  admin: {
                    width: "50%",
                  },
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
                    {
                      name: "elementText",
                      label: "Text",
                      type: "textarea",
                    },
                  ],
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
          ],
        },
      ],
    },
  ],
};
