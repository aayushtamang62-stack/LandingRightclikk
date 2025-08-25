// app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900">Login</h2>
        <p className="text-center text-gray-600">Welcome back! Please sign in.</p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
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

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full mt-1 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              required
            />
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-yellow-500 transition"
          >
            Login
          </button>
        </form>

        {/* Extra links */}
        <div className="flex justify-between text-sm text-gray-600">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
          <a href="/signup" className="hover:underline">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
}
