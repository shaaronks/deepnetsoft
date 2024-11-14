import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Menu from "@/components/menu";
import Footer from "@/components/footer";

export default function MenuPage() {
  return (
    <div className="w-full h-fit bg-black-800">
      <Navigation />
      <Hero />
      <Menu />
      <Footer />

    </div>
  );
}
