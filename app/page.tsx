import Navigation from "@/components/navigation";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/menu`);
  return (
    <div className="w-full h-fit bg-black-800">
      <Navigation />
      <div className="w-full h-full flex justify-center items-center py-24">
        <p className="text-white">
          This page is under progress.{" "}
          <Link href="/menu" className="text-brand underline">
            See Our Menu
          </Link>
        </p>
      </div>
    </div>
  );
}
