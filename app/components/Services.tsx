// app/components/Services.tsx
import { CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    "Daily rides within city",
    "Airport transfers",
    "Outstation rides",
    "Rental packages",
    "Bike rides",
    "Tourist packages",
  ];

  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Services Offered</h2>
      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="flex items-center space-x-2">
            <CheckCircle className="text-yellow-400" />
            <span>{s}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
