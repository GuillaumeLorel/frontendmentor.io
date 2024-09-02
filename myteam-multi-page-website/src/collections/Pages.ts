import { Build } from "@/blocks/build/schema";
import { Presentation } from "@/blocks/presentation/schema";
import { Testimonials } from "@/blocks/testimonials/schema";
import { GetStarted } from "@/blocks/getstarted/schema";
import { Clients } from "@/blocks/clients/schema";
import { CollectionConfig } from "payload";
import { PresentationAbout } from "@/blocks/presentation-about/schema";
import { Team } from "@/blocks/team/schema";
import { Contact } from "@/blocks/contact/schema";

export const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      required: true,
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [
        Presentation,
        Build,
        Testimonials,
        GetStarted,
        Clients,
        PresentationAbout,
        Team,
        Contact,
      ],
      required: true,
    },
  ],
};
