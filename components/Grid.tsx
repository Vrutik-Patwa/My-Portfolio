import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="#about">
      <BentoGrid>
        {[
          { title: "t-1", description: "Desc-1", id: 1 },
          { title: "t-2", description: "Desc-2", id: 2 },
          { title: "t-3", description: "Desc-3", id: 3 },
          { title: "t-4", description: "Desc-4", id: 4 },
        ].map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
