// app/components/About.tsx
import Image from "next/image";

export default function About() {
  return (
    <section className="px-8 py-20 bg-white text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6 text-gray-900">About RightClikk</h2>
      <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed mb-12">
        RightClikk is a modern cab booking app designed for everyone —
        whether you’re a daily commuter, a tourist exploring new places, or
        someone who just needs a quick ride. With our fleet of cars and bikes,
        we make traveling fast, affordable, and hassle-free.
      </p>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition duration-300">
          <div className="flex justify-center mb-4">
            <Image
              src="/bike-taxi_1_imjlqb.png"
              alt="Reliable Rides"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">🚖 Reliable Rides</h3>
          <p className="text-gray-600 text-center">
            Book cabs and bikes instantly with just one click — always on time.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition duration-300">
          <div className="flex justify-center mb-4">
            <Image
              src="/sikkim-tourism.jpg"
              alt="Tourism Friendly"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">🌍 Tourism Friendly</h3>
          <p className="text-gray-600 text-center">
            Perfect for tourists — explore cities with local drivers who know the routes.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-6 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition duration-300">
          <div className="flex justify-center mb-4">
            <Image
              src="/flat-illustration-for-mobile-money-transfer-with-human-hands-holding-smartphone-with-credit-card-on-its-screen-safe-and-easy-payment-concept-flat-style-cartoon-illustration-vect.jpg"
              alt="Easy Payments"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">💳 Easy Payments</h3>
          <p className="text-gray-600 text-center">
            Multiple payment options — from cash to digital wallets.
          </p>
        </div>
      </div>
    </section>
  );
}
