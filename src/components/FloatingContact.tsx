import { Phone, MessageCircle } from "lucide-react";

const FloatingContact = () => {
  const phoneNumber = "+919980900056";
  const whatsappNumber = "919980900056"; // without + sign
  const whatsappMessage = "Hello RJ Events, I would like to know more about your services.";

  return (
    <div className="fixed right-6 bottom-8 flex flex-col gap-4 z-50">

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group w-14 h-14 bg-maroon-deep text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 border border-gold/40"
      >
        <Phone className="w-5 h-5 group-hover:text-gold transition-colors duration-300" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-green-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      </a>

    </div>
  );
};

export default FloatingContact;