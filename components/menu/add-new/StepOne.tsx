type StepOneProps = React.FC<{
  setMenuName: React.Dispatch<React.SetStateAction<string>>;
  setMenuDesc: React.Dispatch<React.SetStateAction<string>>;
}>;
const StepOne: StepOneProps = ({ setMenuName, setMenuDesc }) => {
  return (
    <div className=" pb-6 flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="block text-sm font-medium text-white text-opacity-75 font-kelly tracking-wider">
          Menu Name
        </label>
        <input
          type="text"
          onChange={(e) => setMenuName(e.target.value)}
          required
          className="w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-brand bg-[#292B2E] outline-none text-white text-opacity-90"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="block text-sm font-medium text-white text-opacity-75 font-kelly tracking-wider">
          Menu Description
        </label>
        <input
          type="text"
          onChange={(e) => setMenuDesc(e.target.value)}
          required
          className="w-full px-3 py-2 mt-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#292B2E] outline-none text-white text-opacity-90"
        />
      </div>
    </div>
  );
};
export default StepOne;
