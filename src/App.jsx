import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import WorkflowSection from "./components/WorkflowSection";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkflowSection />
        <PricingSection />
        <Testimonials />
      </main>
      <footer className="mt-20 border-t py-10 border-neutral-700 max-w-7xl mx-auto pt-20 px-6">
        <Footer />
      </footer>
    </>
  );
}
