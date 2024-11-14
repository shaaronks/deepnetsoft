"use client";

import { useState, ChangeEvent } from "react";
import { Item } from "../AddNew";

type StepThreeProps = {
  sectionNames: string[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  items: Item[];
};

const StepThree: React.FC<StepThreeProps> = ({
  sectionNames,
  setItems,
  items,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Filter sectionNames based on the active item's input value
  const filteredSectionNames =
    inputValue && activeIndex !== null
      ? sectionNames.filter((name) =>
          name.toLowerCase().includes(inputValue.toLowerCase())
        )
      : [];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    setInputValue(value);
    setActiveIndex(index);
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, sectionName: value } : item
      )
    );
  };

  const handleSelectSuggestion = (sectionName: string, index: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, sectionName } : item
      )
    );
    setInputValue(""); // Clear the input field for filtering
    setActiveIndex(null); // Close suggestions
  };

  const handleAddItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { name: "", price: "", description: "", sectionName: "" },
    ]);
  };

  const handleItemChange = (
    index: number,
    field: keyof Item,
    value: string
  ) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="pb-6 flex flex-col gap-4 max-h-96 overflow-y-auto hide-scrollbar px-0.5">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 border-b border-[#414D5C] pb-3"
        >
          {/* Item's Section Name */}
          <div className="flex flex-col gap-1.5 relative">
            <label className="block text-sm font-medium text-white text-opacity-75 font-kelly tracking-wider">
              Item's Section Name
            </label>
            <div className="w-full h-fit relative">
              <input
                type="text"
                value={item.sectionName}
                required
                onChange={(e) => handleInputChange(e, index)}
                onFocus={() => setActiveIndex(index)} // Set focus index
                onBlur={() => setTimeout(() => setActiveIndex(null), 150)} // Delay to allow click on suggestion
                className="w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-brand bg-[#292B2E] outline-none text-white text-opacity-90"
              />
              {filteredSectionNames.length > 0 && activeIndex === index && (
                <ul className="w-full max-h-60 overflow-y-auto mt-2 bg-[#292B2E] rounded-md shadow-lg absolute left-0 top-11 z-10">
                  {filteredSectionNames.map((name, i) => (
                    <li
                      key={i}
                      onMouseDown={() => handleSelectSuggestion(name, index)} // Use onMouseDown to ensure click registers
                      className="px-3 py-2 text-white hover:bg-[#373D45] cursor-pointer"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              )}
              {inputValue &&
                !filteredSectionNames.length &&
                activeIndex === index && (
                  <div className="w-full h-12 bg-[#292B2E] rounded-md shadow-lg absolute left-0 top-12 z-10 flex items-center justify-center">
                    <p className="text-white text-opacity-80">
                      No Matching Sections
                    </p>
                  </div>
                )}
            </div>
          </div>

          {/* Item Name */}
          <div className="flex flex-col gap-1.5">
            <label className="block text-sm font-medium text-white text-opacity-75 font-kelly tracking-wider">
              Item Name
            </label>
            <input
              type="text"
              required
              value={item.name}
              onChange={(e) => handleItemChange(index, "name", e.target.value)}
              className="w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#292B2E] outline-none text-white text-opacity-90"
            />
          </div>
          {/* Item Price */}
          <div className="flex flex-col gap-1.5">
            <label className="block text-sm font-medium text-white text-opacity-75 font-kelly tracking-wider">
              Item Price
            </label>
            <input
              type="text"
              value={item.price}
              required
              onChange={(e) => handleItemChange(index, "price", e.target.value)}
              className="w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#292B2E] outline-none text-white text-opacity-90"
            />
          </div>

          {/* Item Description */}
          <div className="flex flex-col gap-1.5">
            <label className="block text-sm font-medium text-white text-opacity-75 font-kelly tracking-wider">
              Item Description
            </label>
            <input
              type="text"
              value={item.description}
              onChange={(e) =>
                handleItemChange(index, "description", e.target.value)
              }
              className="w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#292B2E] outline-none text-white text-opacity-90"
            />
          </div>
        </div>
      ))}

      {/* Button to add new section */}
      <div
        onClick={handleAddItem}
        className="w-full h-fit py-4 border rounded-lg border-white hover:border-brand hover:text-brand border-opacity-40 border-dashed text-white text-opacity-40 cursor-pointer flex justify-center items-center"
      >
        Add New Item
      </div>
    </div>
  );
};

export default StepThree;
