import { useState } from "react";

const SOFTR_QUOTE_URL = "[Insert your Softr Quote Form URL here]";
const SOFTR_LOGIN_URL = "[Insert Softr Log In URL]";
const SOFTR_SIGNUP_URL = "[Insert Softr Sign Up URL]";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#FAF9F6", color: "#3A4E6C" }}>

      {/* ─── NAVBAR ─── */}
      <nav style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb" }} className="sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <img src="/dashdone-logo.png" alt="DashDone" className="h-10" />

            {/* Desktop centre links */}
            <div className="hidden md:flex items-center gap-8">
              {["How it Works", "Become a Partner"].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  style={{ color: "#3A4E6C", fontWeight: 500, fontSize: "0.9rem" }}
                  className="hover:opacity-70 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop button group */}
            <div className="hidden md:flex items-center gap-2">
              <a
                href={SOFTR_LOGIN_URL}
                style={{ color: "#3A4E6C", border: "1.5px solid #3A4E6C", fontWeight: 600, fontFamily: "'Poppins', sans-serif", backgroundColor: "transparent" }}
                className="px-5 py-2 rounded-lg text-sm transition-opacity hover:opacity-70 active:scale-95 inline-block text-center"
              >
                Log In
              </a>
              <a
                href={SOFTR_SIGNUP_URL}
                style={{ backgroundColor: "#D48F1A", color: "#ffffff", fontWeight: 600, fontFamily: "'Poppins', sans-serif" }}
                className="px-5 py-2 rounded-lg text-sm transition-opacity hover:opacity-90 active:scale-95 inline-block text-center"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg"
              style={{ color: "#3A4E6C" }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb" }} className="md:hidden px-4 py-4 flex flex-col gap-3">
            {["How it Works", "Become a Partner"].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                style={{ color: "#3A4E6C", fontWeight: 500 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="flex gap-2 pt-1">
              <a
                href={SOFTR_LOGIN_URL}
                style={{ color: "#3A4E6C", border: "1.5px solid #3A4E6C", fontWeight: 600, backgroundColor: "transparent" }}
                className="flex-1 py-2.5 rounded-lg text-sm text-center"
              >
                Log In
              </a>
              <a
                href={SOFTR_SIGNUP_URL}
                style={{ backgroundColor: "#D48F1A", color: "#ffffff", fontWeight: 600 }}
                className="flex-1 py-2.5 rounded-lg text-sm text-center"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO (White) ─── */}
      <section style={{ backgroundColor: "#ffffff" }} className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            style={{ backgroundColor: "#FEF3C7", color: "#D48F1A", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em" }}
            className="inline-block uppercase px-4 py-1 rounded-full mb-6"
          >
            Sydney's Trusted Removalist Platform
          </span>

          <h1
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#3A4E6C", lineHeight: 1.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
          >
            Sydney's Premier Network for Stress-Free Moving.
          </h1>

          <p
            style={{ color: "#3A4E6C", opacity: 0.7, fontWeight: 400, lineHeight: 1.8 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          >
            DashDone connects you with top-rated, carefully chosen removalists across Greater Sydney. Your move, handled by experts.
          </p>

          <a
            href={SOFTR_QUOTE_URL}
            style={{ backgroundColor: "#D48F1A", color: "#ffffff", fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}
            className="px-10 py-4 rounded-lg transition-opacity hover:opacity-90 active:scale-95 inline-flex items-center gap-2"
          >
            Get Your Free Quotes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <p style={{ color: "#3A4E6C", opacity: 0.5, fontSize: "0.82rem", fontWeight: 400 }} className="mt-4">
            Currently serving all Greater Sydney suburbs.
          </p>
        </div>
      </section>

      {/* ─── HOW IT WORKS (Light Cream) ─── */}
      <section id="how-it-works" style={{ backgroundColor: "#FAF9F6" }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p style={{ color: "#D48F1A", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em" }} className="uppercase mb-2">
              Simple Process
            </p>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#3A4E6C" }} className="text-3xl sm:text-4xl">
              How DashDone Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Tell Us About Your Move",
                desc: "Enter your target dates and Sydney location details.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M15 11H9m6 4H9" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "View Quotes in Minutes",
                desc: "Compare competitive quotations from verified local removalists.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Book Straight Away",
                desc: "Lock in your preferred team and relax.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map(({ step, title, desc, icon }, i) => (
              <div
                key={i}
                style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb" }}
                className="rounded-lg p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-transform"
              >
                <div style={{ backgroundColor: "#FEF3C7" }} className="w-16 h-16 rounded-full flex items-center justify-center mb-5">
                  <span style={{ color: "#D48F1A" }}>{icon}</span>
                </div>
                <span
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#D48F1A", fontSize: "0.72rem", letterSpacing: "0.08em" }}
                  className="mb-2"
                >
                  STEP {step}
                </span>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#3A4E6C" }} className="text-lg mb-3">
                  {title}
                </h3>
                <p style={{ color: "#3A4E6C", opacity: 0.65, fontWeight: 400, lineHeight: 1.7 }} className="text-sm">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTRODUCTORY BOOKING (White) ─── */}
      <section style={{ backgroundColor: "#ffffff" }} className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p style={{ color: "#D48F1A", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em" }} className="uppercase mb-3">
            Introductory Offer
          </p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#3A4E6C" }} className="text-3xl sm:text-4xl mb-4">
            Simple, Transparent Booking.
          </h2>
          <p style={{ color: "#3A4E6C", opacity: 0.65, fontWeight: 400, lineHeight: 1.8 }} className="text-base mb-8">
            Take advantage of our low introductory booking fee to secure your Sydney move today. Fast, reliable, and entirely stress-free.
          </p>
          <div className="flex items-baseline justify-center gap-3 mb-8">
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#D48F1A", fontSize: "4rem", lineHeight: 1 }}>$29</span>
            <span style={{ color: "#3A4E6C", opacity: 0.35, fontWeight: 400, textDecoration: "line-through", fontSize: "1.5rem" }}>$49</span>
          </div>
          <a
            href={SOFTR_QUOTE_URL}
            style={{ backgroundColor: "#D48F1A", color: "#ffffff", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            className="px-9 py-4 rounded-lg text-base hover:opacity-90 transition-opacity active:scale-95 inline-block"
          >
            Book Now — $29
          </a>
        </div>
      </section>

      {/* ─── TRUST & SAFETY BANNER (Deep Slate) ─── */}
      <section style={{ backgroundColor: "#3A4E6C" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-around gap-10 md:gap-6 mb-10">
            {[
              {
                title: "Carefully Chosen Partners",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Secure Payments",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: "Satisfaction Guarantee",
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map(({ title, icon }) => (
              <div key={title} className="flex flex-col items-center text-center gap-4">
                <div style={{ backgroundColor: "#D48F1A" }} className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <span style={{ color: "#ffffff" }}>{icon}</span>
                </div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#ffffff" }} className="text-base">
                  {title}
                </h3>
              </div>
            ))}
          </div>

          <p style={{ color: "rgba(255,255,255,0.65)", fontWeight: 400, textAlign: "center", lineHeight: 1.8 }} className="text-base">
            Every professional on DashDone is carefully chosen so you never have to worry.
          </p>
        </div>
      </section>

      {/* ─── PARTNER SECTION (Light Cream) ─── */}
      <section id="become-a-partner" style={{ backgroundColor: "#FAF9F6" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p style={{ color: "#D48F1A", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.1em" }} className="uppercase mb-2">
            For Professionals
          </p>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#3A4E6C" }} className="text-3xl sm:text-4xl mb-4">
            Scale Your Moving Business.
          </h2>
          <p style={{ color: "#3A4E6C", opacity: 0.65, fontWeight: 400, lineHeight: 1.8 }} className="text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of professional removalists growing their client base through our platform.
          </p>
          <button
            style={{ backgroundColor: "#D48F1A", color: "#ffffff", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            className="px-8 py-3.5 rounded-lg text-base hover:opacity-90 transition-opacity active:scale-95"
          >
            Partner with DashDone
          </button>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ backgroundColor: "#3A4E6C", borderTop: "1px solid rgba(255,255,255,0.1)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#D48F1A", fontSize: "1.15rem" }}>
              DashDone
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {["Terms of Service", "Privacy Policy", "Contact Us"].map(link => (
                <a
                  key={link}
                  href="#"
                  style={{ color: "rgba(255,255,255,0.65)", fontWeight: 400, fontSize: "0.85rem" }}
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>
                ABN: 17 829 062 663 | Proudly serving the Greater Sydney community.
              </p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem" }}>© 2026 DashDone</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
