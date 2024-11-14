"use client";
import Menu from "@/icons/Menu";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    setActive(pathname.replace("/", ""));
  }, [pathname]);

  return (
    <div className="w-full h-fit lg:h-[100px] flex flex-col justify-center items-end p-2.5 text-gray-500 relative max-w-7xl mx-auto">
      <div
        className="size-h-10 lg:hidden"
        onClick={() => setNavOpen((prevState) => !prevState)}
      >
        <Menu size={19} />
      </div>
      <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-10 -translate-y-1/2">
        <Image
          src="/logo-small.svg"
          alt="logo small"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "fit-content", height: "auto" }}
        />
      </div>
      <div className="hidden lg:block absolute left-3 bottom-0 translate-y-1/2">
        <Image
          src="/logo-large.svg"
          alt="logo big"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "fit-content", height: "auto" }}
        />
      </div>
      {navOpen && (
        <ul className="w-full h-fit text-white text-opacity-90 lg:hidden uppercase">
          <Link href="/">
            <li
              className={` h-10 hover:text-brand  ${
                active === "" ? "text-brand" : "text-white text-opacity-90"
              }`}
            >
              Home
            </li>
          </Link>
          <Link href="/menu">
            <li
              className={` h-10 hover:text-brand ${
                active === "menu" ? "text-brand" : "text-white text-opacity-90"
              }`}
            >
              Menu
            </li>
          </Link>
          <Link href="/make-a-reservation">
            <li
              className={` h-10 hover:text-brand ${
                active === "make-a-reservation"
                  ? "text-brand"
                  : "text-white text-opacity-90"
              }`}
            >
              Make a Reservation
            </li>
          </Link>
          <Link href="/contact-us">
            <li
              className={` h-10 hover:text-brand ${
                active === "contact-us"
                  ? "text-brand"
                  : "text-white text-opacity-90"
              }`}
            >
              Contact Us
            </li>
          </Link>
        </ul>
      )}
      <ul className="w-fit h-fit text-white text-opacity-90 hidden lg:flex gap-6 uppercase">
        <Link href="/">
          <li
            className={`h-10 lg:h-fit hover:text-brand ${
              active === "" ? "text-brand" : "text-white text-opacity-90"
            }`}
          >
            Home
          </li>
        </Link>
        <Link href="/menu">
          <li
            className={`h-10 lg:h-fit hover:text-brand ${
              active === "menu" ? "text-brand" : "text-white text-opacity-90"
            }`}
          >
            Menu
          </li>
        </Link>
        <Link href="/make-a-reservation">
          <li
            className={`h-10 lg:h-fit hover:text-brand ${
              active === "make-a-reservation"
                ? "text-brand"
                : "text-white text-opacity-90"
            }`}
          >
            Make a Reservation
          </li>
        </Link>
        <Link href="/contact-us">
          <li
            className={`h-10 lg:h-fit hover:text-brand ${
              active === "contact-us"
                ? "text-brand"
                : "text-white text-opacity-90"
            }`}
          >
            Contact Us
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Navigation;
