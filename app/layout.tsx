// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "RightClikk",
  description: "Cab booking website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow pt-16">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
