"use client";
import PresentationBlockServer from "@/blocks/presentation/Server";
import BuildBlockServer from "@/blocks/build/Server";
import TestimonialsBlockServer from "@/blocks/testimonials/Server";
import ClientsBlockServer from "@/blocks/clients/Server";
import PresentationAboutBlockServer from "@/blocks/presentation-about/Server";
import TeamBlockServer from "@/blocks/team/Server";
import GetStartedBlockServer from "@/blocks/getstarted/Server";
import ContactBlockServer from "@/blocks/contact/Server";
import { Page } from "@/payload-types";

import React, { Fragment } from "react";

const blocksComponents = {
  presentation: PresentationBlockServer,
  build: BuildBlockServer,
  testimonials: TestimonialsBlockServer,
  getstarted: GetStartedBlockServer,
  clients: ClientsBlockServer,
  "presentation-about": PresentationAboutBlockServer,
  team: TeamBlockServer,
  contact: ContactBlockServer,
};

export const RenderBlocks: React.FC<{
  blocks: Page["layout"][0][];
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block;

          if (blockType && blockType in blocksComponents) {
            const Block = blocksComponents[blockType];

            if (Block) {
              return <Block key={index} id={blockName} {...block} />;
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};
