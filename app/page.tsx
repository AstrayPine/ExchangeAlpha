import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    // React Fragment used to group elements when you dont need additional classes
    // Saves Code
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
