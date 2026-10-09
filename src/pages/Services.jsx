import { Building2, Package, Shield, Home, Key, MapPin, Truck, CheckCircle2 } from "lucide-react";

export default function Services() {
  const realEstateServices = [
    {
      icon: <Home size={32} />,
      title: "Property Sales",
      description: "Premium properties for sale in prime locations across Nigeria",
      features: ["Luxury Villas", "Apartments", "Commercial Spaces", "Land"]
    },
    {
      icon: <Key size={32} />,
      title: "Property Rentals",
      description: "Premium rental properties with full management services",
      features: ["Short & Long Term", "Furnished & Unfurnished", "Corporate Rentals", "Property Management"]
    },
    {
      icon: <Building2 size={32} />,
      title: "Real Estate Consulting",
      description: "Expert advice for property investments and market analysis",
      features: ["Market Research", "Investment Advisory", "Valuation Services", "Feasibility Studies"]
    }
  ];

  const logisticsServices = [
    {
      icon: <Truck size={32} />,
      title: "Premium Delivery",
      description: "Secure and timely delivery of high-value assets",
      features: ["Same Day Delivery", "Temperature Controlled", "Insurance Coverage", "Real-time Tracking"]
    },
    {
      icon: <Package size={32} />,
      title: "Asset Handling",
      description: "Professional handling of valuable and delicate items",
      features: ["Special Packaging", "White Glove Service", "Storage Solutions", "Customized Solutions"]
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Logistics",
      description: "Maximum security for your valuable shipments",
      features: ["24/7 Monitoring", "GPS Tracking", "Armed Security", "Secure Warehousing"]
    }
  ];

  const process = [
    { step: "01", title: "Consultation", description: "We discuss your needs and requirements" },
    { step: "02", title: "Planning", description: "Create a customized plan for your project" },
    { step: "03", title: "Execution", description: "Professional implementation of the plan" },
    { step: "04", title: "Delivery", description: "Timely delivery and quality assurance" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Luxury interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f2747]/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center text-white">
          <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Our Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Premium Solutions</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive real estate and logistics services tailored to meet your needs.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7f4ea] to-transparent"></div>
      </section>

      {/* Real Estate Services */}
      <section className="py-20 bg-[#f7f4ea]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Real Estate</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f2747] font-bold">
              Property Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {realEstateServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c9a227] to-[#dab834] rounded-2xl flex items-center justify-center text-[#0f2747] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f2747] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 size={18} className="text-[#c9a227]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Logistics</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f2747] font-bold">
              Logistics Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {logisticsServices.map((service, index) => (
              <div key={index} className="bg-[#f7f4ea] p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c9a227] to-[#dab834] rounded-2xl flex items-center justify-center text-[#0f2747] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f2747] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 size={18} className="text-[#c9a227]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-[#0f2747] to-[#0a1a31]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-4">
              Our Process
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Simple and straightforward process to ensure your satisfaction</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#c9a227] rounded-full flex items-center justify-center text-[#0f2747] font-bold text-2xl mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
