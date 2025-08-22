// app/components/Footer.tsx
import { Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-8 py-6 bg-white shadow-inner">
      <div className="flex space-x-4 items-center">
        <MessageCircle className="text-green-500" />
        <span>WhatsApp</span>
        <Phone className="text-gray-600" />
        <span>+123-456-7390</span>
      </div>
      <button className="mt-4 md:mt-0 bg-yellow-400 text-black px-6 py-3 rounded-xl shadow-md hover:bg-yellow-500">
        Book Now
      </button>
    </footer>
  );
}
