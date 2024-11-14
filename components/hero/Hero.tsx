"use client";
import useViewportWidth from "@/hooks/useViewportWidth";

const Hero = () => {
  const width = useViewportWidth();
  return (
    <div
      style={{
        backgroundImage:
          width < 1024 ? "url('/hero-bg.png')" : "url('/hero-bg-large.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      className="w-full h-fit flex flex-col gap-2 py-12 items-center px-3"
    >
      <p className="text-4xl capitalize text-white font-oswald font-semibold drop-shadow-[2.5px_2.5px_0px_#800020]">
        MENU
      </p>
      <p className="text-base text-white-400 text-center font-kelly tracking-wide leading-slug max-w-2xl">
        Please take a look at our menu featuring food, drinks, and brunch. If
        you'd like to place an order, use the "Order Online" button located
        below the menu.
      </p>
    </div>
  );
};
export default Hero;
