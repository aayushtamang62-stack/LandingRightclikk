// app/components/About.tsx
export default function About() {
  return (
    <section className="px-8 py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">About RightClikk</h2>
      <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
        RightClikk is a modern cab booking app designed for everyone —
        whether you’re a daily commuter, a tourist exploring new places, or
        someone who just needs a quick ride. With our fleet of cars and bikes,
        we make traveling fast, affordable, and hassle-free.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
        <div className="p-6 rounded-2xl shadow bg-gray-50">
          <h3 className="text-xl font-semibold mb-2">🚖 Reliable Rides</h3>
          <p className="text-gray-600">
            Book cabs and bikes instantly with just one click — always on time.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow bg-gray-50">
          <h3 className="text-xl font-semibold mb-2">🌍 Tourism Friendly</h3>
          <p className="text-gray-600">
            Perfect for tourists — explore cities with local drivers who know the routes.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow bg-gray-50">
          <h3 className="text-xl font-semibold mb-2">💳 Easy Payments</h3>
          <p className="text-gray-600">
            Multiple payment options — from cash to digital wallets.
          </p>
        </div>
      </div>
    </section>
  );
}
