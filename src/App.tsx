import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FloatingContact from "./components/FloatingContact";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import PhotographyWedding from "./pages/PhotographyWedding";
import DecorationWedding from "./pages/DecorationWedding";
import CateringWedding from "./pages/CateringWedding";
import PackageWedding from "./pages/PackageWedding";
import PhotographyGruhapravesha from "./pages/PhotographyGruhapravesha";
import PhotographyBabyShower from "./pages/PhotographyBabyShower";
import PhotographyCorporateEvents from "./pages/PhotographyCorporateEvents";
import PhotographyBirthday from "./pages/Photographybirthday";
import DecorationCorporateEvents from "./pages/DecorationCorporateEvents";
import PhotographyAnniversary from "./pages/PhotographyAnniversary";
import DecorationGruhapravesha from "./pages/DecorationGruhapravesha";
import CateringGruhapravesha from "./pages/CateringGruhapravesha";
import PackageGruhapravesha from "./pages/PackageGruhapravesha";
import DecorationNamakarna from "./pages/DecorationNamakarna";
import CateringNamakarna from "./pages/CateringNamakarna";
import PhotographyNamakarna from "./pages/PhotographyNamakarna";
import PackageNamakarna from "./pages/PackageNamakarna";
import PackageBabyShower from "./pages/PackageBabyShower";
import CateringBabyShower from "./pages/CateringBabyShower";
import DecorationBabyShower from "./pages/DecorationBabyShower";
import CateringCorporateEvents from "./pages/CateringCorporateEvents";
import PackageCorporateEvents from "./pages/PackageCorporateEvents";
import PackageAnniversary from "./pages/PackageAnniversary";
import DecorationBirthday from "./pages/DecorationBirthday";
import CateringBirthday from "./pages/CateringBirthday";
import PackageBirthday from "./pages/PackageBirthday";
import DecorationAnniversary from "./pages/DecorationAnniversary";
import CateringAnniversary from "./pages/CateringAnniversary";
import ContactBooking from "./pages/ContactBooking";
import PortfolioWedding from "./pages/PortfolioWedding";
import PortfolioGallery1 from "./pages/portfolio/roopa-kishore";
import PortfolioGallery from "./pages/portfolio/roopa-kishore";
import Naturallocations from "./pages/locations/natural-locations";
import ElementsResort from "./pages/locations/elements-resort";
import BangaloreFilmCity from "./pages/locations/bangalore-film-city";
import Shirestudio from "./pages/locations/shire-studio";
import BeyondTheSpace from "./pages/locations/beyond-the-space";
import PortfolioGallery2 from "./pages/portfolio/vindhyashree-pavankumar";
const App = () => (
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          {/* Wedding Routes */}
          <Route path="/photography-wedding" element={<PhotographyWedding />} />
          <Route path="/decoration-wedding" element={<DecorationWedding />} />
          <Route path="/catering-wedding" element={<CateringWedding />} />
          <Route path="/package-wedding" element={<PackageWedding />} />
          {/* Gruhapravesha Routes */}
          <Route path="/photography-gruhapravesha" element={<PhotographyGruhapravesha />} />
          <Route path="/decoration-gruhapravesha" element={<DecorationGruhapravesha />} />
          <Route path="/catering-gruhapravesha" element={<CateringGruhapravesha />} />
          <Route path="/package-gruhapravesha" element={<PackageGruhapravesha />} />
          {/* Baby Shower Routes */}
          <Route path="/photography-baby-shower" element={<PhotographyBabyShower />} />
          <Route path="/decoration-baby-shower" element={<DecorationBabyShower />} />
          <Route path="/catering-baby-shower" element={<CateringBabyShower />} />
          <Route path="/package-baby-shower" element={<PackageBabyShower />} />
          {/* Corporate Events Routes */}
          <Route path="/photography-corporate-events" element={<PhotographyCorporateEvents />} />
          <Route path="/decoration-corporate-events" element={<DecorationCorporateEvents />} />
          <Route path="/catering-corporate-events" element={<CateringCorporateEvents />} />
          <Route path="/package-corporate-events" element={<PackageCorporateEvents />} />
          {/* Birthday Routes */}
          <Route path="/photography-birthday" element={<PhotographyBirthday />} />
          <Route path="/package-birthday" element={<PackageBirthday />} />
          <Route path="/decoration-birthday" element={<DecorationBirthday />} />
          <Route path="/catering-birthday" element={<CateringBirthday />} />
          {/* Anniversary Routes */}
          <Route path="/photography-anniversary" element={<PhotographyAnniversary />} />
          <Route path="/package-anniversary" element={<PackageAnniversary />} />
          <Route path="/decoration-anniversary" element={<DecorationAnniversary />} />
          <Route path="/catering-anniversary" element={<CateringAnniversary />} />
          {/* Namakarna Routes */}
          <Route path="/photography-namakarna" element={<PhotographyNamakarna />} />
          <Route path="/decoration-namakarna" element={<DecorationNamakarna />} />
          <Route path="/catering-namakarna" element={<CateringNamakarna />} />
          <Route path="/package-namakarna" element={<PackageNamakarna />} />
          {/* Portfolio Routes */}
          <Route path="/portfolio-wedding" element={<PortfolioWedding />} />
          {/* Other occasions */}
          <Route path= "/package-other-occasions" element={<ContactBooking />} />
          <Route path= "/photography-other-occasions" element={<ContactBooking />} />
          <Route path= "/decoration-other-occasions" element={<ContactBooking />} />
          <Route path= "/catering-other-occasions" element={<ContactBooking />} />
          {/* Contact/Booking Route */}
          <Route path="/contact" element={<ContactBooking />} />
          { /* portfolio gallery routes */}
          <Route path="/portfolio/roopa-kishore" element={<PortfolioGallery1 />} />
          <Route path="/portfolio/vindhyashree-pavankumar" element={<PortfolioGallery2 />} />
          <Route path="/portfolio/arjun-kavya" element={<PortfolioGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          { /* pre wedding shoot location */}
          <Route path="/locations/natural-locations" element={<Naturallocations />} />
          <Route path="/locations/elements-resort" element={<ElementsResort />} />
          <Route path="/locations/bangalore-film-city" element={<BangaloreFilmCity />} />
          <Route path="/locations/shire-studio" element={<Shirestudio />} />
          <Route path="/locations/beyond-the-space" element={<BeyondTheSpace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <FloatingContact />
    </TooltipProvider>
);

export default App;
