import { Block } from "payload";

export const GetStarted: Block = {
  slug: "getstarted",
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
                  name: "button",
                  label: "Button",
                  type: "array",
                  admin: {
                    width: "50%",
                  },
                  maxRows: 1,
                  fields: [
                    {
                      type: "text",
                      name: "text",
                      label: "Text",
                      required: true,
                    },
                    {
                      type: "text",
                      name: "link",
                      label: "Link",
                      required: true,
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
