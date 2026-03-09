import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookEvent from "@/components/BookEvent";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Navbar />
      <main>
        <HeroSection />
        <BookEvent />
        <ServicesSection />
        <GallerySection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
