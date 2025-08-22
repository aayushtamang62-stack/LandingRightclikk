// app/components/HowItWorks.tsx
import { MapPin, Car, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="px-8 py-12 text-center">
      <h2 className="text-2xl font-bold mb-8">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <MapPin className="mx-auto text-yellow-400" size={40} />
          <p className="mt-2">Enter pickup & destination</p>
        </div>
        <div>
          <Car className="mx-auto text-yellow-400" size={40} />
          <p className="mt-2">Choose cab or bike</p>
        </div>
        <div>
          <CheckCircle className="mx-auto text-yellow-400" size={40} />
          <p className="mt-2">Confirm & ride</p>
        </div>
      </div>
    </section>
  );
}
