import React from "react";
import Image from "next/image";
import { MenuItem } from "./Menu";
import ItemsDisplay from "./ItemsDisplay";

type MenuDataProps = React.FC<{
  data?: MenuItem;
}>;

const MenuData: MenuDataProps = ({ data }) => {
  return (
    <div
      className="w-full mx-auto p-6 space-y-8 relative flex justify-center items-center overflow-hidden"
      style={{
        backgroundImage: "url('/menu-items-bg-lg.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="absolute -left-4 top-1/2 -translate-y-1/2">
        <Image
          src="/menu-items-bg-items.svg"
          alt="background decorations"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "fit-content", height: "auto" }}
        />
      </div>
      <div className="absolute -right-4 top-1/2 -translate-y-1/2">
        <Image
          src="/menu-items-bg-items-2.svg"
          alt="background decorations"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "fit-content", height: "auto" }}
        />
      </div>
      <div
        className="relative border border-white py-9 px-3 w-full lg:max-w-6xl"
        style={{
          backgroundImage: "url('/menu-items-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {data?.sections.map((section, index) => (
          <React.Fragment key={section.sectionName + index}>
            <div className="w-full h-fit flex justify-center items-center relative mb-9 gap-3">
              {index === 0 && (
                <div className="w-fit h-fit absolute -left-6 -top-7 lg:top-0 lg:-left-16 lg:-translate-y-1/2 min-w-20 max-w-20 lg:min-w-44 lg:max-w-44">
                  <Image
                    src="/drinks-1.png"
                    alt="drinks image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              )}
              <div className="w-[50px] h-px bg-gray-500"></div>
              <h2 className="text-4xl md:text-5xl font-semibold font-oswald text-center text-white tracking-wider leading-relaxed text-primary drop-shadow-[2.5px_2.5px_0px_#800020]">
                {section.sectionName.includes(" ") ? (
                  <>
                    {section.sectionName.split(" ")[0]}
                    <br />
                    {section.sectionName.split(" ")[1]}
                  </>
                ) : (
                  section.sectionName
                )}
              </h2>
              <div className="w-[50px] h-px bg-gray-500"></div>
            </div>

            <ItemsDisplay items={section.items} />
          </React.Fragment>
        ))}
        <div className="w-fit h-fit absolute right-0 bottom-0 min-w-20 max-w-20 lg:min-w-44 lg:max-w-44 lg:-bottom-10 lg:right-0">
          <Image
            src="/drinks-2.png"
            alt="drinks image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};
export default MenuData;
