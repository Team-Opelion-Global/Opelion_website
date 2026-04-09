import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import GlobalReach from "@/components/GlobalReach";
import Footer from "@/components/Footer";
import AboutPreview from "@/components/AboutPreview";
import Timeline from "@/components/Timeline";
import Products_Preview from "@/components/Products_Preview";
import BlogPreview from "@/components/BlogPreview";
import ContactSection from "@/components/ContactSection";

export default function Home() {
return ( <main id="top" className="bg-[#0b0f14] text-white">


  <Navbar />

  <div>
    <Hero />
  </div>

  <AboutPreview />

  <Timeline />

  <Products_Preview />

  <BlogPreview />

  {/* <Stats /> */}

  {/* <GlobalReach /> */}

  <ContactSection />


  <Footer />

</main>


);
}
