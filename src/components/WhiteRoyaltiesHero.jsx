import { useState } from "react";
import { Mail, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../images/logo.jpg";

export default function WhiteRoyaltiesFlyer() {
  const bookingEmail = "whiteroyalitiesltd@gmail.com";
  const bookingMailto = `mailto:${bookingEmail}?subject=Direct%20Booking%20Request&body=Hello%20WhiteRoyalties%20Management%20Ltd.%2C%0A%0AI%20would%20like%20to%20make%20a%20direct%20booking.%20Please%20contact%20me%20with%20the%20next%20steps.%0A%0AName%3A%0APhone%3A%0AService%20Needed%3A%0APreferred%20Date%3A`;

  const sideImages = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://media.istockphoto.com/id/2213567565/photo/smiling-courier-delivering-package-to-customer.jpg?s=612x612&w=0&k=20&c=-37HI3xrk5yClDDcn-ipR7k38OXn0eL1hZeJjBadpoc=",
  ];

  const sideCaptions = [
    "Residential Property Management Project",
    "Luxury Sales & Tenant Oversight",
    "Asset Preservation & Upkeep",
    "Secure Asset Delivery",
    "Professional Handling & Dispatch",
  ];

  // Modal state
  const [modal, setModal] = useState({ open: false, type: null });
  const [formData, setFormData] = useState({});

  // Images 0,1,2 → real-estate | Images 3,4 → logistics
  const getImageType = (index) => (index >= 3 ? "logistics" : "real-estate");

  const openModal = (index) => {
    setFormData({});
    setModal({ open: true, type: getImageType(index) });
  };

  const closeModal = () => setModal({ open: false, type: null });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    let subject, body;
    const name = formData.name || "";
    const email = formData.email || "";
    const phone = formData.phone || "";

    if (modal.type === "logistics") {
      subject = "Logistics Service Request";
      body =
        `Hello, Welcome to WhiteRoyalties Management Ltd.\n\n` +
        `For Logistics Service\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone Number: ${phone}\n` +
        `Pickup Address: ${formData.pickupAddress || ""}\n` +
        `Delivery Address: ${formData.deliveryAddress || ""}\n` +
        `Item Description: ${formData.itemDescription || ""}\n\n` +
        `Our team will respond shortly.\n\nWarm Regards,\nWhiteRoyalties MGT Ltd`;
    } else {
      subject = "Real Estate Enquiry";
      body =
        `Hello, Welcome to WhiteRoyalties Management Ltd.\n\n` +
        `For Real Estate Enquiries, Kindly Send:\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone Number: ${phone}\n` +
        `Property Type: ${formData.propertyType || ""}\n` +
        `Preferred Location: ${formData.preferredLocation || ""}\n` +
        `Budget Range: ${formData.budgetRange || ""}\n\n` +
        `Our team will respond shortly.\n\nWarm Regards,\nWhiteRoyalties MGT Ltd`;
    }
    window.location.href = `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    closeModal();
  };

  return (
    <div className="min-h-screen bg-[#f7f4ea] text-slate-900">
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-[#e7d7a2]">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="WhiteRoyalties Logo" className="h-[3.15rem] w-[3.7rem] filter contrast-125" />
            <div className="leading-tight">
              <div className="font-extrabold text-[#0f2747] text-base">WhiteRoyalties</div>
              <div className="text-[10px] md:text-xs text-gray-500">Management Ltd.</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4 text-sm font-semibold text-gray-700">
            <a href="#about" className="hover:text-[#0f2747]">About</a>
            <a href="#services" className="hover:text-[#0f2747]">Services</a>
            <a href="#portfolio" className="hover:text-[#0f2747]">Portfolio</a>
            <a href="#contact" className="hover:text-[#0f2747]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-widest text-[#c9a227] font-semibold">PREMIUM MANAGEMENT</p>
              <h1 className="text-4xl md:text-5xl font-serif text-[#0f2747] mt-3">
                Luxury Property & Logistics Management in Nigeria
              </h1>
              <p className="text-base text-gray-700 mt-4">
                Discreet management of high-value real estate and precision logistics for individuals and businesses.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={bookingMailto}
                  className="bg-[#0f2747] text-white px-6 py-3 rounded-full text-sm hover:bg-[#183a67] transition-colors"
                >
                  Book Directly via Email
                </a>
                <a
                  href="https://wa.me/2349013681303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#c9a227] text-[#0f2747] px-6 py-3 rounded-full text-sm hover:bg-[#c9a227] hover:text-[#0f2747] transition-colors"
                >
                  Speak to a Manager on WhatsApp
                </a>
              </div>
              <div className="mt-6 text-xs text-gray-600 uppercase tracking-wide">
                Registered Nigerian company • Trusted asset management
              </div>
              <div className="mt-3 text-sm text-gray-700">
                Direct booking email:{" "}
                <a href={bookingMailto} className="text-[#0f2747] font-medium hover:underline">
                  {bookingEmail}
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Real estate and logistics services"
                className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-white shadow-lg rounded-2xl p-4 text-sm text-gray-700 border border-[#e7d7a2]">
                Royal Service • Royal Integrity • Royal Results
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#c9a227]">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-serif text-[#0f2747]">About Us</h2>
                <p className="text-sm text-[#0f2747] mt-3">
                  WhiteRoyalties Management Ltd. provides premium real estate and logistics services built on precision, discretion, and trust.
                </p>
              </div>
              <ul className="text-sm text-[#0f2747] space-y-2">
                <li>• Trusted asset management for private clients and businesses</li>
                <li>• End-to-end oversight with clear reporting and accountability</li>
                <li>• Professional teams trained for high-value handling</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-serif text-[#0f2747]">Services</h2>
            <p className="text-sm text-gray-600 mt-2">Premium solutions for discerning clients.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 rounded-2xl border border-[#e7d7a2] bg-white">
                <h3 className="text-xl font-semibold text-[#0f2747]">Real Estate</h3>
                <p className="text-sm text-gray-700 mt-2">Portfolio Management • Tenant Oversight • Asset Preservation</p>
              </div>
              <div className="p-6 rounded-2xl border border-[#e7d7a2] bg-white">
                <h3 className="text-xl font-semibold text-[#0f2747]">Logistics</h3>
                <p className="text-sm text-gray-700 mt-2">Secure Asset Delivery • Supply Chain Support • Professional Handling</p>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-serif text-[#0f2747]">Portfolio</h2>
          <p className="text-xs text-gray-500 mt-1">Click any image to make an enquiry.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            {sideImages.map((src, i) => (
              <button
                key={src}
                onClick={() => openModal(i)}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-[#e7d7a2] text-left hover:shadow-lg hover:border-[#c9a227] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
              >
                <div className="relative">
                  <img src={src} alt={sideCaptions[i]} className="w-full h-40 object-cover" />
                  <div className="absolute top-2 right-2 bg-[#0f2747] text-[#f5df8f] text-xs px-2 py-1 rounded-full">{i + 1}</div>
                </div>
                <div className="p-3 text-[11px] text-gray-600">{sideCaptions[i]}</div>
              </button>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap gap-4 items-center justify-between text-sm text-[#0f2747]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c9a227]"></span>
              <span>Registered Company</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c9a227]"></span>
              <span>Nigeria-based Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#c9a227]"></span>
              <span>Client-Focused & Discreet</span>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#0f2747] text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3">
                <img src={logo} alt="WhiteRoyalties Logo" className="h-10 w-auto rounded-md" />
                <div className="leading-tight">
                  <div className="font-semibold text-[#f5df8f]">WhiteRoyalties</div>
                  <div className="text-xs text-white/70">Management Ltd.</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/80">
                Professional real estate consultation, property sales, rentals, and management services tailored for premium clients in Nigeria.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5df8f]">Quick Links</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                <a href="#" className="hover:text-white">Home</a>
                <a href="#portfolio" className="hover:text-white">Properties</a>
                <a href="#services" className="hover:text-white">Services</a>
                <a href="#about" className="hover:text-white">About Us</a>
                <a href="#contact" className="hover:text-white">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5df8f]">Our Services</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                <span>Property Sales</span>
                <span>Rentals</span>
                <span>Property Management</span>
                <span>Real Estate Consulting</span>
                <span>Property Inspection</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5df8f]">Contact Us</h3>
              <div className="mt-4 space-y-4 text-sm text-white/80">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#f5df8f]">Location</div>
                  <div className="mt-2">Lagos, Nigeria</div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-[#f5df8f]" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#f5df8f]">Phone</div>
                    <div className="mt-1 text-white">+234 901 368 1303</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-[#f5df8f]" />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#f5df8f]">Email</div>
                    <a href={bookingMailto} className="mt-1 block text-white hover:underline">
                      {bookingEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 mt-6 border-t border-white/15 text-xs text-white/80">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms & Conditions</a>
            </div>
            <div>© WhiteRoyalties Management Ltd</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/2349013681303"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#c9a227] text-[#0f2747] shadow-xl hover:scale-105 hover:bg-[#e0bc52] transition"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Enquiry Modal */}
      {modal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <p className="text-xs tracking-widest text-[#c9a227] font-semibold uppercase">Hello, Welcome to</p>
            <h2 className="text-xl font-serif text-[#0f2747] mt-1 mb-5">WhiteRoyalties Management Ltd.</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Name <span className="text-red-400">*</span></label>
                  <input
                    name="name"
                    required
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    className="w-full border border-[#e7d7a2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Email <span className="text-red-400">*</span></label>
                  <input
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                    placeholder="e.g. jane@example.com"
                    className="w-full border border-[#e7d7a2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Phone Number <span className="text-red-400">*</span></label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    onChange={handleChange}
                    placeholder="e.g. +234 801 234 5678"
                    className="w-full border border-[#e7d7a2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]"
                  />
                </div>
              </div>

              {modal.type === "logistics" ? (
                <>
                  <p className="text-sm font-semibold text-[#0f2747]">For Logistics Service</p>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Pickup Address <span className="text-red-400">*</span></label>
                    <input
                      name="pickupAddress"
                      required
                      onChange={handleChange}
                      placeholder="e.g. 12 Marina Street, Lagos"
                      className="w-full border border-[#e7d7a2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Delivery Address <span className="text-red-400">*</span></label>
                    <input
                      name="deliveryAddress"
                      required
                      onChange={handleChange}
                      placeholder="e.g. 5 Admiralty Way, Lekki"
                      className="w-full border border-[#e7d7a2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Item Description <span className="text-red-400">*</span></label>
                    <textarea
                      name="itemDescription"
                      required
                      onChange={handleChange}
                      rows={3}
                      placeholder="Describe the item(s) to be delivered"
                      className="w-full border border-[#e7d7a2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] resize-none"
                    />
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm font-semibold text-[#0f2747]">For Real Estate Enquiries, Kindly Send:</p>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Property Type <span className="text-red-400">*</span></label>
                    <input
                      name="propertyType"
                      required
                      onChange={handleChange}
                      placeholder="e.g. Duplex, Apartment, Land"
                      className="w-full border border-[#e7d7a2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Preferred Location <span className="text-red-400">*</span></label>
                    <input
                      name="preferredLocation"
                      required
                      onChange={handleChange}
                      placeholder="e.g. Lekki, Victoria Island, Abuja"
                      className="w-full border border-[#e7d7a2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Budget Range <span className="text-red-400">*</span></label>
                    <input
                      name="budgetRange"
                      required
                      onChange={handleChange}
                      placeholder="e.g. ₦50M – ₦100M"
                      className="w-full border border-[#e7d7a2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]"
                    />
                  </div>
                </>
              )}

              {/* Footer note */}
              <p className="text-xs text-gray-400 pt-1">
                Our team will respond shortly.<br />
                <span className="text-[#0f2747] font-medium">Warm Regards, WhiteRoyalties MGT Ltd</span>
              </p>

              <button
                type="submit"
                className="w-full bg-[#0f2747] text-white py-2.5 rounded-full text-sm font-semibold hover:bg-[#183a67] transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={15} />
                Send via Email
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
}
