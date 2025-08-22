export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-gray-900 pt-28">
          Book Your Ride in Just One Click
        </h1>
        <p className="text-gray-600 mt-4">
          Convenient, affordable rides at your fingertips. Cabs, bikes & more!
        </p>

        <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-500">
          Book a Ride
        </button>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          src="/taxi-removebg-preview.png"
          alt="Taxi Ride"
          className="w-[400px] h-[300px]"
        />
      </div>
    </section>
  );
}
