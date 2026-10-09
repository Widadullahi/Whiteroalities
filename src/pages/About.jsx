import { Building2, Package, Shield, Users, Clock, Award, ChevronRight, MapPin, Target, Heart } from "lucide-react";
import clientRelationsImage from "../images/Clientrelation.jpg";
import logisticsDirectorImage from "../images/Logisticdirector.jpg";

export default function About() {
  const team = [
    { name: "Adebayo O.", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
    { name: "Funmi A.", role: "Head of Real Estate", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
    { name: "Chidi E.", role: "Logistics Director", image: logisticsDirectorImage },
    { name: "Zainab I.", role: "Client Relations", image: clientRelationsImage }
  ];

  const values = [
    { icon: <Target size={32} />, title: "Excellence", description: "We strive for excellence in every project we undertake" },
    { icon: <Heart size={32} />, title: "Integrity", description: "Honesty and transparency are at the core of our business" },
    { icon: <Users size={32} />, title: "Client First", description: "Our clients' needs always come first" },
    { icon: <Shield size={32} />, title: "Trust", description: "Building lasting relationships based on trust" }
  ];

  const timeline = [
    { year: "2014", title: "Founded", description: "WhiteRoyalties Management Ltd. was established" },
    { year: "2018", title: "Expansion", description: "Expanded our real estate portfolio across Nigeria" },
    { year: "2021", title: "Logistics Launch", description: "Launched our premium logistics services" },
    { year: "2024", title: "500+ Clients", description: "Celebrated serving over 500 happy clients" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Luxury property"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f2747]/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center text-white">
          <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Our Story & Vision</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Building trust and excellence in real estate and logistics across Nigeria for over a decade.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-serif text-[#0f2747] font-bold">
                Redefining Luxury Real Estate & Logistics
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                WhiteRoyalties Management Ltd. is Nigeria's premier real estate and logistics company, dedicated to providing exceptional service and unparalleled expertise to our discerning clients.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded with a vision to transform the real estate and logistics industry in Nigeria, we have grown to become a trusted partner for individuals and businesses seeking premium services.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Building2 size={24} />, text: "500+ Happy Clients" },
                  { icon: <Award size={24} />, text: "10+ Years Experience" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-[#f7f4ea] rounded-2xl">
                    <div className="w-12 h-12 bg-[#c9a227] rounded-xl flex items-center justify-center text-[#0f2747]">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-[#0f2747]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#c9a227]/20 rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="About"
                className="relative w-full h-[500px] object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#0f2747] text-white p-8 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f7f4ea]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f2747] font-bold">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c9a227] to-[#dab834] rounded-2xl flex items-center justify-center text-[#0f2747] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f2747] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0f2747] font-bold">
              Milestones & Achievements
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a227] to-[#0f2747]"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-24 pb-12 last:pb-0">
                <div className="absolute left-5 w-6 h-6 bg-[#c9a227] rounded-full border-4 border-white shadow-lg"></div>
                <div className="bg-[#f7f4ea] p-6 rounded-2xl">
                  <div className="text-[#c9a227] font-bold text-xl mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold text-[#0f2747] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-[#0f2747] to-[#0a1a31]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-4">
              Meet Our Experts
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Dedicated professionals committed to your success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2747]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#c9a227]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
