import { Block } from "payload";

export const Clients: Block = {
  slug: "clients",
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
          name: "logos",
          label: "Logos",
          type: "array",
          admin: {
            width: "50%",
          },
          minRows: 1,
          fields: [
            {
              name: "logo",
              label: "Logo",
              type: "upload",
              relationTo: "media",
            },
          ],
        },
      ],
    },
  ],
};
