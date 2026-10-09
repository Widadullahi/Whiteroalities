import { Link, Outlet, useLocation } from "react-router-dom";
import { Mail, Phone, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../images/logo.png";
import { useState } from "react";

export default function Layout() {
  const bookingEmail = "whiteroyalitiesltd@gmail.com";
  const bookingMailto = `mailto:${bookingEmail}?subject=Direct%20Booking%20Request&body=Hello%20WhiteRoyalties%20Management%20Ltd.%2C%0A%0AI%20would%20like%20to%20make%20a%20direct%20booking.%20Please%20contact%20me%20with%20the%20next%20steps.%0A%0AName%3A%0APhone%3A%0AService%20Needed%3A%0APreferred%20Date%3A`;
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f4ea] text-slate-900">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-[#e7d7a2] shadow-sm">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between py-2.5">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="WhiteRoyalties Logo" className="h-14 w-auto filter contrast-125" />
              <div className="leading-tight">
                <div className="font-extrabold text-[#0f2747] text-base md:text-lg">WhiteRoyalties</div>
                <div className="text-[10px] md:text-xs text-gray-500">Management Ltd.</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-semibold transition-colors relative ${
                    location.pathname === item.path
                      ? "text-[#c9a227]"
                      : "text-gray-700 hover:text-[#0f2747]"
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c9a227]" />
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-[#0f2747] hover:bg-[#183a67] text-white px-4 py-2.5 rounded-xl font-semibold text-sm transition-colors"
              >
                Get Started
              </Link>
            </nav>

            <button
              className="md:hidden text-[#0f2747]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-6 space-y-4 border-t border-gray-100 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 text-base font-semibold ${
                    location.pathname === item.path
                      ? "text-[#c9a227]"
                      : "text-gray-700 hover:text-[#0f2747]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-[#0f2747] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4">
                <img src={logo} alt="WhiteRoyalties Logo" className="h-16 w-auto rounded-md" />
                <div className="leading-tight">
                  <div className="font-bold text-[#f5df8f] text-lg">WhiteRoyalties</div>
                  <div className="text-sm text-white/70">Management Ltd.</div>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-white/80">
                Professional real estate consultation, property sales, rentals, and management services tailored for premium clients in Nigeria.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5df8f] mb-6">Quick Links</h3>
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-base">Home</Link>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors text-base">About Us</Link>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors text-base">Services</Link>
                <Link to="/portfolio" className="text-white/80 hover:text-white transition-colors text-base">Portfolio</Link>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-base">Contact</Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5df8f] mb-6">Our Services</h3>
              <div className="flex flex-col gap-4">
                <span className="text-white/80 text-base">Property Sales</span>
                <span className="text-white/80 text-base">Rentals</span>
                <span className="text-white/80 text-base">Property Management</span>
                <span className="text-white/80 text-base">Real Estate Consulting</span>
                <span className="text-white/80 text-base">Secure Logistics</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5df8f] mb-6">Contact Us</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#f5df8f] mb-2">Location</div>
                  <div className="text-white/90">Lagos, Nigeria</div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-0.5 text-[#f5df8f]" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#f5df8f] mb-2">Phone</div>
                    <a href="tel:+2349013681303" className="text-white hover:text-[#f5df8f] transition-colors text-base">
                      +234 901 368 1303
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="mt-0.5 text-[#f5df8f]" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#f5df8f] mb-2">Email</div>
                    <a href={bookingMailto} className="text-white hover:text-[#f5df8f] transition-colors text-base">
                      {bookingEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 mt-12 border-t border-white/15">
            <div className="flex items-center gap-8">
              <Link to="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms & Conditions</Link>
            </div>
            <div className="text-white/60 text-sm">© {new Date().getFullYear()} WhiteRoyalties Management Ltd. All rights reserved.</div>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
}
