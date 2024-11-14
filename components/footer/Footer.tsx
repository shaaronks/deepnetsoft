import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="w-full max-w-md lg:max-w-6xl mx-auto px-6 lg:px-0 mt-12 h-fit flex flex-col gap-6 lg:flex-row lg:justify-center items-center">
        {/* Logo and Social Section */}
        <div className="bg-black-800 text-white border border-white rounded-xl h-32 relative w-full">
          <div className="p-3 space-y-6">
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-fit h-fit absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2">
                  <Image
                    src="/logo-small.svg"
                    alt="Logo small"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "fit-content", height: "auto" }}
                  />
                </div>
                <h2 className="text-3xl font-normal mt-4 font-oswald">
                  <span className="text-blue-500">DEEP</span> NET{" "}
                  <span className="text-gray-400">SOFT</span>
                </h2>
              </div>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <Image
                    src="/fb.svg"
                    alt="facebook logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "fit-content", height: "auto" }}
                  />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <Image
                    src="/x.svg"
                    alt="x logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "fit-content", height: "auto" }}
                  />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <Image
                    src="/ytube.svg"
                    alt="youtube logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "fit-content", height: "auto" }}
                  />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-blue-500">
                  <Image
                    src="/instagram.svg"
                    alt="instagram logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "fit-content", height: "auto" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Connect With Us Section */}
        <div className="bg-black-800 text-white border border-white rounded-xl h-32 w-full">
          <div className="p-3 space-y-4">
            <h3 className="text-blue-500 text-center text-lg font-medium font-oswald">
              CONNECT WITH US
            </h3>
            <div className="flex justify-between items-center flex-col gap-1">
              <div className="flex items-center justify-center text-gray-400">
                <Link
                  href="tel:+919567843340"
                  className="hover:text-blue-500 font-kelly"
                >
                  +91 9567843340
                </Link>
              </div>
              <div className="flex items-center justify-center text-gray-400">
                <Link
                  href="mailto:info@deepnetsoft.com"
                  className="hover:text-blue-500 font-kelly"
                >
                  info@deepnetsoft.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Find Us Section */}
        <div className="bg-black-800 text-white border border-white rounded-xl h-32 w-full">
          <div className="p-3 space-y-4">
            <h3 className="text-blue-500 text-center text-lg font-medium font-oswald">
              FIND US
            </h3>
            <div className="flex items-center justify-center text-center font-kelly">
              <div className="flex space-x-2 text-gray-400">
                <div></div>
                <p>
                  First floor, Geo infopark,
                  <br />
                  Infopark EXPY, Kakkanad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:max-w-6xl lg:mx-auto w-full h-fit text-gray-500 bg-black-700 text-center font-lato font-semibold flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-1 mt-6 py-3">
        <p className="lg:w-fit">
          © 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.
        </p>
        <div className="w-fit h-fit justify-center items-center flex gap-3">
          <Link href="#" className="hover:text-brand">
            <p>Terms & Conditions</p>
          </Link>
          <Link href="#" className="hover:text-brand">
            <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
    </>
  );
}
