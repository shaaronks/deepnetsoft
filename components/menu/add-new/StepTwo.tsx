"use client";

import { useState } from "react";

type StepTwoProps = React.FC<{
  sectionNames: string[];
  setSectionNames: React.Dispatch<React.SetStateAction<string[]>>;
}>;

const StepTwo: StepTwoProps = ({ sectionNames, setSectionNames }) => {
  const [sectionsCount, setSectionCount] = useState(1);

  const handleAddSection = () => {
    setSectionCount((prevCount) => prevCount + 1);
    setSectionNames((prevNames) => [...prevNames, ""]);
  };

  const handleSectionNameChange = (index: number, value: string) => {
    setSectionNames((prevNames) => {
      const newNames = [...prevNames];
      newNames[index] = value;
      return newNames;
    });
  };

  return (
    <div className="pb-6 flex flex-col gap-4 max-h-96 overflow-y-auto hide-scrollbar px-0.5">
      {[...Array(sectionsCount)].map((_, index) => (
        <div key={index} className="flex flex-col gap-1.5">
          <label className="block text-sm font-medium text-white text-opacity-75 font-kelly tracking-wider">
            Section Name {index + 1}
          </label>
          <input
            type="text"
            value={sectionNames[index] || ""}
            required
            onChange={(e) => handleSectionNameChange(index, e.target.value)}
            className="w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-brand bg-[#292B2E] outline-none text-white text-opacity-90"
          />
        </div>
      ))}
      <div
        onClick={handleAddSection}
        className="w-full h-fit py-4 border rounded-lg border-white border-opacity-40 border-dashed text-white text-opacity-40 cursor-pointer flex justify-center items-center"
      >
        Add New Section
      </div>
    </div>
  );
};

export default StepTwo;
