import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Navbar />
      {/* Hero Section */}
      <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Hero Text */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-8">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                Next Generation Events
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Manage events with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  absolute clarity.
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-neutral-400 mb-10 leading-relaxed max-w-xl">
                The ultimate platform for attendees and exhibitors to connect, network, and orchestrate memorable experiences without the friction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="inline-flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-1">
                  Start Building Now
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a href="#features" className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-semibold border border-white/10 hover:bg-white/5 text-neutral-300 transition-all duration-300">
                  Explore Features
                </a>
              </div>
            </div>

            {/* Hero Image / Mockup */}
            <div className="relative w-full h-[500px] lg:h-[600px] group perspective-[1000px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-2xl md:rounded-[40px] transform rotate-3 scale-105 transition-transform duration-700 group-hover:rotate-6 opacity-50 blur-xl"></div>
              <div className="relative w-full h-full rounded-2xl md:rounded-[40px] border border-white/10 overflow-hidden shadow-2xl bg-neutral-900 overflow-hidden transform transition-all duration-700 hover:scale-[1.02] shadow-indigo-500/20">
                <img
                  src="/hero-bg.png"
                  alt="Abstract Technology Aesthetic"
                  className="w-full h-full object-cover opacity-80 mix-blend-screen"
                />

                {/* Floating UI Element */}
                <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-semibold mb-1">Live Dashboard</h4>
                      <p className="text-neutral-400 text-sm">Real-time metrics active</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border-[3px] border-indigo-500 border-t-transparent animate-spin"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Features Showcase */}
      <section id="features" className="py-24 border-t border-white/5 relative z-10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for scale</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Everything you need to orchestrate a massive global conference or an intimate workshop in a single unified dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Role-based Access</h3>
              <p className="text-neutral-400 leading-relaxed">
                Seamlessly distinguish between attendees and exhibitors with tailored workflows for each audience type.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Deep Analytics</h3>
              <p className="text-neutral-400 leading-relaxed">
                Track engagement, attendance rates, and exhibitor ROI with stunning, easy-to-read data visualizations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-neutral-400 leading-relaxed">
                Built on a modern React stack with Vite and Tailwind, ensuring an impossibly snappy experience for users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;