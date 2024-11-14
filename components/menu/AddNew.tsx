import { useState } from "react";
import StepOne from "./add-new/StepOne";
import StepTwo from "./add-new/StepTwo";
import StepThree from "./add-new/StepThree";

type Props = React.FC<{
  closeModal: () => void;
}>;
export interface Item {
  sectionName: string;
  name: string;
  price: string;
  description: string;
}
const AddNew: Props = ({ closeModal }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [menuName, setMenuName] = useState("");
  const [menuDesc, setMenuDesc] = useState("");
  const [sectionNames, setSectionsName] = useState<string[]>([]);
  const [items, setItems] = useState<Item[]>([
    { sectionName: "", name: "", price: "", description: "" },
  ]);

  const handleNextClick = () => {
    if (currentStep === 2) {
      handleSubmit();
      return;
    }
    setCurrentStep((prevState) => (prevState < 2 ? prevState + 1 : 2));
  };

  const handleSubmit = async () => {
    try {
      // Group items by sectionName
      const groupedItems = sectionNames.map((sectionName) => ({
        sectionName,
        items: items.filter((item) => item.sectionName === sectionName),
      }));

      // Prepare the data
      const formattedData = {
        menuName,
        menuDesc,
        sections: groupedItems, // Each section now has its corresponding items
      };

      // Send formatted data to the API
      const response = await fetch("/api/menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        closeModal();
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black-800 bg-opacity-85">
      <div className="w-full max-w-md p-6 bg-[#1E1E1F] rounded-lg shadow-lg">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-[#F9FAFB] hover:text-gray-700"
        >
          &times;
        </button>
        <div className="w-full h-fit flex justify-between items-center mb-6 border-b border-[#414D5C] pb-3">
          <h2 className="text-2xl font-semibold text-center text-white text-opacity-85 tracking-wide font-oswald uppercase">
            {currentStep === 0 && "Create Menu"}
            {currentStep === 1 && "Create Section"}
            {currentStep === 2 && "Create Items"}
          </h2>
          <p className="text-white text-opacity-70 text-sm tracking-wide font-oswald uppercase">
            {`Step ${currentStep + 1}/3`}
          </p>
        </div>
        <form className="flex flex-col">
          {currentStep === 0 && (
            <StepOne setMenuName={setMenuName} setMenuDesc={setMenuDesc} />
          )}
          {currentStep === 1 && (
            <StepTwo
              setSectionNames={setSectionsName}
              sectionNames={sectionNames}
            />
          )}
          {currentStep === 2 && (
            <StepThree
              sectionNames={sectionNames}
              items={items}
              setItems={setItems}
            />
          )}
          <div>
            <button
              type="button"
              onClick={handleNextClick}
              className="w-full px-4 py-2 font-semibold text-white bg-brand rounded font-kelly tracking-wide"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNew;
