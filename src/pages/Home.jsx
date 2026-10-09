import { useState } from "react";
import { Mail, X, ArrowRight, Building2, Package, Shield, Users, Clock, Award, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const bookingEmail = "whiteroyalitiesltd@gmail.com";
  const bookingMailto = `mailto:${bookingEmail}?subject=Direct%20Booking%20Request&body=Hello%20WhiteRoyalties%20Management%20Ltd.%2C%0A%0AI%20would%20like%20to%20make%20a%20direct%20booking.%20Please%20contact%20me%20with%20the%20next%20steps.%0A%0AName%3A%0APhone%3A%0AService%20Needed%3A%0APreferred%20Date%3A`;

  const sideImages = [
    { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Luxury Duplex", category: "Residential" },
    { src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Modern Penthouse", category: "Luxury" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Commercial Space", category: "Commercial" },
    { src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Secure Logistics", category: "Delivery" },
    { src: "https://media.istockphoto.com/id/2213567565/photo/smiling-courier-delivering-package-to-customer.jpg?s=612x612&w=0&k=20&c=-37HI3xrk5yClDDcn-ipR7k38OXn0eL1hZeJjBadpoc=", title: "Premium Delivery", category: "Logistics" },
    { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Executive Villa", category: "Premium" }
  ];

  const features = [
    { icon: <Building2 size={28} />, title: "Premium Properties", description: "Curated selection of luxury real estate in prime locations" },
    { icon: <Package size={28} />, title: "Secure Logistics", description: "Professional handling and delivery of high-value assets" },
    { icon: <Shield size={28} />, title: "Full Protection", description: "Comprehensive insurance and security for all transactions" },
    { icon: <Users size={28} />, title: "Expert Team", description: "Dedicated professionals with years of industry experience" }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "200+", label: "Properties Sold" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Client Support" }
  ];

  const [modal, setModal] = useState({ open: false, type: null });
  const [formData, setFormData] = useState({});

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
    <div>
      {/* Hero Section - Original Design */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
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

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-[#0f2747] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f7f4ea]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f2747] font-bold">
              Excellence in Every Detail
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c9a227] to-[#dab834] rounded-2xl flex items-center justify-center text-[#0f2747] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f2747] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#c9a227]/20 rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="About"
                className="relative w-full h-[450px] object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0f2747] text-white p-8 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold">About WhiteRoyalties</p>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0f2747] font-bold">
                Redefining Luxury Real Estate & Logistics
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                WhiteRoyalties Management Ltd. is Nigeria's premier real estate and logistics company, dedicated to providing exceptional service and unparalleled expertise to our discerning clients.
              </p>
              <ul className="space-y-4">
                {[
                  "Trusted asset management for private clients and businesses",
                  "End-to-end oversight with clear reporting and accountability",
                  "Professional teams trained for high-value handling"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-[#c9a227] rounded-full flex items-center justify-center text-[#0f2747]">
                      <ChevronRight size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gradient-to-b from-[#0f2747] to-[#0a1a31]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Our Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-4">
              Premium Properties & Projects
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Explore our curated selection of luxury properties and logistics solutions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sideImages.map((item, i) => (
              <button
                key={i}
                onClick={() => openModal(i)}
                className="group relative overflow-hidden rounded-3xl cursor-pointer focus:outline-none"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm text-[#f5df8f] mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#c9a227]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0f2747] font-bold mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-[#0f2747]/80 text-lg mb-8">
            Contact us today and let's discuss how we can help you achieve your real estate and logistics goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={bookingMailto}
              className="inline-flex items-center justify-center gap-2 bg-[#0f2747] hover:bg-[#183a67] text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              <Mail size={20} /> Get in Touch
            </a>
            <a
              href="https://wa.me/2349013681303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#0f2747] font-semibold px-8 py-4 rounded-xl transition-all"
            >
              <FaWhatsapp size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Modal */}
      {modal.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative">
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-2">Hello, Welcome to</p>
              <h2 className="text-2xl font-serif text-[#0f2747] font-bold">WhiteRoyalties Management Ltd.</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Name <span className="text-red-500">*</span></label>
                  <input
                    name="name"
                    required
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Email <span className="text-red-500">*</span></label>
                  <input
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                    placeholder="e.g. jane@example.com"
                    className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    onChange={handleChange}
                    placeholder="e.g. +234 801 234 5678"
                    className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none"
                  />
                </div>
              </div>

              {modal.type === "logistics" ? (
                <>
                  <p className="text-base font-semibold text-[#0f2747] mb-4">For Logistics Service</p>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Pickup Address <span className="text-red-500">*</span></label>
                    <input
                      name="pickupAddress"
                      required
                      onChange={handleChange}
                      placeholder="e.g. 12 Marina Street, Lagos"
                      className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Delivery Address <span className="text-red-500">*</span></label>
                    <input
                      name="deliveryAddress"
                      required
                      onChange={handleChange}
                      placeholder="e.g. 5 Admiralty Way, Lekki"
                      className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Item Description <span className="text-red-500">*</span></label>
                    <textarea
                      name="itemDescription"
                      required
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe the item(s) to be delivered"
                      className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none resize-none"
                    />
                  </div>
                </>
              ) : (
                <>
                  <p className="text-base font-semibold text-[#0f2747] mb-4">For Real Estate Enquiries</p>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Property Type <span className="text-red-500">*</span></label>
                    <input
                      name="propertyType"
                      required
                      onChange={handleChange}
                      placeholder="e.g. Duplex, Apartment, Land"
                      className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Preferred Location <span className="text-red-500">*</span></label>
                    <input
                      name="preferredLocation"
                      required
                      onChange={handleChange}
                      placeholder="e.g. Lekki, Victoria Island, Abuja"
                      className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Budget Range <span className="text-red-500">*</span></label>
                    <input
                      name="budgetRange"
                      required
                      onChange={handleChange}
                      placeholder="e.g. ₦50M – ₦100M"
                      className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none"
                    />
                  </div>
                </>
              )}

              <p className="text-sm text-gray-500 pt-2">
                Our team will respond shortly.<br />
                <span className="text-[#0f2747] font-semibold">Warm Regards, WhiteRoyalties MGT Ltd</span>
              </p>

              <button
                type="submit"
                className="w-full bg-[#0f2747] hover:bg-[#183a67] text-white py-4 rounded-xl font-semibold text-base transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <Mail size={18} /> Send via Email
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/2349013681303"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-8 z-40 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 hover:bg-[#128C7E] transition-all"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
}
