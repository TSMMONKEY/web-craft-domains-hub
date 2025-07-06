
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";
import FreelanceWebDesign from "./pages/FreelanceWebDesign";
import PHPDevelopment from "./pages/PHPDevelopment";
import WordPressDevelopment from "./pages/WordPressDevelopment";
import DomainRegistration from "./pages/DomainRegistration";
import WebHosting from "./pages/WebHosting";
import WebsiteMaintenance from "./pages/WebsiteMaintenance";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import GetQuote from "./pages/GetQuote";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/freelance-web-design" element={<FreelanceWebDesign />} />
          <Route path="/php-development" element={<PHPDevelopment />} />
          <Route path="/wordpress-development" element={<WordPressDevelopment />} />
          <Route path="/domain-registration" element={<DomainRegistration />} />
          <Route path="/web-hosting" element={<WebHosting />} />
          <Route path="/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
