import { Block } from "payload";

export const Team: Block = {
  slug: "team",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "members",
      label: "Members",
      type: "array",
      fields: [
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "name",
          label: "Name",
          type: "text",
        },
        {
          name: "role",
          label: "Role",
          type: "text",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
        {
          name: "socials",
          label: "Socials",
          type: "array",
          fields: [
            {
              name: "icon",
              label: "Icon",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "url",
              label: "URL",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};
