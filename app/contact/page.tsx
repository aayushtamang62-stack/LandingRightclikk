// app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 md:p-12">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We’d love to hear from you. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here..."
                className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">📧 Email</h2>
              <p className="mt-1">support@rightclikk.com</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">📞 Phone</h2>
              <p className="mt-1">+123-456-7890</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">📍 Address</h2>
              <p className="mt-1">123 RightClikk Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
