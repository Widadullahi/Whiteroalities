import { useState } from "react";
import { Mail, X } from "lucide-react";

export default function Portfolio() {
  const bookingEmail = "whiteroyalitiesltd@gmail.com";

  const properties = [
    {
      src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Duplex",
      category: "Residential",
      location: "Lekki, Lagos",
      type: "real-estate"
    },
    {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Penthouse",
      category: "Luxury",
      location: "Victoria Island, Lagos",
      type: "real-estate"
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Commercial Space",
      category: "Commercial",
      location: "Abuja",
      type: "real-estate"
    },
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Executive Villa",
      category: "Premium",
      location: "Ikoyi, Lagos",
      type: "real-estate"
    },
    {
      src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Waterfront Property",
      category: "Luxury",
      location: "Banana Island, Lagos",
      type: "real-estate"
    },
    {
      src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Garden Estate",
      category: "Residential",
      location: "Port Harcourt",
      type: "real-estate"
    }
  ];

  const logistics = [
    {
      src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Secure Logistics",
      category: "Delivery",
      description: "High-value asset transportation"
    },
    {
      src: "https://media.istockphoto.com/id/2213567565/photo/smiling-courier-delivering-package-to-customer.jpg?s=612x612&w=0&k=20&c=-37HI3xrk5yClDDcn-ipR7k38OXn0eL1hZeJjBadpoc=",
      title: "Premium Delivery",
      category: "Logistics",
      description: "White-glove delivery service"
    },
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cargo Handling",
      category: "Freight",
      description: "Professional cargo management"
    }
  ];

  const [modal, setModal] = useState({ open: false, type: null });
  const [formData, setFormData] = useState({});

  const openModal = (type) => {
    setFormData({});
    setModal({ open: true, type });
  };

  const closeModal = () => setModal({ open: false, type: null });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    let subject, body;
    if (modal.type === "logistics") {
      subject = "Logistics Service Request";
      body =
        `Hello, Welcome to WhiteRoyalties Management Ltd.\n\n` +
        `For Logistics Service\n\n` +
        `Pickup Address: ${formData.pickupAddress || ""}\n` +
        `Delivery Address: ${formData.deliveryAddress || ""}\n` +
        `Item Description: ${formData.itemDescription || ""}\n\n` +
        `Our team will respond shortly.\n\nWarm Regards,\nWhiteRoyalties MGT Ltd`;
    } else {
      subject = "Real Estate Enquiry";
      body =
        `Hello, Welcome to WhiteRoyalties Management Ltd.\n\n` +
        `For Real Estate Enquiries, Kindly Send:\n\n` +
        `Property Type: ${formData.propertyType || ""}\n` +
        `Preferred Location: ${formData.preferredLocation || ""}\n` +
        `Budget Range: ${formData.budgetRange || ""}\n\n` +
        `Our team will respond shortly.\n\nWarm Regards,\nWhiteRoyalties MGT Ltd`;
    }
    window.location.href = `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    closeModal();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Luxury property portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f2747]/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center text-white">
          <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Our Portfolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Premium Properties & Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Explore our curated selection of luxury properties and logistics solutions.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Real Estate Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Real Estate</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f2747] font-bold">
              Premium Properties
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                <img
                  src={property.src}
                  alt={property.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2747]/90 via-[#0f2747]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-sm text-[#f5df8f] mb-1">{property.category}</div>
                      <h3 className="text-xl font-bold">{property.title}</h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-gray-200 text-sm">{property.location}</span>
                  </div>
                  <button
                    onClick={() => openModal("real-estate")}
                    className="mt-4 w-full bg-[#c9a227] hover:bg-[#dab834] text-[#0f2747] font-semibold py-3 rounded-xl transition-colors"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Portfolio */}
      <section className="py-20 bg-[#f7f4ea]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Logistics</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f2747] font-bold">
              Logistics Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {logistics.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2747]/90 via-[#0f2747]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm text-[#f5df8f] mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 mb-4">{item.description}</p>
                  <button
                    onClick={() => openModal("logistics")}
                    className="w-full bg-[#c9a227] hover:bg-[#dab834] text-[#0f2747] font-semibold py-3 rounded-xl transition-colors"
                  >
                    Request Service
                  </button>
                </div>
              </div>
            ))}
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
    </div>
  );
}
