import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const bookingEmail = "whiteroyalitiesltd@gmail.com";
  const bookingMailto = `mailto:${bookingEmail}?subject=Direct%20Booking%20Request&body=Hello%20WhiteRoyalties%20Management%20Ltd.%2C%0A%0AI%20would%20like%20to%20make%20a%20direct%20booking.%20Please%20contact%20me%20with%20the%20next%20steps.%0A%0AName%3A%0APhone%3A%0AService%20Needed%3A%0APreferred%20Date%3A`;

  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: "Phone",
      details: "+234 901 368 1303",
      link: "tel:+2349013681303"
    },
    {
      icon: <Mail size={28} />,
      title: "Email",
      details: bookingEmail,
      link: bookingMailto
    },
    {
      icon: <MapPin size={28} />,
      title: "Location",
      details: "Lagos, Nigeria",
      link: null
    },
    {
      icon: <Clock size={28} />,
      title: "Hours",
      details: "Mon - Sat: 9AM - 6PM",
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Luxury villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f2747]/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center text-white">
          <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Contact Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your real estate or logistics needs? We're here to help.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f7f4ea] to-transparent"></div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-[#f7f4ea]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#c9a227] to-[#dab834] rounded-2xl flex items-center justify-center text-[#0f2747] mx-auto mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f2747] mb-3">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-[#c9a227] transition-colors font-medium"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600 font-medium">{info.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-widest text-[#c9a227] font-semibold mb-4">Send a Message</p>
                <h2 className="text-3xl md:text-4xl font-serif text-[#0f2747] font-bold mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Have a question or ready to get started? Fill out the form and our team will get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="https://wa.me/2349013681303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl transition-colors"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <FaWhatsapp size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Chat on WhatsApp</div>
                    <div className="text-white/80">Quick and easy communication</div>
                  </div>
                </a>

                <a
                  href={bookingMailto}
                  className="flex items-center gap-4 p-6 bg-[#0f2747] hover:bg-[#183a67] text-white rounded-2xl transition-colors"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <Mail size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Send an Email</div>
                    <div className="text-white/80">Detailed inquiries welcome</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[#f7f4ea] p-8 rounded-3xl shadow-lg">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">First Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">Last Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    placeholder="+234 801 234 5678"
                    className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Service Interested In</label>
                  <select className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none bg-white">
                    <option value="">Select a service</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="logistics">Logistics</option>
                    <option value="both">Both</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">Message <span className="text-red-500">*</span></label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your needs..."
                    className="w-full border-2 border-gray-200 focus:border-[#c9a227] rounded-xl px-4 py-3 text-base transition-colors outline-none bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0f2747] hover:bg-[#183a67] text-white py-4 rounded-xl font-semibold text-base transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

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
