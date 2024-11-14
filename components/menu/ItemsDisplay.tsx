import React from "react";
import { MenuItem } from "./Menu";

type ItemsDisplayProps = React.FC<{
  items?: MenuItem["sections"][0]["items"];
}>;

const ItemsDisplay: ItemsDisplayProps = ({ items }) => {
  // Helper function to split array into chunks of two
  const chunkItems = (
    array: MenuItem["sections"][0]["items"],
    size: number
  ) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Group items into chunks of two
  const itemChunks = chunkItems(items || [], 2);

  return (
    <div className="mb-12 flex flex-col gap-12">
      {itemChunks.map((chunk, index) => (
        <div
          key={index}
          className={`flex flex-wrap gap-4 flex-col md:flex-row ${
            chunk.length === 1 ? "lg:w-1/2" : "w-full"
          }`}
        >
          {chunk.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex-1 lg:w-1/2 flex justify-between items-start gap-4"
            >
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2 pr-8">
                  <h3 className="text-xl tracking-wide text-white font-oswald font-normal uppercase">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-white">{`$${item.price}`}</span>
                </div>
                <p className="text-muted-foreground font-light text-white text-opacity-75 font-kelly">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemsDisplay;
