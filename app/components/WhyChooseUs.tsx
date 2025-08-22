// app/components/WhyChooseUs.tsx
import { Check } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    "Affordable pricing",
    "24/7 availability",
    "Professional drivers",
    "Safety & GPS tracking",
  ];

  return (
    <section className="px-8 py-12 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-500">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {points.map((p, i) => (
          <div key={i} className="flex items-center space-x-2 text-gray-800">
            <Check className="text-yellow-400" />
            <span>{p}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
