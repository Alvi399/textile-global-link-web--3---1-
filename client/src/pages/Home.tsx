import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Zap, Award, Globe } from "lucide-react";
import { useEffect } from "react";
import CertificationViewer from "@/components/CertificationViewer";

/**
 * Industrial Minimalism Design System
 * - Navy Blue (#001F3F) primary with Safety Orange (#FF6B35) accents
 * - Montserrat Bold for headlines, Source Sans Pro for body
 * - Asymmetric layouts with diagonal dividers
 * - Emphasis on technical credibility and safety
 */

export default function Home() {
  useEffect(() => {
    // Disable print functionality
    const handlePrintKeydown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handlePrintKeydown);
    
    return () => {
      window.removeEventListener('keydown', handlePrintKeydown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img 
              src="/images/Logo.png" 
              alt="PT. Global Link Indonesia Logo" 
              className="h-14 w-auto"
            />
            <span className="font-bold text-lg text-primary">PT. Global Link Indonesia</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
            <a href="#partners" className="text-foreground hover:text-accent transition-colors">Partners</a>
            <a href="#products" className="text-foreground hover:text-accent transition-colors">Products</a>
            <a href="#certifications" className="text-foreground hover:text-accent transition-colors">Certifications</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-white py-20 md:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-accent text-white px-4 py-2 rounded text-sm font-semibold">
              Advanced Protection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Safety Without Compromise
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Leading provider of certified fire-resistant workwear designed for extreme industrial environments. Trusted by professionals in oil & gas, mining, and manufacturing.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-accent hover:bg-orange-600 text-white">
                Learn More <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/images/hero-industrial-worker.jpg" 
              alt="Industrial worker in protective gear" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-lg shadow-lg max-w-xs" style={{paddingBottom: '40px'}}>
              <p className="font-bold text-sm">NFPA 2112:2023 Certified</p>
              <p className="text-xs mt-1">UL Tested & Approved</p>
            </div>
          </div>
        </div>
        
        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{
          clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>

      {/* Executive Summary */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                The Trust Behind Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PT. Global Link Indonesia is a specialized provider of flame-resistant coveralls dedicated to safeguarding lives in extreme work environments. We understand that in oil & gas, mining, and manufacturing, workwear is not merely a uniform—it is the last line of defense for workers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We bring world-class protection solutions that combine cutting-edge material technology with international manufacturing standards. Our commitment is unwavering: delivering safety without compromise.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Certified Protection</p>
                    <p className="text-sm text-gray-600">NFPA 2112:2023 & ISO 9001:2015</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-primary">Global Quality</p>
                    <p className="text-sm text-gray-600">International standards applied locally</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-accent">
                <p className="text-lg font-semibold text-primary mb-4">Our Philosophy</p>
                <p className="text-gray-700 italic">
                  "We bring world-class protection standards to the hands of Indonesian workers. Our products are engineered for the harshest conditions, tested to the highest standards, and designed with the comfort of workers in mind."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section id="partners" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Global Quality, Local Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our strength comes from strategic partnerships with world-leading textile manufacturers
            </p>
          </div>

          <div className="mb-12">
            <img 
              src="/images/global-partnership.jpg" 
              alt="Global partnership network" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sritex */}
            <div className="bg-background p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Sritex Group</h3>
              <p className="text-sm text-gray-600 mb-4">
                International Military Standard Producer
              </p>
              <p className="text-gray-700 leading-relaxed">
                Trusted supplier of military uniforms for NATO and U.S. Armed Forces. Their world-class manufacturing standards ensure every seam and fabric meets the highest durability and safety requirements.
              </p>
            </div>

            {/* Duniatex */}
            <div className="bg-background p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Duniatex Group</h3>
              <p className="text-sm text-gray-600 mb-4">
                Indonesia's Largest Textile Conglomerate
              </p>
              <p className="text-gray-700 leading-relaxed">
                One of Indonesia's largest textile groups, guaranteeing consistent material availability and precision quality control for large-scale production and reliable supply chains.
              </p>
            </div>

            {/* Sari Warna Asli */}
            <div className="bg-background p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Sari Warna Asli</h3>
              <p className="text-sm text-gray-600 mb-4">
                Technical Textile Innovation Experts
              </p>
              <p className="text-gray-700 leading-relaxed">
                Specialists in technical fabric development and advanced finishing processes. They ensure our fire-retardant materials remain comfortable while maintaining superior protection capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="h-24 bg-white" style={{
        clipPath: 'polygon(0 0, 100% 60%, 100% 100%, 0 100%)',
        backgroundColor: '#F8F9FA'
      }}></div>

      {/* Core Product - Firegap Series */}
      <section id="products" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Firegap® Series
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced flame-resistant coveralls engineered for short-duration thermal exposures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/product-coverall-detail.jpg" 
                alt="Firegap coverall product" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Premium Material</h3>
                <p className="text-gray-700">
                  100% Cotton Treated FR (Fire Retardant) that remains breathable and comfortable in tropical climates without compromising protection capabilities.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">YKK Brass Zipper</h3>
                <p className="text-gray-700">
                  NFPA-compliant brass zippers that withstand extreme heat without melting or compromising the protective integrity of the garment.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">Aramid Sewing Thread</h3>
                <p className="text-gray-700">
                  Heat-resistant aramid and FR threads that maintain structural integrity even when exposed to temperatures exceeding 500°F.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-bold text-primary mb-2">High-Visibility Elements</h3>
                <p className="text-gray-700">
                  FR-compliant reflective safety tape ensures visibility in low-light industrial environments while maintaining flame resistance.
                </p>
              </div>

              <div className="bg-accent text-white p-6 rounded-lg mt-8">
                <p className="font-semibold mb-2">Specifications</p>
                <ul className="text-sm space-y-1">
                  <li>• Weight: 7-8 oz premium cotton blend</li>
                  <li>• Wash Durability: Maintains FR properties after industrial washing</li>
                  <li>• Available Colors: Navy Blue , Orange, Red, Custom Option</li>
                  <li>• Sizes: M to XXL with Custom Options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certified Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every product meets rigorous international safety standards and independent laboratory testing
            </p>
          </div>

          {/* PDF Certification Viewer */}
          <div className="mb-16">
            <CertificationViewer />
            <p className="text-sm text-gray-500 mt-4 text-center italic">
              All certification pages can be navigated using the Previous/Next buttons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg border-2 border-accent">
              <div className="text-4xl font-bold text-accent mb-3">NFPA</div>
              <h3 className="text-lg font-bold text-primary mb-3">NFPA 2112:2023</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Standard on Flame-Resistant Clothing for Protection of Industrial Personnel Against Short-Duration Thermal Exposures. Our materials have passed rigorous UL (Underwriters Laboratories) testing.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border-2 border-accent">
              <div className="text-4xl font-bold text-accent mb-3">ISO</div>
              <h3 className="text-lg font-bold text-primary mb-3">ISO 9001:2015</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Quality Management System certification ensuring consistent manufacturing excellence, rigorous process control, and continuous improvement throughout our production facilities.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border-2 border-accent">
              <div className="text-4xl font-bold text-accent mb-3">UL</div>
              <h3 className="text-lg font-bold text-primary mb-3">UL Tested & Approved</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Independent laboratory testing confirms zero flaming, no afterglow, and superior thermal protection. Results: "No Afterglow" and "No Flaming to Edge" standards exceeded.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-primary text-white p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Testing Results Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-200 mb-2">Thermal Protection Performance</p>
                <div className="bg-white/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-accent h-full" style={{width: '95%'}}></div>
                </div>
                <p className="text-xs mt-2 text-gray-300">Minimal burn injury risk</p>
              </div>
              <div>
                <p className="text-sm text-gray-200 mb-2">Wash Durability Retention</p>
                <div className="bg-white/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-accent h-full" style={{width: '98%'}}></div>
                </div>
                <p className="text-xs mt-2 text-gray-300">Maintains FR after 50+ washes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Commitment to K3
              </h2>
              <p className="text-gray-700 leading-relaxed">
                PT. Global Link Indonesia is dedicated to supporting comprehensive workplace safety (K3) programs at your organization. We go beyond providing protective equipment—we are your partner in creating safer industrial environments.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Custom Logo Embroidery</p>
                    <p className="text-sm text-gray-600">Personalize coveralls with your company branding</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Material Specification Consultation</p>
                    <p className="text-sm text-gray-600">Expert guidance based on your specific workplace hazards</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Bulk Procurement Support</p>
                    <p className="text-sm text-gray-600">Reliable supply chain for large-scale industrial operations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Ongoing Technical Support</p>
                    <p className="text-sm text-gray-600">Continuous assistance with product care and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-accent">
              <h3 className="text-xl font-bold text-primary mb-6">Why Choose Global Link?</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-primary mb-2">Proven Track Record</p>
                  <p className="text-sm text-gray-700">Backed by partnerships with world-leading manufacturers trusted by NATO and international military forces</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Uncompromising Quality</p>
                  <p className="text-sm text-gray-700">Every product undergoes rigorous testing and meets or exceeds international safety standards</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Worker-Centric Design</p>
                  <p className="text-sm text-gray-700">Premium materials ensure comfort in tropical climates without sacrificing protection</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-2">Local Expertise, Global Standards</p>
                  <p className="text-sm text-gray-700">We understand Indonesian workplace needs while maintaining international quality benchmarks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Ready to partner with us for your workplace safety needs? Contact our team today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
              <h3 className="font-bold mb-3">Address</h3>
              <p className="text-sm text-gray-200">
                PT. Global Link Indonesia<br/>
                Jl. Teluk Kumai Barat 113/9B Perak<br/>
                Surabaya, Indonesia
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
              <h3 className="font-bold mb-3">Email</h3>
              <p className="text-sm text-gray-200">
                <a href="mailto:ptgloballinkindo@gmail.com" className="hover:text-accent transition-colors">
                  ptgloballinkindo@gmail.com
                </a>
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur p-8 rounded-lg border border-white/20">
              <h3 className="font-bold mb-3">Phone / WhatsApp</h3>
              <p className="text-sm text-gray-200">
                <a href="https://wa.me/6281282227160" className="hover:text-accent transition-colors">
                  +62 812 8222 7160
                </a>
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-accent hover:bg-orange-600 text-white text-lg px-8 py-6">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 text-white py-12 border-t border-primary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/images/Logo.png" 
                  alt="PT. Global Link Indonesia Logo" 
                  className="h-8 w-auto"
                />
                <span className="font-bold">PT. Global Link Indonesia</span>
              </div>
              <p className="text-sm text-gray-300">
                Advanced thermal protection and industrial workwear solutions
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#partners" className="hover:text-accent transition-colors">Partners</a></li>
                <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#certifications" className="hover:text-accent transition-colors">Certifications</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Technical Specs</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Care Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2026 PT. Global Link Indonesia. All rights reserved. | Safety Without Compromise</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
