"use client";
import useViewportWidth from "@/hooks/useViewportWidth";
import { useEffect, useState } from "react";
import MenuData from "./MenuData";
import AddNew from "./AddNew";

export interface MenuItem {
  _id: string;
  menuName: string;
  menuDesc: string;
  sections: {
    sectionName: string;
    items: { name: string; price: string; description: string }[];
  }[];
}

const Menu = () => {
  const [active, setActive] = useState("");
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [fetchNow, setFetchNow] = useState(true);
  const width = useViewportWidth();
  const handleCloseModel = () => {
    setFetchNow(true);
  };

  // Fetch menus from the API when the component is mounted
  useEffect(() => {
    if (!fetchNow) return;
    const fetchMenus = async () => {
      try {
        const response = await fetch("/api/menu");
        const result = await response.json();
        if (response.ok) {
          setMenus(result.data); // Assuming the result has a 'data' key containing the menus
          setActive(result.data?.[0]?.menuName);
        } else {
          console.error("Error fetching menus:", result.message);
        }
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
      setFetchNow(false);
    };

    fetchMenus();
  }, [fetchNow]);

  return (
    <div className="w-full h-fit flex flex-col">
      <div
        className="w-full h-20 flex justify-center items-center gap-4 overflow-x-scroll hide-scrollbar"
        style={{
          backgroundImage:
            width < 1024 ? "url('/menu-bg.png')" : "url('/menu-bg-big.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {menus.map(({ menuName }, index) => (
          <div
            key={menuName + index}
            onClick={() => setActive(menuName)}
            className={`w-fit px-6 py-2 ${
              active === menuName ? "bg-brand" : "border-2 border-brand"
            } uppercase text-white font-oswald hover:opacity-90 transition-opacity cursor-pointer`}
          >
            <p
              className={`${
                active === menuName
                  ? ""
                  : "drop-shadow-[2.5px_2.5px_0px_#800020]"
              }`}
            >
              {menuName}
            </p>
          </div>
        ))}
        <div
          onClick={() => setActive("addNew")}
          className={`w-fit min-w-fit px-6 py-2 ${
            active === "addNew" ? "bg-brand" : "border-2 border-brand"
          } uppercase text-white font-oswald hover:opacity-90 transition-opacity cursor-pointer`}
        >
          <p
            className={`${
              active === "addNew" ? "" : "drop-shadow-[2.5px_2.5px_0px_#800020]"
            }`}
          >
            Add New
          </p>
        </div>
      </div>
      <MenuData
        data={
          menus.find((menuItem) => menuItem.menuName === active) || undefined
        }
      />
      {active === "addNew" && <AddNew closeModal={() => handleCloseModel()} />}
    </div>
  );
};
export default Menu;
